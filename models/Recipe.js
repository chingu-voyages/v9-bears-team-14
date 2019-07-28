const mongoose = require('mongoose')
const {Schema} = mongoose;

const recipeSchema = new Schema({
    idMeal: {
        type: String,
        required: true,
    },
    strMeal: {
        type: String,
        trim: true,
        required: true
    },
    strArea: {
        type: String,
        required: true
    },
    ingredientsList: {
        type: Array,
    }, 
    strInstructions: {
        type: String,
    }, 
    strMealThumb: {
        type: String,
    },
    strYoutube: {
        type: String,
    },
    _user: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
})


module.exports = recipeSchema;