const express = require('express');
const cors = require('cors');


const bodyParser = require('body-parser')

const app = express();

app.use(cors());

const port = process.env.PORT || 5432;

app.use(bodyParser.json());

app.use((req, res, next) => { 
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', "DELETE");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

});

app.listen(ports, () => console.log("Listening on port ${ports}"))

