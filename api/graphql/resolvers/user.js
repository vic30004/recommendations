const knex = require("../../db/knex");
const db = require("../../db/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const verify = require("../../middleware/verifyToken");

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
      return { ...items[0] };
    } catch (error) {
      return error;
    }
  },

  loadUser: async ({}, context) => {
    const { token } = await context();
    if (token) {
      const user = verify(token, secret);
      return user;
    } else {
      return new Error("Auth credentials not provided");
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

    const emailCheck =
      /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;

    if (!emailCheck.test(email)) {
      return new Error("Please enter a valid email");
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

  getUserByUsername: async ({ username }, context) => {
    const { token } = await context();
    if (token) {
      try {
        const query = await db("users").where({ username });
        if (query.length > 0) {
          return query;
        }
        return "User not found";
      } catch (error) {
        return new Error("Something went wrong");
      }
    } else {
      return new Error("Please sign in");
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
