const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(() => {
        console.log("Connected to database")
    }).catch((err) => {
        console.log("Not connected to database Error: ", err)
    })

const app = express();
app.use(express.json());  

// to support JSON-encoded bodies

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)


const PORT = process.env.PORT|| 5000;
app.listen(PORT) 
