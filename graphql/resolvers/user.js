const knex = require('../../db/knex');
const db = require('../../db/knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
require('dotenv').config();

const secret = process.env.JWTSECRET;
module.exports = {
  users: () => {
    return db('users');
  },

  user: async (id) => {
    let num = id.id;
    try {
      const items = await db('users').where({ id: num });
      return items;
    } catch (error) {
      return error;
    }
  },

  addUser: async ({ username, email, password }) => {
    const hashPass = await bcrypt.hash(password, 12);
    try {
      const query = await knex('users')
        .insert({ username, email, password: hashPass })
        .returning('*');
      return query;
    } catch (error) {
      return error;
    }
  },

  loginUser: async ({ username, password }, res, req, next) => {
    const user = await db('users').where({ username });
    if (user.length < 1) {
      throw new Error('Invalid Credentials');
    }
    const validPass = await bcrypt.compare(password, user[0].password);
    if (!validPass) {
      throw new Error('Invalid Credentials');
    }
    console.log(secret);
    const token = await jwt.sign(
      {
        user: user,
      },
      secret,
      { expiresIn: '1y' }
    );

    return { token };
  },
};
