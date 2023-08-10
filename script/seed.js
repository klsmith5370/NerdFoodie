'use strict'

const { db, models: { User, CharacterRecipe } } = require('../server/db/index')

async function seed() {
    await db.sync({ force: true }) // clears db and matches models to tables
    console.log('db synced!')

    // creates users
    const users = await Promise.all([
        User.create({ username: 'kls5370', password: '123' }),
        User.create({ username: 'yuna', password: '123' }),
    ])

    // creates food recipes
    const characterRecipes = await Promise.all([
        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),

        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),

        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),

        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),

        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),

        CharacterRecipe.create({
            characterName: ,
            recipeName: ,
            recipeIngredients: ,
            recipeInstructions: ,
            recipeDescription: ,
            characterImage: ,
        }),
    ])

    console.log(`seeded ${users.length} users`)
    console.log(`seeded ${characterRecipes.length} recipes`)
    console.log(`seeded successfully`)
    return {
      users: {
        kls5370: users[0],
        yuna: users[1]
      }
    }
}

async function runSeed() {
    console.log('seeding...')
    try {
      await seed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    } finally {
      console.log('closing db connection')
      await db.close()
      console.log('db connection closed')
    }
}

if (module === require.main) {
    runSeed()
}

module.exports = seed

