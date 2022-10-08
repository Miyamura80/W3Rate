var express = require('express');
var router = express.Router();
const { queryReviews } = require('../components/subgraph/queries');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/', function(req, res, next) {
  const { chainId, contractAddress, tokenId } = req.body['data'];
  const reviews = await queryReviewRatings(chainId, contractAddress, tokenId);
  res.status(200).json(reviews);
});

module.exports = router;
