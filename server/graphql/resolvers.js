const { User, CharacterRecipe } = require('../db/models');

const root = {
  users: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Error fetching users:', error);
    }
  },

  user: async ({ id }) => {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error('Error fetching user:', error);
    }
  },

  characterRecipes: async () => {
    try {
      const recipes = await CharacterRecipe.findAll();
      return recipes;
    } catch (error) {
      throw new Error('Error fetching character recipes:', error);
    }
  },

  characterRecipe: async ({ id }) => {
    try {
      const recipe = await CharacterRecipe.findByPk(id);
      return recipe;
    } catch (error) {
      throw new Error('Error fetching character recipe:', error);
    }
  },

  createUser: async ({ firstName, lastName, username, password, email, bio, image }) => {
    try {
      const user = await User.create({ firstName, lastName, username, password, email, bio, image });
      return user;
    } catch (error) {
      throw new Error('Error creating user:', error);
    }
  },


  // Add more resolver functions for mutations as needed
};

module.exports = root