const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  it("Should create and execute sale", async function () {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits('100', 'ether');

    await nft.CreateToken('https://mytokenlocation.com')
    await nft.CreateToken('https://mytokenlocation1.com')

    await market.createMarketItem(nftContractAddress, 1, auctionPrice, {value: listingPrice})
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, {value: listingPrice})

    const [_, buyerAddress] = await ethers.getSigners(); // _ represents other accounts, this is done to separate buyers and sellers address

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {value: auctionPrice})

    const items = await market.fetchMarketItem();

    console.log('items: ', items)


  });
});
