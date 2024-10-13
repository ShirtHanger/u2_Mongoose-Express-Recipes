const db = require('../db') // Import database
const { Recipe, Direction } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const spaghettiAndMeatballs = await Recipe.find({ recipe_name: 'Spaghetti and Meatballs' })
  const pizza = await Recipe.find({ recipe_name: 'Pizza' })
  const knodel = await Recipe.find({ recipe_name: 'Knödel' })
  const oliveAllAscolana = await Recipe.find({ recipe_name: `Olive all'ascolana` })
  const hoppinJohn = await Recipe.find({ recipe_name: 'Hoppin’ John' })
  const gumbo = await Recipe.find({ recipe_name: 'Gumbo' })
  const sweetPotatoPie = await Recipe.find({ recipe_name: 'Sweet Potato Pie' })
  const jambalaya = await Recipe.find({ recipe_name: 'Jambalaya' })
  const redBeanRice = await Recipe.find({ recipe_name: 'Red Bean Rice' })
  const zongziChimaki = await Recipe.find({ recipe_name: 'Zongzi/Chimaki' })
  const tentsuyuSoup = await Recipe.find({ recipe_name: 'Tentsuyu Soup' })
  const curryBread = await Recipe.find({ recipe_name: 'Curry Bread' })

  /* ChatGPT generated this seed too. https://chatgpt.com/share/670ab108-0420-8012-9334-5ca617d5ac2a
  Albiet, I had to find actual links to recipes since most of them were broken. For some I made fake links */

  const directions = [
    {
      author: 'Jenn Segal',
      source_url: 'https://www.onceuponachef.com/recipes/spaghetti-and-meatballs.html', /* Replaced link */
      cooking_instructions: {
        short: 'Boil pasta and cook meatballs in sauce.',
        verbose: 'Bring water to a boil and cook spaghetti until al dente. Simultaneously, form ground beef into meatballs and cook in a pan until browned. Add tomato sauce and simmer meatballs for 15 minutes. Serve together.',
      },
      
      recipe_id: spaghettiAndMeatballs[0]._id,
    },
    { 
      author: 'Elise Bauer',
      source_url: 'https://www.simplyrecipes.com/recipes/homemade_pizza/',
      cooking_instructions: {
        short: 'Bake pizza in oven at high heat.',
        verbose: 'Preheat oven to 475°F (245°C). Roll out pizza dough, spread tomato sauce, and top with mozzarella cheese. Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      },
      
      recipe_id: pizza[0]._id,
    },
    {
      author: 'Margaret',
      source_url: 'https://www.allrecipes.com/recipe/13815/knodel/', /* Replaced link */
      cooking_instructions: {
        short: 'Boil potatoes and mix with flour.',
        verbose: 'Boil peeled potatoes until soft, then mash. Add flour and eggs to make dough. Form into dumplings and boil again in salted water until they float.',
      },
      
      recipe_id: knodel[0]._id,
    },
    {
      author: 'Valeria Necchio',
      source_url: 'https://www.greatitalianchefs.com/recipes/olive-ascolane-recipe-deep-fried-olives', /* Replaced link */
      cooking_instructions: {
        short: 'Stuff olives and fry.',
        verbose: 'Pit green olives and stuff with a mixture of ground meat. Roll stuffed olives in breadcrumbs, then fry in hot oil until golden brown and crispy.',
      },
      recipe_id: oliveAllAscolana[0]._id,
    },
    {
      author: 'Amethyst Ganaway',
      source_url: 'https://www.seriouseats.com/amethyst-ganaway-5118536', /* Replaced link */
      cooking_instructions: {
        short: 'Cook rice with black-eyed peas and bacon.',
        verbose: 'Cook rice and black-eyed peas separately. Fry bacon until crisp, then combine everything in a pot with seasonings and simmer until flavors meld.',
      },
      
      recipe_id: hoppinJohn[0]._id,
    },
    {
      author: 'SoulFoodCooking101',
      source_url: 'https://soulfoodcooking101.com/authentic-new-orleans-gumbo-from-the-queen-of-soul-food-cooking/', /* Replaced link */
      cooking_instructions: {
        short: 'Simmer meat and vegetables in broth.',
        verbose: 'Brown chicken and sausage in a large pot. Add okra and vegetables, then pour in broth and simmer for 1-2 hours. Serve over rice.',
      },

      recipe_id: gumbo[0]._id,
    },
    {
      author: 'Monique Kilgore',
      source_url: 'https://divascancook.com/southern-sweet-potato-pie-recipe-soul-food/', /* Replaced link */
      cooking_instructions: {
        short: 'Bake sweet potato mixture in pie crust.',
        verbose: 'Boil sweet potatoes until soft. Mash and mix with sugar, eggs, and milk. Pour into a prepared pie crust and bake at 350°F for 45-50 minutes.',
      },

      recipe_id: sweetPotatoPie[0]._id,
    },
    {
      author: 'Beth Pierce',
      source_url: 'https://www.smalltownwoman.com/creole-jambalaya/', /* Replaced link */
      cooking_instructions: {
        short: 'Cook rice, sausage, and shrimp together.',
        verbose: 'Cook sausage and shrimp in a large pot. Add bell peppers, onions, and rice, then pour in broth and cook until rice is tender and fully absorbed.',
      },
      
      recipe_id: jambalaya[0]._id,
    },
    {
      author: 'Namiko Hirasawa Chen',
      source_url: 'https://www.justonecookbook.com/sekihan-japanese-azuki-beans-rice/', /* Replaced link */
      cooking_instructions: {
        short: 'Cook rice with red beans.',
        verbose: 'Rinse red beans and cook in a pot with water until soft. Cook rice separately and combine with beans. Serve warm with seasonings.',
      },
      
      recipe_id: redBeanRice[0]._id,
    },
    {
      author: 'JUDY',
      source_url: 'https://thewoksoflife.com/sticky-rice-dumpling-shanghai-pork-zongzi/', /* Replaced link */
      cooking_instructions: {
        short: 'Steam rice and pork in bamboo leaves.',
        verbose: 'Soak bamboo leaves and glutinous rice. Place marinated pork in the center of rice and wrap in bamboo leaves. Steam for 2-3 hours until rice is fully cooked.',
      },
      
      recipe_id: zongziChimaki[0]._id,
    },
    {
      author: 'Namiko Hirasawa Chen',
      source_url: 'https://www.justonecookbook.com/tempura-dipping-sauce/', /* Replaced link */
      cooking_instructions: {
        short: 'Make dashi broth and add tempura.',
        verbose: 'Prepare dashi broth by simmering bonito flakes and kombu in water. Strain and add tempura pieces. Simmer briefly and serve hot.',
      },
      
      recipe_id: tentsuyuSoup[0]._id,
    },
    {
      author: 'Namiko Hirasawa Chen',
      source_url: 'https://www.justonecookbook.com/curry-bread/', /* Replaced link */
      cooking_instructions: {
        short: 'Fry bread dough filled with curry.',
        verbose: 'Prepare Japanese curry and let it cool. Wrap portions of curry in bread dough, seal edges, and deep fry until golden and crispy.',
      },
      
      recipe_id: curryBread[0]._id,
    },
  ];

  
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