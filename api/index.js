const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const colors = require('colors');
const PORT = 5000;
const schema = require('./graphql/schema');
const knex = require('./knexfile');
const resolver = require('./graphql/resolvers');
const unless = require('express-unless');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWTSECRET || "tejksn";
app.set('db', knex.development);
const root = {
  users: async () => {
    return knex.development
      .select('*')
      .from('users')
      .then((rows) => rows);
  },
};

const verifyUser = async (req) => {
  const token = await req.headers;
};

const context = async req => {
  const { authorization: token } = req.headers;
  return { token };
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const verifyToken = (req, res, next) => {
  jwt.verify(
    req.headers.authorization,
    secret,
    (err, decoded) => {
      if (err) {
        return res.send(401);
      }
      next();
    }
  );
};
verifyToken.unless = unless;

app.use(verifyToken.unless({ path: ['/graphql', '/'] }));

app.use(
  '/graphql',
 
  graphqlHTTP(async (req, res) => {
  
    res.set('Access-Control-Allow-Origin', '*',
    );
    verifyUser(req);
   
    return {
      schema: schema,
      rootValue: resolver,
      graphiql: true,
      context: () => context(req)
    };
  })
);

app.listen(PORT, (req, res) => {
  console.log(`Listening on Port ${PORT}`.yellow.bold);
});
