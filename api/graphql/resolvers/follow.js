const db = require("../../db/knex");
const verify = require("../../middleware/verifyToken");
require("dotenv").config();
const secret = process.env.JWTSECRET || "tejksn";

module.exports = {
  myFollows: async ({}, context) => {
    const { token } = await context();

    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;

      try {
        const query = await db("recommendation")
          .join("follow", "recommendation.id", "=", "follow.recommendation_id")
          .select("title", "follow.id", "follow.user_id")
          .where({ "follow.user_id": user_id });
        const test = new Set(query);
        return query;
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in to view your follows");
  },

  getFollowsByUserId: async ({ user_id }, context) => {
    const { token } = await context();

    if (token) {
      try {
        const data = await db("recommendation")
          .join("follow", "recommendation.id", "=", "follow.recommendation_id")
          .select(
            "title",
            "follow.id",
            "follow.user_id",
            "follow.recommendation_id",
            "recommendation.description",
            "recommendation.category",
            "recommendation.main_picture",
            "recommendation.user_id as owner"
          )
          .where({ "follow.user_id": user_id });
        if (data.length > 0) {
          return data;
        }

        return new Error("Following nothing at the moment");
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in");
  },

  makeFollwo: async ({ recommendation_id }, context) => {
    const { token } = await context();

    if (token) {
      const user = verify(token, secret);
      const user_id = user["0"].id;

      try {
        const check = await db("recommendation").where({
          id: recommendation_id,
        });
        const checkIfFollow = await db("follow").where({
          recommendation_id,
          user_id,
        });
        const followNum = check[0].follow;
        if (checkIfFollow.length > 0) {
          await db("follow").where({ recommendation_id }).del();
          await db("recommendation")
            .where({ id: recommendation_id })
            .update({ follow: followNum - 1 });
          return [];
        }
        if (check.length > 0) {
          const recUser = check["0"].user_id;
          if (user_id === recUser) {
            throw new Error("You cant follow your own recommendation");
          }

          const follow = await db("follow")
            .insert({
              user_id,
              recommendation_id,
            })
            .returning("*");

          await db("recommendation")
            .where({ id: recommendation_id })
            .update({ follow: followNum + 1 });
          return follow;
        }
        throw new Error("No recommendation found");
      } catch (error) {
        throw error;
      }
    }
    return new Error("Please sign in to follow");
  },

  showFollowesForRecommendation: async ({ recommendation_id }, context) => {
    try {
      const check = await db("recommendation").where({
        "recommendation.id": recommendation_id,
      });
      if (check.length > 0) {
        const query = await db("follow")
          .join(
            "recommendation",
            "follow.recommendation_id",
            "=",
            "recommendation.id"
          )
          .select("title", "follow.id", "follow.user_id")
          .where({ "recommendation.id": recommendation_id });
        return query;
      }
      return new Error("Recommendation not found");
    } catch (error) {
      throw error;
    }
  },
};
