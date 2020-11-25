const knex = require('../../db/knex');
const db = require('../../db/knex');
const express = require('express');
const app = express();
require('dotenv').config();

module.exports = {
  recommendations: () => {
    return db('recommendations');
  },
};
