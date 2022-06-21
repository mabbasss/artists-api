var express = require('express');
var router = express.Router();
var artists = require('../data/artists')
var _ = require('lodash');

router.use('/:id', (req, res, next) => {
  let artist = _.filter(artists, {id:req.params.id})[0]
    if (artist) {
      req.artist = artist;
      return next();
    }
    return res.sendStatus(404);
  });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(artists);
});

router.post('/', function(req, res, next){
  res.json({'message': 'not implemented'})
});

router.patch('/:id', function(req, res, next){
  
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    req.artist[key] = value;
    console.log(req.artist);
  });
  
  res.json(req.artist);
  
});

router.get('/:id', function(req, res, next) {
    res.json(_.filter(artists, {id:req.params.id})[0]);
});


module.exports = router;
