require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "8cd0306ff909471d231e80529bbde44ef4db55173bd5dcaaee7d97a1b8cfc146";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
