const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const colors = require('colors');
const PORT = 5000;
const schema = require('./graphql/schema');
const knex = require('./knexfile');
const resolver = require('./graphql/resolvers')


app.set('db', knex.development);

const root = {
  users: async () => {
    return knex.development
      .select('*')
      .from('users')
      .then((rows) => rows);
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(PORT, (req, res) => {
  console.log(`Listening on Port ${PORT}`.yellow.bold);
});
