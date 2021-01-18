const knex = require("../../db/knex");
const db = require("../../db/knex");
const verify = require("../../middleware/verifyToken");
require("dotenv").config();
const secret = process.env.JWTSECRET || "tejksn";

// Gets all Recommendations
module.exports = {
  recommendations: async (context) => {
    return db("recommendation").orderBy([
      {
        column: "created_at",
        order: "desc",
      },
    ]);
  },

  getRecommendationById: async ({ id }, context) => {
    const { token } = await context();
    if (token) {
      try {
        const data = await db("recommendation").where({ id });
        if (data.length > 0) {
          return data;
        }

        return new Error("Recommendation Not Found");
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    return new Error("Please sign in");
  },
  // Filter recommencation by title, cat, user_id
  recommendationFilter: async ({ title, category, user_id }, context) => {
    let res = {};
    if (title) {
      res["title"] = title;
    }
    if (category) {
      res["category"] = category;
    }
    if (user_id) {
      res["user_id"] = user_id;
    }
    const { token } = await context();
    if (token) {
      try {
        const query = await db("recommendation").where(res);
        return query;
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in");
  },

  // Add recommendation
  addRecommendations: async (
    { title, description, category, main_picture },
    context
  ) => {
    const { token } = await context();
    if (token) {
      const user = verify(token, secret);

      const user_id = user[0].id;

      try {
        const query = await db("recommendation")
          .insert({ title, description, category, main_picture, user_id })
          .returning("*");
        let userRes = { ...user["0"] };
        return { recommendation: { ...query["0"] }, user: userRes };
      } catch (error) {
        throw error;
      }
    }
    throw new Error("Please login to add a recommendation");
  },

  // Edit recommendation
  editRecommendation: async (
    { id, title, category, description, main_picture },
    context
  ) => {
    const { token } = await context();
    let res = {};
    if (title) {
      res["title"] = title;
    }
    if (category) {
      res["category"] = category;
    }
    if (description) {
      res["description"] = description;
    }
    if (main_picture) {
      res["main_picture"] = main_picture;
    }
    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;
      try {
        let checkIfSameUser = await db("recommendation").where({ id, user_id });
        if (checkIfSameUser.length > 0) {
          let query = await db("recommendation")
            .where({ id })
            .update(res)
            .returning("*");
          return query;
        }
        throw new Error("Unaouthrized to edit this recommendation");
      } catch (error) {
        throw error;
      }
    }
    throw new Error("Please sign in to edit");
  },

  // Delete Recommendation
  deleteRecommendation: async ({ id }, context) => {
    const { token } = await context();

    if (token) {
      const user = verify(token, secret);
      const user_id = user[0].id;
      try {
        const check = await db("recommendation").where({ id, user_id });
        if (check.length > 0) {
          const query = await db("recommendation").where({ id }).del();
          return { message: "Recommendation deleted successfuly" };
        }
        throw new Error("Unautharized to make changes");
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in");
  },
};
