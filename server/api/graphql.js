const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('../graphql/schema')
const root = require('../graphql/resolvers')

const router = express.Router()

router.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

module.exports = router