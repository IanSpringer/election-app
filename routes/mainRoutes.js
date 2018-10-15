const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');
const CircularJSON = require('circular-json');


router.get('/', (req, res) => {


  res.render('landing', {})
})



router.get('/polling', (req, res) => {
  axios.get('https://projects.fivethirtyeight.com/trump-approval-ratings/polls.json')
    .then(function (response) {
      let latestResults = response.data.slice(response.data.length - 1);
      res.json(latestResults)
    })
    .catch(function (error) {
      console.log(error);
    });
})


module.exports = router;
