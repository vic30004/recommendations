const knex = require('../../db/knex');
const db = require('../../db/knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
require('dotenv').config();

const secret = process.env.JWTSECRET || "tejksn";
console.log(secret)
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
      const query = await db('users')
        .insert({ username, email, password: hashPass })
        .returning('*');
      return query;
    } catch (error) {
      return error;
    }
  },

  loginUser: async ({ username, password }, context) => {
    const user = await db('users').where({ username });
    console.log(context())
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
      if(user.length>0){
        console.log(user)
        return {user, token}

      }
  },
};
