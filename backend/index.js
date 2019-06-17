const express = require('express');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies

require('./routes/recipeRoutes')(app);

const PORT = process.env.port || 5000;
app.listen(PORT); 

