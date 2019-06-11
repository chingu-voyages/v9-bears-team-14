const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());       // to support JSON-encoded bodies




app.get('/',(req,res)=>{
    res.send({hi:'there from Geo-foods'})
})

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
const PORT = process.env.port || 5000;
app.listen(PORT);