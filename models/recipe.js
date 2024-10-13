const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    recipe_name: { type: String, required: true },
    description: { type: String, required: true },
    alternate_names: [{ type: String, required: false }],
    main_ingredients: [ /* I asked ChatGPT for help on how how to make a scaleable subdocument https://chatgpt.com/share/670a9e1f-d140-8012-8469-e0c734381040 */
      {
        name: { type: String, required: true },
        amount: {
          metric: {
            grams: { type: Number, required: false },
            mls: { type: Number, required: false },
            cm: { type: Number, required: false },
          },
          imperial: {
            cup: { type: Number, required: false },
            tbsp: { type: Number, required: false },
            tsp: { type: Number, required: false },
            lbs: { type: Number, required: false },
            oz: { type: Number, required: false },
          }
        }
      }
  ],
    ingredient_food_types: [{ type: String, required: true }], /* [Meats, vegetables, drinks, soups, pastries] */
    food_category: { type: String, required: true }, /* (solid food/comestible/victuals, beverage, soup) */
    food_course: { type: String, required: true }, /* (appetizer, entree, dessert, snack) */
    serving_temperature: {type: String, required: true}, /* Hot cold warm */
    diet_preferences: [{type: String, required: false}], /* [Halal, Vegan, low fat, high protein, none] (Try required: false here) */

    image_url: {type: String, required: false},


    cuisine_id: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
  },

  { timestamps: true }
)

module.exports = recipeSchema