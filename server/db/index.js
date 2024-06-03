const db = require('./db')

const User = require('./models/User')
const CharacterRecipe = require('./models/CharacterRecipes')


// Associations go here!
User.belongsToMany(CharacterRecipe, { through: User_Recipe })
CharacterRecipe.belongsToMany(User, { through: User_Recipe })

module.exports = {
  db,
  models: {
    User,
    CharacterRecipe
  },
}