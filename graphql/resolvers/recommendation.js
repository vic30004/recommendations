const knex = require("../../db/knex");
const db = require("../../db/knex");
const express = require("express");
const app = express();
require("dotenv").config();

module.exports = {
  recommendations: async (context) => {
    return db("recommendations");
  },

  addRecommendations: async (
    { title, description, category, main_picture },
    context
  ) => {
    const {token} = await context();
    // Decode token

    // Retrieve user id

    // Add it to mutation as user_id
    if(token){
      try {
        const query = await db("recommendation")
          .insert(title, description, category, main_picture)
          .returning("*");
          return query
      } catch (error) {
        throw error
      }
    }
    throw new Error('Please login to add a recommendation')
  
  },
};
