const express = require('express');
const mongoose = require('mongoose')

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

const app = express();
// to support JSON-encoded bodies
app.use(express.json());  

app.get('/users', async(req, res) => {
    try {
        const users = await User.find({ })
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

const PORT = process.env.PORT|| 5000;
app.listen(PORT) 
