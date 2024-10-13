const db = require('../db')
const { Cuisine } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const cuisines = [
      {
        cuisine_name: 'Italian',
        cultures: ['European'],
        regions: ['Southern Italy', 'Northern Italy'], 
        common_ingredients: ['Olive Oil', 'Basil', 'Mushrooms', 'Tomato', 'Cheese'], 
        cooking_methods: ['Sautéing', 'Frying', 'Simmering', 'Braising', 'Grilling', 'Roasting'],
        staple_foods: ['Pasta', 'Soup', 'Ravioli', 'Risotto', 'Seafood'], 
        famous_dishes: ['Pizza', 'Lasagna', 'Spaghetti and Meatballs', 'Gelato and Dolce'], 
        spice_level: 'Medium', 
        serving_style: 'appetizer then main course then dessert',
        cuisine_category: 'Medditeranian', 
      },
      {
        cuisine_name: 'Soul Food', /* I kinda know more about this from personal experience *Wink* */
        cultures: ['African-American', "Indigenous American", "West African", "Central African"],
        regions: ['Southern United States'], 
        common_ingredients: ['cornmeal', 'oxtail', 'collard greens', 'potatos', 'pork', 'beans', 'peas', 'rice', 'pepper'], 
        cooking_methods: ['frying', 'baking', 'braising', 'caramelizing', 'smoking'],
        staple_foods: ['potatoes', 'sweet potato', 'oxtail', 'pork', 'rice', 'chicken'], 
        famous_dishes: ['cornbread', 'baked macaroni and cheese', 'oxtail', 'sweet potato pie', 'beans and franks'], 
        spice_level: 'medium', 
        serving_style: 'large shared platter', 
        cuisine_category: 'African Diaspora', 
      },
      {
        cuisine_name: 'Japanese',
        cultures: ['Japanese', 'Chinese'],
        regions: ['Japan', 'East Asia'], 
        common_ingredients: ['Miso', 'Rice', 'Soy Sauce', 'nori', 'soy beans', 'miso paste', 'Vinager', 'wasabi'], 
        cooking_methods: ['Served raw', 'grilling', 'frying', 'Simmering', 'steaming'],
        staple_foods: ['rice', 'sushi', 'Seafood', 'noodles', 'fish'], 
        famous_dishes: ['sushi', 'ramen', 'Okonomiyaki', 'Tempura', 'miso soup'], 
        spice_level: 'spicy',
        serving_style: 'large shared platter', 
        cuisine_category: 'East Asian', 
      },
    ]
  
  

  await Cuisine.insertMany(cuisines) 

  console.log('============================')
  console.log('So many different CUISINES! We need more stomachs!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()