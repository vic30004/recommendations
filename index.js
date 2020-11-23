const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const colors = require('colors');

const PORT = 5000;

const schema = buildSchema(`
    type Query {
        hello: String 
}
    
`);

const root = {
  hello: () => {
    return 'Hello World';
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, (req, res) => {
  console.log(`Listening on Port ${PORT}`.yellow.bold);
});
