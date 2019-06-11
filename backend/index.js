const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());       // to support JSON-encoded bodies

app.get('/',(req,res)=>{
    res.send({hi:'there from Geo-foods'})
})

app.get("/api/countries/:country", async (req,res)=>{
    console.log(req.params.country)
    try{
      const recipes= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${req.params.country}`)
      console.log(recipes);

      res.send(recipes.data.meals);
    }
    catch(error){
        console.log(error);
    }
    

})
const PORT = process.env.port || 5000;
app.listen(PORT);