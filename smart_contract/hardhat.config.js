// https://eth-ropsten.alchemyapi.io/v2/BeSV4Af7GZPdX7nuFJx0I7oNZf12a7GD
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BeSV4Af7GZPdX7nuFJx0I7oNZf12a7GD",
      accounts: [ process.env.PRVKEY ],
    }
  },
}