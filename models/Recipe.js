const mongoose = require('mongoose')
const {Schema} = mongoose;

const recipeSchema = new Schema({
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
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    }
})

mongoose.model('Recipe',recipeSchema )