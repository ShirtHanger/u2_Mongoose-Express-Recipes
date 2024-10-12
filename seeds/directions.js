const db = require('../db') // Import database
const { Recipe, Direction } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const recipeOne = await Recipe.find({ country: 'name' })
  const recipeTwo = await Recipe.find({ country: 'name' })
  const recipeThree = await Recipe.find({ country: 'name' })
  const recipeFour = await Recipe.find({ country: 'name' })
  const recipeFive = await Recipe.find({ country: 'name' })
  const recipeSix = await Recipe.find({ country: 'name' })
  const recipeSeven = await Recipe.find({ country: 'name' })
  const recipeEight = await Recipe.find({ country: 'name' })
  const recipeNine = await Recipe.find({ country: 'name' })
  const recipeTen = await Recipe.find({ country: 'name' })
  const recipeEleven = await Recipe.find({ country: 'name' })
  const recipeTwelve = await Recipe.find({ country: 'name' })

  const directions = [
    {
    name: 'Jane Doe',
    age: 27,
    gender: 'female',
    recipe_id: recipeOne[0]._id, /* If there's an error, on an id line, remove array notation */
    },
  ]

  
  await Direction.insertMany(directions)
  console.log('============================')
  console.log('DIRECTIONS for each recipe have been posted, bon appetit')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()