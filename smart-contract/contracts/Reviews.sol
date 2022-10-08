// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Reviews {

    struct Review {
      uint chainID;
      address contractAddress;
      uint tokenId;
      string metadataUri;
      uint id;
      address author;
    }

    struct ReviewRating {
      uint reviewId;
      int score;
      address rater;
    }

    mapping(uint => Review) public reviews;
    mapping(uint => ReviewRating) public reviewRatings;

    uint public reviewId;
    uint public reviewRatingId;

    event ReviewSubmitted(uint indexed chainID, address indexed contractAddress, uint indexed tokenId, string metadataUri, uint id, address author);
    event ReviewRatingSubmitted(uint indexed reviewId, int score, address rater);

    function createReview(uint _chainID, address _contractAddress, uint _tokenId, string memory _metadataUri, address _author) public {
      reviewId++;
      Review memory review = Review(_chainID, _contractAddress, _tokenId, _metadataUri, reviewId, _author);
      reviews[reviewId] = review;
      emit ReviewSubmitted(_chainID, _contractAddress, _tokenId, _metadataUri, reviewId, _author);
    }

    function createReviewRating(uint _reviewId, int _score, address _rater) public {
      reviewRatingId++;
      ReviewRating memory reviewRating = ReviewRating(_reviewId, _score, _rater);
      reviewRatings[reviewRatingId] = reviewRating;
      emit ReviewRatingSubmitted(_reviewId, _score, _rater);
    }

}
