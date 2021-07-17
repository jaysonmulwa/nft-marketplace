require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
///const projectId =  fs.readFileSync(".infura").toString()

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      //url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    mainnet:{
      
      //url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
