module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      from: "0x8F176281E5bdf734992131050B14628790B2E399",
      network_id: 3
    }
  }
};
