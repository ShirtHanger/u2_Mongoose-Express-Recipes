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

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}