const knex = require("../../db/knex");
const db = require("../../db/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
require("dotenv").config();

const secret = process.env.JWTSECRET || "tejksn";
module.exports = {
  users: () => {
    return db("users");
  },

  user: async (id) => {
    let num = id.id;
    try {
      const items = await db("users").where({ id: num });
      return items;
    } catch (error) {
      return error;
    }
  },

  addUser: async ({ username, email, password }) => {
    const hashPass = await bcrypt.hash(password, 12);
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!re.test(password)) {
      return new Error(
        "Passowrd must be atleast 6 characters long, must contain atleast one number, one lowercase letter and one upper case letter"
      );
    }
    try {
      const query = await db("users")
        .insert({ username, email, password: hashPass })
        .returning("*");
      return query;
    } catch (error) {
      if (error.code === "23505" && error.detail.includes("email")) {
        return new Error("This email is already in use");
      } else if (error.code === "23505" && error.detail.includes("username")) {
        return new Error("This username is taken");
      }
      return error;
    }
  },

  loginUser: async ({ username, password }, context) => {
    const user = await db("users").where({ username });
    if (user.length < 1) {
      throw new Error("Invalid Credentials");
    }
    const validPass = await bcrypt.compare(password, user[0].password);
    if (!validPass) {
      throw new Error("Invalid Credentials");
    }
    const token = await jwt.sign(
      {
        user: user,
      },
      secret,
      { expiresIn: "1y" }
    );
    if (user.length > 0) {
      return { user, token };
    }
  },
};
