var Hello = artifacts.require("./Hello.sol");

module.exports = function(deployer) {
  deployer.deploy(Hello);
};

// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

// module.exports = function(deployer) {
// deployer.deploy(ConvertLib);
// deployer.link(ConvertLib, MetaCoin);
// deployer.deploy(MetaCoin);
// };
