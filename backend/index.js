const express = require('express');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies

app.get('/',(req,res)=>{
    res.send({hi:'there from Geo-foods'})
})

const PORT = process.env.port || 5000;
app.listen(PORT);