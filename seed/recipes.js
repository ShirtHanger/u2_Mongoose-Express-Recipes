const db = require('../db') // Import database
const { Cuisine, Recipe } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const italianCuisine = await Cuisine.find({ cuisine_name: 'Italian' })
  const soulFoodCuisine = await Cuisine.find({ cuisine_name: 'Soul Food' })
  const japaneseCuisine = await Cuisine.find({ cuisine_name: 'Japanese' })

  /* Asked ChatGPT to generate Data in code format after I gave it the schema template */
  /* https://chatgpt.com/share/670ab108-0420-8012-9334-5ca617d5ac2a
  https://chatgpt.com/share/670b3988-64c0-8012-b24d-8d3d83f2904b 
   I considered removing "Diet_Preferences" in this seed since it had 'None' for everything, but it still exists for foods that can use it
   since it is required false */

  const recipes = [
    // Italian recipes
    {
      recipe_name: 'Spaghetti and Meatballs',
      description: `A simple pasta dish with tangy marinara sauce and juicy meatballs. It’s said to have been popularized by prostitutes in medieval and Renaissance Italy because it was quick, filling, and easy to prepare between clients.`,
      main_ingredients: [
        {
          name: 'Spaghetti',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 2 },
          },
        },
        {
          name: 'Ground Beef',
          amount: {
            metric: { grams: 300 },
            imperial: { lbs: 0.66 },
          },
        },
        {
          name: 'Tomato Sauce',
          amount: {
            metric: { mls: 250 },
            imperial: { cup: 1 },
          },
        },
      ],
      ingredient_food_types: ['Pasta', 'Meat', 'Vegetable'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg',
      cuisine_id: italianCuisine[0]._id,
    },
    {
      recipe_name: 'Pizza',
      description: `A crisp, thin flatbread topped with tomato sauce, melted cheese, and various toppings. Originating in Naples, pizza has become one of the world’s most iconic and customizable comfort foods.`,
      main_ingredients: [
        {
          name: 'Pizza Dough',
          amount: {
            metric: { grams: 300 },
            imperial: { oz: 10.5 },
          },
        },
        {
          name: 'Tomato Sauce',
          amount: {
            metric: { mls: 200 },
            imperial: { cup: 0.85 },
          },
        },
        {
          name: 'Mozzarella Cheese',
          amount: {
            metric: { grams: 150 },
            imperial: { oz: 5.3 },
          },
        },
      ],
      ingredient_food_types: ['Dough', 'Vegetable', 'Dairy'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://i0.wp.com/blog.slicelife.com/wp-content/uploads/2019/07/ispizzaitalian-blog.jpg',
      cuisine_id: italianCuisine[0]._id,
    },
    {
      recipe_name: 'Knödel',
      description: `Soft, hearty dumplings made from bread or potatoes, often served as a side to soak up rich gravies. Popular in Central Europe, knödel is especially beloved in Italian regions bordering Austria.`,
      main_ingredients: [
        {
          name: 'Potatoes',
          amount: {
            metric: { grams: 400 },
            imperial: { lbs: 0.88 },
          },
        },
        {
          name: 'Flour',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1.5 },
          },
        },
        {
          name: 'Eggs',
          amount: {
            metric: { grams: 100 },
            imperial: { unit: 2 },
          },
        },
      ],
      ingredient_food_types: ['Vegetable', 'Grain', 'Dairy'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://www.disgracesonthemenu.com/wp-content/uploads/2012/01/canederli_WP1.jpg',
      cuisine_id: italianCuisine[0]._id,
    },
    {
      recipe_name: `Olive all'ascolana`, /* Removed a weird slash ('\) from ChatGPT's output, replaced with ` */
      description: `Large green olives stuffed with a seasoned meat mixture and fried to a golden crisp. This specialty from Ascoli Piceno has been a favorite snack in Italy since the 1800s.`,
      main_ingredients: [
        {
          name: 'Green Olives',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Ground Meat',
          amount: {
            metric: { grams: 150 },
            imperial: { oz: 5.3 },
          },
        },
        {
          name: 'Breadcrumbs',
          amount: {
            metric: { grams: 100 },
            imperial: { cup: 1 },
          },
        },
      ],
      ingredient_food_types: ['Vegetable', 'Meat', 'Grain'],
      food_category: 'solid food',
      food_course: 'appetizer',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://true-italian.com/wp-content/uploads/2021/03/olive-ascolane-1030x664.png',
      cuisine_id: italianCuisine[0]._id,
    },
    
    // Soul Food recipes
    {
      recipe_name: 'Hoppin’ John',
      description: `A Southern dish of black-eyed peas and rice, often cooked with smoky bacon or ham. This hearty meal has West African roots and is traditionally eaten for good luck, especially on New Year's Day.`,
      main_ingredients: [
        {
          name: 'Black-eyed peas',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Rice',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Bacon',
          amount: {
            metric: { grams: 100 },
            imperial: { oz: 3.5 },
          },
        },
      ],
      ingredient_food_types: ['Legume', 'Grain', 'Meat'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://iheartrecipes.com/wp-content/uploads/2015/12/IMG_5060_wm.jpg',
      cuisine_id: soulFoodCuisine[0]._id,
    },
    {
      recipe_name: 'Gumbo',
      description: ` A rich, flavorful stew from Louisiana, made with a dark roux, meats like sausage and seafood, and the trinity of onions, bell peppers, and celery. Gumbo reflects the blend of African, French, and Native American influences in Creole cuisine.`,
      main_ingredients: [
        {
          name: 'Chicken',
          amount: {
            metric: { grams: 300 },
            imperial: { lbs: 0.66 },
          },
        },
        {
          name: 'Andouille Sausage',
          amount: {
            metric: { grams: 200 },
            imperial: { oz: 7 },
          },
        },
        {
          name: 'Okra',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Rice',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1 },
          },
        },
      ],
      ingredient_food_types: ['Meat', 'Vegetable', 'Grain'],
      food_category: 'soup',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://cultured.guru/wp-content/uploads/2023/10/seafood-gumbo-18.jpg',
      cuisine_id: soulFoodCuisine[0]._id,
    },
    {
      recipe_name: 'Sweet Potato Pie',
      description: `A smooth, spiced pie made from mashed sweet potatoes in a flaky crust. Sweet potato pie became a staple in African-American homes after sweet potatoes replaced pumpkins, making this dessert a Southern favorite.`,
      main_ingredients: [
        {
          name: 'Sweet Potatoes',
          amount: {
            metric: { grams: 300 },
            imperial: { lbs: 0.66 },
          },
        },
        {
          name: 'Sugar',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 0.75 },
          },
        },
        {
          name: 'Milk',
          amount: {
            metric: { mls: 200 },
            imperial: { cup: 0.85 },
          },
        },
        {
          name: 'Eggs',
          amount: {
            metric: { grams: 100 },
            imperial: { unit: 2 },
          },
        },
      ],
      ingredient_food_types: ['Vegetable', 'Dairy', 'Sweetener'],
      food_category: 'solid food',
      food_course: 'dessert',
      serving_temperature: 'Warm',
      diet_preferences: ['none'],
      image_url: 'https://bakedbroiledandbasted.com/wp-content/uploads/2020/10/Southern-Sweet-Potato-Pie-6-scaled.jpg',
      cuisine_id: soulFoodCuisine[0]._id,
    },
    {
      recipe_name: 'Jambalaya',
      description: `A bold, flavorful one-pot dish from Louisiana, combining rice with sausage, chicken, and seafood. Jambalaya has Creole and Spanish influences, similar to paella, but with the signature spices of the South.`,
      main_ingredients: [
        {
          name: 'Rice',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Shrimp',
          amount: {
            metric: { grams: 300 },
            imperial: { lbs: 0.66 },
          },
        },
        {
          name: 'Sausage',
          amount: {
            metric: { grams: 200 },
            imperial: { oz: 7 },
          },
        },
        {
          name: 'Bell Peppers',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 1 },
          },
        },
      ],
      ingredient_food_types: ['Grain', 'Meat', 'Vegetable'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/e0c688bb1afa8f4b7e6912bca2c3b3fc/Derivates/a72cefbf839e118d5f4ef36f15a1b06d6b7e1720.jpg',
      cuisine_id: soulFoodCuisine[0]._id,
    },
    
    // Japanese recipes
    {
      recipe_name: 'Red Bean Rice',
      description: `Sticky rice mixed with slightly sweet azuki beans, traditionally eaten during celebrations and festivals. The red color symbolizes good luck in Japanese culture`,
      main_ingredients: [
        {
          name: 'Rice',
          amount: {
            metric: { grams: 200 },
            imperial: { cup: 1 },
          },
        },
        {
          name: 'Red Beans',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 0.75 },
          },
        },
      ],
      ingredient_food_types: ['Grain', 'Legume'],
      food_category: 'solid food',
      food_course: 'entree',
      serving_temperature: 'Warm',
      diet_preferences: ['none'],
      image_url: 'https://www.kikkoman.com/en/culture/assets/img/traditional-37-1_im01.jpg',
      cuisine_id: japaneseCuisine[0]._id,
    },
    {
      recipe_name: 'Zongzi/Chimaki',
      description: `A fragrant, sticky rice dumpling wrapped in bamboo leaves and steamed, filled with either sweet or savory ingredients. The dish is popular during festivals like Japan’s Boys' Festival.`,
      main_ingredients: [
        {
          name: 'Glutinous Rice',
          amount: {
            metric: { grams: 250 },
            imperial: { cup: 1.5 },
          },
        },
        {
          name: 'Pork',
          amount: {
            metric: { grams: 200 },
            imperial: { oz: 7 },
          },
        },
        {
          name: 'Bamboo Leaves',
          amount: {
            metric: { grams: 50 },
            imperial: { unit: 5 },
          },
        },
      ],
      ingredient_food_types: ['Grain', 'Meat', 'Vegetable'],
      food_category: 'solid food',
      food_course: 'snack',
      serving_temperature: 'Warm',
      diet_preferences: ['none'],
      image_url: 'https://www.foodinjapan.org/wp-content/uploads/2022/04/f3ebc6d9-history-of-chimaki-768x533.jpeg',
      cuisine_id: japaneseCuisine[0]._id,
    },
    {
      recipe_name: 'Tentsuyu Soup',
      description: `A delicate, savory dipping broth made from dashi, soy sauce, and mirin, typically served with tempura. Its light flavor complements the richness of fried foods.`,
      main_ingredients: [
        {
          name: 'Dashi Broth',
          amount: {
            metric: { mls: 500 },
            imperial: { cup: 2 },
          },
        },
        {
          name: 'Tempura',
          amount: {
            metric: { grams: 200 },
            imperial: { oz: 7 },
          },
        },
        {
          name: 'Soy Sauce',
          amount: {
            metric: { mls: 50 },
            imperial: { tbsp: 3 },
          },
        },
      ],
      ingredient_food_types: ['Broth', 'Meat', 'Sauce'],
      food_category: 'soup',
      food_course: 'entree',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Tentsuyu_by_Adonis_Chen_in_Taipei.jpg',
      cuisine_id: japaneseCuisine[0]._id,
    },
    {
      recipe_name: 'Curry Bread',
      description: `A crispy, golden-fried bun filled with mildly spiced Japanese curry. Introduced in the early 20th century, this savory snack has become a beloved street food in Japan.`,
      main_ingredients: [
        {
          name: 'Bread Dough',
          amount: {
            metric: { grams: 200 },
            imperial: { oz: 7 },
          },
        },
        {
          name: 'Japanese Curry',
          amount: {
            metric: { grams: 150 },
            imperial: { cup: 0.66 },
          },
        },
        {
          name: 'Oil for frying',
          amount: {
            metric: { mls: 500 },
            imperial: { cup: 2 },
          },
        },
      ],
      ingredient_food_types: ['Grain', 'Curry', 'Oil'],
      food_category: 'solid food',
      food_course: 'snack',
      serving_temperature: 'Hot',
      diet_preferences: ['none'],
      image_url: 'https://www.justonecookbook.com/wp-content/uploads/2021/02/Curry-Bread-Kare-Pan-6128-I.jpg',
      cuisine_id: japaneseCuisine[0]._id,
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