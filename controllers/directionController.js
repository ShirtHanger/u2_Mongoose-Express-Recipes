/* Here's how you import the directions database into our controller */

const { Direction, Recipe, Cuisine } = require('../models')

// INDEX - app.get
const getAllDirections = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const directions = await Direction.find()
        res.json(directions) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getDirectionById = async (req, res) => {
    try {
        const { id } = req.params
        const direction = await Direction.findById(id)
        if (direction) {
            return res.json(direction)
        } return res.status(404).send(`Direction with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That direction doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createDirection = async (req, res) => {
    try {
        const direction = await new Direction(req.body) /* Enables ability to update via tools like Thunderclient */
        await direction.save()
        return res.status(201).json({direction});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateDirection = async (req, res) => {
    try {
        let { id } = req.params;
        let direction = await Direction.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (direction) {
            return res.status(200).json(direction)
        }
        throw new Error("Direction not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteDirection = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Direction.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Direction deleted");
        }
        throw new Error("Direction not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllDirections,
    getDirectionById,
    createDirection,
    updateDirection,
    deleteDirection
}