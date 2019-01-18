const jwt = require('jsonwebtoken');

var data = {
	id: 2
};
 var token = jwt.sign('data', '123abc');
 console.log(token);


var decoded = jwt.verify(token, '123abc');

console.log(decoded);
console.log(`decoded :${decoded}`);