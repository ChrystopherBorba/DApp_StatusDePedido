const Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.Contract.defaultAccount = web3.eth.accounts[0];
CoursetroContract = new web3.eth.Contract( ABI, 'Endereço do contrato', {    
    from: 'Carteira', 
    gasPrice: '20000000000'
});

function getBlockNumber(){
	return web3.eth.getBlockNumber()
}

function setData(msg){
	CoursetroContract.methods.setName(msg).send();
}

function getData(){
	return CoursetroContract.methods.getName().call()
}

function getDataByBlockNumber(number){
	return CoursetroContract.methods.getName().call(number)
}



module.exports = {
	setData,
	getData,
	getBlockNumber,
	getDataByBlockNumber
}

//ganache-cli  