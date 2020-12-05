const knex = require("../../db/knex");
const db = require("../../db/knex");
const express = require("express");
const app = express();
const verify = require('../../middleware/verifyToken')
require("dotenv").config();
const secret = process.env.JWTSECRET || "tejksn";
module.exports = {
  recommendations: async (context) => {
    return db("recommendation");
  },

  addRecommendations: async (
    { title, description, category, main_picture },
    context
  ) => {
    const {token} = await context();
    if(token){
     const user= verify(token,secret)
     console.log(user)
     const user_id = user[0].id
      console.log(title, description, category, main_picture)
      try {
        const query = await db("recommendation")
          .insert({title, description, category, main_picture, user_id})
          .returning("*");
          let userRes= {...user['0']}
          return {recommendation:{...query["0"]}, user:userRes}
      } catch (error) {
        throw error
      }
    }
    throw new Error('Please login to add a recommendation')
  
  },
};
