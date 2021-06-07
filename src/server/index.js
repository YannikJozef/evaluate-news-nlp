const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require("node-fetch");

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

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

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

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