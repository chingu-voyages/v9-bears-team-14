const axios = require('axios');     //http client
module.exports=app=>{

    /**
     * @function - this is a route that handles GET requests for a country's recipes, takes in a country name params
     * @return {array} - sends an array of recipe objects {strMeal: "Beef lo Mein", strMealThumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg","idMeal":"52952"}
     */
    app.get("/api/countries/:country", async (req,res)=>{
        console.log(req.params.country)
        try{
          const recipes= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${req.params.country}`)
          console.log(recipes.data.meals);
    
          res.send(recipes.data.meals);
        }
        catch(error){
            console.log(error);
        }
    })
}