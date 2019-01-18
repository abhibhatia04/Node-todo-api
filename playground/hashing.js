const {SHA256} = require('crypto-js');

var message = 'i am user number 3';

var hash = SHA256(message).toString();

console.log(`message: ${message}`);
console.log(`hash: ${hash}`);

var data = {
	id: 3
};

var token ={
	data,
	hash: SHA256(JSON.stringify(data)+ 'someSecret').toString()
};

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data)+ 'someSecret').toString();
if (token.hash === resultHash){
	console.log('trusted User');
}else{
	console.log('Invalid User');
}