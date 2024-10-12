const db = require('../db') // Import database
const { Cuisine, Recipe } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const cuisineOne = await Cuisine.find({ country: 'name' })
  const cuisineTwo = await Cuisine.find({ country: 'name' })
  const cuisineThree = await Cuisine.find({ country: 'name' })

  const recipes = [
    {
    name: 'Jane Doe',
    age: 27,
    gender: 'female',
    cuisine_id: cuisineOne[0]._id, /* If there's an error, on an id line, remove array notation */
    },
  ]

  
  await Recipe.insertMany(recipes)
  console.log('============================')
  console.log('RECIPES are posted, various Cuisines among them, eat up!')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()