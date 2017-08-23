// Import files/packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
// Create express server
const app = express();

// Add Middleware
app.use(morgan('dev'));

// create movie data array
global.movieJSON = [];
movieJSON[0] = {"reqURL": "reqURL", "resData": "resData"};

  app.get('/', function(req, res){
    var i = req.query.i;
    var t = req.query.t;
    var apiKey = "8730e0e";
    global.urlREQ = req.url;

    for(z = 0; z < movieJSON.length; z++ ){
      var exist = movieJSON[z].reqURL;
      //Find urlREQ, if exist return cache to view
      if(urlREQ == exist){
        res.json(movieJSON.resData);
        console.log("cache");
      } else {
        axios.get('http://www.omdbapi.com', {
          params: { i, t, apiKey }
        })
        .then(function(response){
          movieJSON.resData = response.data;
          res.json(movieJSON.resData);
          console.log("get");
          movieJSON.push({
            reqURL: urlREQ,
            resData: movieJSON.resData
          });
        })
      }

    }

  })
// Export app
module.exports = app;

// post movieJSON to /?i=tt3896198
    // axios({
    //   method:'get',
    //   // baseURL:'http://www.omdbapi.com',
    //   // url:'/?i=tt3896198&apikey=8730e0e'
    //   url = baseURL + i + key
    // })
