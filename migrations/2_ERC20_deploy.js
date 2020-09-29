const ERC20 = artifacts.require("ERC20");

const TOKEN_NAME = "JC_COIN"
const TOKEN_SYMBOL = "JCC"

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(ERC20, TOKEN_NAME, TOKEN_SYMBOL);
  
  const instance = await ERC20.deployed();
  await instance.mint(accounts[1], 100);

  const balance = await instance.balanceOf(accounts[1]);
  console.log(`${balance} ${TOKEN_SYMBOL} minted to: ${accounts[1]}`)
  
};