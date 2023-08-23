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
            characterName: 'Marie',
            recipeName: 'Strawberry Cream Croissants',
            recipeIngredients: '2 large croissants, 1/2 cup heavy whipping cream, 2 tablespoons powdered sugar, 1/2 teaspoon vanilla extract, 1/2 cup fresh strawberries, washed, hulled, and sliced, Fresh mint leaves for garnish (optional)',
            recipeInstructions: 'Prepare the Cream: In a mixing bowl, whip the heavy whipping cream using a hand mixer or a stand mixer until soft peaks form.  Sweeten and Flavor: Gently fold in the powdered sugar and vanilla extract into the whipped cream until well combined. This will create a luscious and lightly sweetened cream. Slice and Prepare Croissants: Carefully slice the croissants in half horizontally, creating a top and bottom half for each croissant. Layer the Cream and Strawberries: Spoon a generous amount of the prepared cream onto the bottom half of each croissant. Spread it evenly with a spoon or spatula. Top the cream with a layer of sliced strawberries. Assemble: Place the top half of the croissant over the strawberries, creating a sandwich-like structure with the cream and strawberries in the middle. Garnish: If desired, add a small mint leaf on top of each croissant for a touch of freshness and color. Serve and Enjoy: Place the Strawberry Cream Croissants on a serving plate and enjoy them with a cup of tea or coffee. The flaky croissant, creamy filling, and juicy strawberries will transport you to a delightful moment reminiscent of her sophistication and charm.',
            recipeDescription: 'Indulge in the refined taste of Marie from The Aristocats with these Strawberry Cream Croissants. A tribute to her grace and charm, this simple yet exquisite treat combines the flakiness of croissants, the velvety smoothness of cream, and the sweetness of fresh strawberries.',
            characterImage: 'https://static.wikia.nocookie.net/disney/images/8/8f/Profile_-_Marie.jpeg/revision/latest?cb=20190426045821',
        }),

        CharacterRecipe.create({
            characterName: 'Yor Forger',
            recipeName: 'Secret Agent Avocado Toast',
            recipeIngredients: '2 ripe avocados, 4 slices of your favorite whole-grain bread, 1 small red onion, thinly sliced, 1 medium tomato, diced, 1 tablespoon lemon juice, Salt and pepper to taste, A pinch of red pepper flakes (optional, for a little heat), Fresh cilantro leaves, chopped, for garnish',
            recipeInstructions: 'Prepare the Avocado Spread: Cut the avocados in half, remove the pits, and scoop the flesh into a bowl. Add the lemon juice, salt, and pepper. Use a fork to mash everything together until you achieve your desired level of creaminess. If you like it chunky, leave some small pieces. Toast the Bread: Toast the slices of whole-grain bread until they are golden brown and crispy. Assemble the Avocado Toast: Spread a generous layer of the avocado mixture onto each toasted slice of bread. Add the Toppings: Sprinkle the diced tomato over the avocado spread, distributing it evenly. Lay a few slices of red onion on top of the tomato. Optional Heat: If you enjoy a bit of spiciness, sprinkle a pinch of red pepper flakes over the toppings. Garnish: Finish off each toast with a sprinkle of fresh chopped cilantro leaves. The cilantro adds a burst of freshness and color to the dish.',
            recipeDescription: 'Not only a feast for your taste buds, but also a source of nourishment that supports your endeavors, just like her strategic thinking and quick reflexes in the world of espionage.',
            characterImage: 'https://practicaltyping.com/wp-content/uploads/2023/02/yor.jpg',
        }),

        CharacterRecipe.create({
            characterName: 'Aerith',
            recipeName: 'Lifestream Delight Smoothie Bowl',
            recipeIngredients: 'For the smoothie base: 1 ripe banana, frozen and sliced, 1/2 cup frozen mixed berries (strawberries, blueberries, raspberries), 1/2 cup spinach leaves, 1/4 cup plain Greek yogurt, 1/2 cup almond milk (or any preferred milk), 1 tablespoon chia seeds, 1 teaspoon honey (optional). For toppings: Fresh sliced kiwi (representing her vibrant personality), Sliced peaches or nectarines (symbolizing her connection to nature), Edible flower petals (such as rose petals or pansies), Toasted coconut flakes (for a touch of texture), Drizzle of honey',
            recipeInstructions: 'Prepare the Lifestream Smoothie Base: In a blender, combine the frozen banana slices, frozen mixed berries, spinach leaves, Greek yogurt, almond milk, chia seeds, and honey (if using). Blend until smooth and creamy, adding more almond milk if needed to achieve the desired consistency. Assemble the Smoothie Bowl: Pour the smoothie base into a bowl. Arrange the fresh sliced kiwi and peaches or nectarines on top of the smoothie base. Add the Finishing Touches: Sprinkle edible flower petals over the fruit for an enchanting touch. Scatter toasted coconut flakes for a delightful crunch and flavor. Drizzle a small amount of honey over the top for an extra hint of sweetness.',
            recipeDescription: 'Embark on a culinary journey reminiscent of her vibrant spirit and connection to the Lifestream. This refreshing and wholesome Lifestream Delight Smoothie Bowl is a tribute to her nurturing nature and love for nature.',
            characterImage: 'https://www.gamespot.com/a/uploads/scale_landscape/313/3136061/3655248-aerith.png',
        }),

        CharacterRecipe.create({
            characterName: 'Luna',
            recipeName: 'Crescent Moon Snacks',
            recipeIngredients: '1 package refrigerated crescent roll dough. ½ cup Nutella or chocolate spread. Powdered sugar (for dusting)',
            recipeInstructions: 'Preheat your oven to the temperature specified on the crescent roll dough package. Unroll the crescent roll dough and separate the triangles. Spoon a small amount (about 1 teaspoon) of Nutella or chocolate spread onto the wide end of each triangle. Gently roll up the triangles, starting from the wide end and rolling towards the pointed end, creating crescent shapes. Place the crescent shapes on a baking sheet lined with parchment paper. Bake according to the package instructions, until the crescent shapes are golden brown and cooked through. Once baked, let the crescent moon snacks cool slightly on a wire rack. Dust the crescent moon snacks with powdered sugar to add a touch of moonlit magic.',
            recipeDescription: 'Inspired by the elegance of Luna from Sailor Moon, these Crescent Moon Snacks are a quick and easy treat that captures the magic of the moonlit nights.',
            characterImage: 'https://cdnb.artstation.com/p/assets/images/images/063/866/439/large/retratosanime-196.jpg?1686574453',
        }),

        CharacterRecipe.create({
            characterName: 'Heartless',
            recipeName: 'Heartless Dark Chocolate Truffles',
            recipeIngredients: 'Ingredients: For the Truffles: 8 oz (225g) high-quality dark chocolate, chopped. 1/2 cup heavy cream. 2 tablespoons unsalted butter, room temperature. 1 teaspoon vanilla extract. Pinch of salt. Cocoa powder or powdered sugar (for dusting). For the Heartless Garnish (optional): Black fondant or black candy melts. Edible gold or silver luster dust. Small heart-shaped cookie cutter',
            recipeInstructions: 'Prepare the Ganache: Place the chopped dark chocolate in a heatproof bowl. In a saucepan, heat the heavy cream over medium heat until it starts to simmer. Remove from heat immediately. Pour the hot cream over the chopped chocolate and let it sit for a minute to soften the chocolate. Gently whisk the mixture until the chocolate is fully melted and the ganache is smooth. Add the unsalted butter, vanilla extract, and a pinch of salt to the ganache. Mix until the butter is completely incorporated. Chill the Ganache: Cover the bowl with plastic wrap, ensuring it touches the surface of the ganache to prevent a skin from forming. Refrigerate the ganache for about 2-3 hours, or until it firms up and is scoopable. Shape the Truffles: Once the ganache has chilled, use a small scoop or spoon to portion out small amounts of ganache. Roll the portions between your palms to create smooth truffle balls. Place them on a parchment-lined tray. Coat the Truffles: Roll the truffle balls in cocoa powder or powdered sugar, covering them completely. This gives them a rustic, Heartless-like appearance. Heartless Garnish (optional): If desired, roll out the black fondant or melt black candy melts according to the package instructions. Use a small heart-shaped cookie cutter to cut out heart shapes from the fondant or candy melts. Dust the heart shapes with edible gold or silver luster dust to create a mysterious shimmer.',
            recipeDescription: 'Indulge in the darkness with these decadent Heartless Dark Chocolate Truffles, inspired by the enigmatic creatures from Kingdom Hearts. These rich and velvety truffles are a blend of deep, intense flavors, encased in a smooth chocolate shell.',
            characterImage: 'https://static.wikia.nocookie.net/kingdomhearts/images/e/ea/Shadow_KHIII.png/revision/latest?cb=20190213051445',
        }),

        CharacterRecipe.create({
            characterName: 'Eleven',
            recipeName: 'Telekinetic Trail Mix',
            recipeIngredients: 'Ingredients: 1 cup mini Eggo waffles (frozen). 1/2 cup dried cranberries. 1/2 cup roasted salted almonds, 1/2 cup chocolate-coated candies (M&Ms or similar). 1/4 cup butterscotch chips. 1/4 cup popcorn. 1/4 cup banana chips',
            recipeInstructions: 'Instructions: Prepare the Mini Eggo Waffles: Toast the mini Eggo waffles according to the package instructions until they are golden and crispy. Allow them to cool and then break them into smaller, bite-sized pieces. Mix the Ingredients: In a large mixing bowl, combine the toasted mini Eggo waffles, dried cranberries, roasted salted almonds, chocolate-coated candies, butterscotch chips, popcorn, and banana chips. Toss and Combine: Gently toss the ingredients in the bowl to evenly distribute all the flavors and textures. Serve and Enjoy: Transfer the Telekinetic Trail Mix to individual serving bowls or a larger sharing bowl. Grab a handful and savor the sweet and savory combination reminiscent of her journey and her fondness for Eggo waffles. Optional Twist: For an extra touch of nostalgia, you can also add small strawberry-flavored candies as a nod to her favorite treat. Just make sure to adjust the quantities to your taste preferences.',
            recipeDescription: 'Step into the mysterious world of Eleven from Stranger Things with this unique and flavorful snack recipe inspired by her telekinetic abilities and love for Eggo waffles.',
            characterImage: 'https://upload.wikimedia.org/wikipedia/en/5/52/Eleven_%28Stranger_Things%29.jpg',
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

