const { getContract } = require('./setup');

async function createReview(chainID, contractAddress, tokenId, metadataUri, reviewAuthor) {
  const contract = getContract();
  const gasEstimated = await contract.estimateGas.createReview(chainID, contractAddress, tokenId, metadataUri, reviewAuthor);
  const gas = await calcGas(gasEstimated);
  try {
    return await contract.connect(signer).createReview(chainID, contractAddress, tokenId, metadataUri, reviewAuthor, {
        gasLimit: gas.gasLimit,
  			maxFeePerGas: gas.maxFeePerGas,
  			maxPriorityFeePerGas: gas.maxPriorityFeePerGas
    });
  } catch (error) {
    return 'error';
  }
}
