const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require("node-fetch");

// referring to the env file to get the API key
const api_key = process.env.apiKey;

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

// displaying the index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// Call to the API and sending back the data to the client
app.post('/process', async function(req, res){
    console.log(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.data}&lang=en`);
    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.data}&lang=en`); 
    try {
        const apiData = await response.json();
        res.send(apiData);
    }
    catch (error) {
        console.log('error', error);
    }
})