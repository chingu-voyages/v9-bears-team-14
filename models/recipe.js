const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeId: {
        type: Number,
        required: true,
    }
    title: {
        type: String,
        trim: true,
        required: true
    },
    ingredients: {
        type: Array,
    }, 
    instructions: {
        type: String,
    }
})

const Recipe = mongoose.model('Recipe',recipeSchema )
module.exports = Recipe