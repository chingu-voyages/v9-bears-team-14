const express = require('express');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies

require('./routes/recipeRoutes')(app);

if(process.env.NODE_ENV === 'production'){

    //express will serve up our production assets
    //like main.js file
    app.use(express.static('frontend/build'));        
    //express will serve index.html if it doesn't recognize the route
    const path =require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT); 

