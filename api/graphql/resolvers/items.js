const db = require("../../db/knex");
const verify = require("../../middleware/verifyToken");
require("dotenv").config();
const secret = process.env.JWTSECRET || "tejksn";

module.exports = {
  showItems: async ({ recommendation_id }, context) => {
      try {
        const query = db("items").where({ recommendation_id });
        return query;
      } catch (error) {
        throw error;
      }
  },

  addItems: async (
    { title, description, cover_picture, recommendation_id },
    context
  ) => {
    const { token } = await context();

    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;
      try {
        const check = await db("recommendation").where({
          id: recommendation_id,
        });
        if (check.length > 0) {
          const query = await db("items")
            .insert({
              title,
              description,
              cover_picture,
              recommendation_id,
              user_id,
            })
            .returning("*");
          return query;
        }
        throw new Error("No matching recommendation");
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in to add Items");
  },

  editItems: async (
    { id, title, description, cover_picture, recommendation_id },
    context
  ) => {
    const { token } = await context();
    const res = {};
    if (title) {
      res["title"] = title;
    }
    if (description) {
      res["description"] = description;
    }
    if (cover_picture) {
      res["cover_picture"] = cover_picture;
    }
    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;
      try {
        const checkRecommendation = await db("recommendation").where({
          user_id,
          id: recommendation_id,
        });
        const checkItem = await db("items").where({ id });
        if (checkRecommendation.length > 0 && checkItem.length > 0) {
          const query = await db("items")
            .where({ id })
            .update(res)
            .returning("*");
          return query;
        }
      } catch (error) {
        throw error;
      }
    }
    throw new Error("Please sign in to edit");
  },

  deleteItem: async ({ id, recommendation_id }, context) => {
    const { token } = await context();
    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;
      try {
        const checkRec = await db("recommendation").where({
          id: recommendation_id,
          user_id,
        });
        const checkItem = await db("items").where({ id });
        if (checkRec.length > 0 && checkItem.length > 0) {
          const query = await db("items").where({ id }).del();
          return { message: "Item deleted successfully" };
        }
        return new Error("Item not found");
      } catch (error) {
        throw error;
      }
    }
    throw new Error("Please sign in to delete item");
  },
};
