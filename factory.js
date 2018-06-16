import web3 from './web3';
// Compiled contract factory
import ContractFactory from './build/CampaignFactory.json';
// Address of deployed contract
import address from './contractDeployAddress';

// Get instance of contract
const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  address.address
);

export default instance;
