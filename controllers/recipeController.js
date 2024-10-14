/* Here's how you import the recipes database into our controller */

const { Direction, Recipe, Cuisine } = require('../models')

// INDEX - app.get
const getAllRecipes = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const recipes = await Recipe.find()
        res.json(recipes) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        } return res.status(404).send(`Recipe with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That recipe doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body) /* Enables ability to update via tools like Thunderclient */
        await recipe.save()
        return res.status(201).json({recipe});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



/* Returns every recipe that contains text in recipe_name variable 
("Rice" will return Red Bean Rice) */

// http://localhost:3001/recipes/name-search/:userSearch

getRecipeNameSearch = async (req, res) => {
    try {
        const userSearch = req.params.userSearch.toLowerCase()
        const recipes = await Recipe.find()
        let output = []

        for (recipe of recipes) {

            if (recipe.recipe_name.toLowerCase().includes(userSearch)) {
                output.push(recipe)
            } 
        }

        if (output) {
            return res.json(output)
        } return res.status(404).send(`No results for "${userSearch}" in Recipes!`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That recipe doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

/* Same as above but includes contents of ingredients array, as well as description
("Rice" will return Hoppin John, Jambayala, Zongzi/Chimaki, and Red Bean Rice) */

getRecipeDetailSearch = async (req, res) => {
    try {
        const userSearch = req.params.userSearch.toLowerCase()
        const recipes = await Recipe.find()
        let output = []
        let simpleingredientArray = []


        for (recipe of recipes) {

            let ingredients = recipe.main_ingredients

            for (ingredient of ingredients) {
                ingredient.name = ingredient.name.toLowerCase()
                simpleingredientArray.push(ingredient.name)
            }




            if (recipe.recipe_name.toLowerCase().includes(userSearch) 
                || recipe.description.toLowerCase().includes(userSearch)
                || simpleingredientArray.some(ingredient => ingredient.includes(userSearch))) {
                output.push(recipe)
            } 
        }

        if (output) {
            return res.json(output)
        } return res.status(404).send(`No results for "${userSearch}" in Recipes!`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That recipe doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,

    getRecipeNameSearch,
    getRecipeDetailSearch
}