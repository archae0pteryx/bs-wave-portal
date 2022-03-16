require('dotenv').config()
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-waffle')

const {ALCHEMY_TESTNET_URL, ACCOUNT_PRIK } = process.env

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: ALCHEMY_TESTNET_URL,
      accounts: [ACCOUNT_PRIK],
    },
  },
}
