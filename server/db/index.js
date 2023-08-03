const db = require('./db')

const User = require('./models/User')
const CharacterRecipe = require('./models/CharacterRecipes')


// Associations go here!

module.exports = {
  db,
  models: {
    User,
    CharacterRecipe
  },
}