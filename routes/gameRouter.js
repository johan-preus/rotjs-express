var express = require('express');
var router = express.Router();
const path = require('path')
const game = require('../public/javascripts/game')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.statusCode = 200
    // res.sendFile(path.join(__dirname, '/game.html'))
    res.setHeader('Content-Type', 'text/html')
    res.end(game.serialize())
});


module.exports = router;