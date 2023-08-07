const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    bio: String
    image: String
  }

  type CharacterRecipe {
    id: ID!
    characterName: String!
    recipeName: String!
    recipeIngredients: String
    recipeInstructions: String
    recipeDescription: String
    recipeCategory: [String]
    characterImage: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    characterRecipes: [CharacterRecipe!]!
    characterRecipe(id: ID!): CharacterRecipe
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, username: String!, password: String!, email: String!, bio: String, image: String): User
    // Add more mutation functions as needed
  }
`)

module.exports = schema