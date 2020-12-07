const express = require('express');

// const unless = require('express-unless');
const jwt = require('jsonwebtoken');

// const app = express();

const verifyToken = (token, secret) => {
    let res;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
     throw err
    }
    res=decoded
  });
  return res.user
};

module.exports = verifyToken
