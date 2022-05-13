

const express = require('express');
const cors = require('cors');
const port = 4400;
const app = express();
const bodyParser = require('body-parser');
const addRoutes = require('./route');
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));  
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
addRoutes(app);



app.listen(port, () => {
    console.log(`Running on port: ${port}`)
});