const knex = require("../../db/knex");
const db = require("../../db/knex");
const express = require("express");
const app = express();
const verify = require("../../middleware/verifyToken");
require("dotenv").config();
const secret = process.env.JWTSECRET || "tejksn";

// Gets all Recommendations
module.exports = {
  recommendations: async (context) => {
    return db("recommendation");
  },

  recommendationFilter: async ({title, category, user_id}, context) => {
    let res ={}
    if (title){
      res['title']=title
    }
    if(category){
      res['category']=category
    }
    if(user_id){
      res['user_id']=user_id
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
};
