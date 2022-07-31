require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const secretKey = fs.readFileSync(".secret", "utf8").toString();


module.exports = {
  network: {
    hardhat: {
      chainId: 1337,

    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/uN6WGYGDGoI1dq5W00DvhBqi3pghldYJ',
      accounts: [secretKey],
      
    },
    mainnet: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/uN6WGYGDGoI1dq5W00DvhBqi3pghldYJ',
      accounts: [secretKey],
    },
  },
  solidity: "0.8.4",
};
