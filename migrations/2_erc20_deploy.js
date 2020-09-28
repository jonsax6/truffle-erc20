const Migrations = artifacts.require("erc20");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(erc20).then(function(instance){
    instance.mint(accounts[1], 100).then(function(){
      console.log("100 Ether Minted to: " + accounts[1])
    });
  });
};