const axios = require('axios');//http client
const recipeSchema =require('../models/Recipe');
const mongoose= require('mongoose');
const Recipe = mongoose.model('recipes',recipeSchema);

module.exports=app=>{
    //Read all recipes in database
    app.get('/api/recipes', async(req, res) => {
        try {
        const recipes = await Recipe.find({_user:req.user.id})
        res.send(recipes)
        } catch(e) {
            res.status(500).send()
        } 
    })
    //Create new recipe in database
    const createRecipe = async(req, res) => {
        const {idMeal,strMeal,strArea} = req.body
        
        const recipe = await new Recipe({
            idMeal: idMeal,
            strMeal: strMeal,
            strArea: strArea,
            _user: req.user.id
        });
        await recipe.save();
        res.send(recipe)
    }
    app.post('/api/recipes', async(req, res) => {
            console.log(req);
            try {
                await createRecipe(req,res)
                
            } catch(error) {
                res.status(400).send(error)
            }
    })  
    /**
     * @function - this is a route that handles GET requests for a country's recipes, takes in a country name params
     * @return {array} - sends an array of recipe objects {strMeal: "Beef lo Mein", strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg","idMeal":"52952"}
     */
    app.get("/api/countries/:country", async (req,res)=>{
        console.log(req.params.country)
        try{
          //const recipes= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${req.params.country}`)
          //console.log(recipes.data.meals);
    
          res.send("unused route currently");
        }
        catch(error){
            console.log(error);
        }
    })
}