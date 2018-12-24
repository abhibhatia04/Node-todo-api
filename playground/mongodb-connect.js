const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => { 
	if(err) {
		return console.log('Unable to connect to MonngoDb server');
	}
	console.log('connected to MongoDb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: true
	// },(err, result) =>{
	// 	if(err){
	// 		return console.log('unable to insert', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
     db.collection('Users').insertOne({
     	name: 'Om',
     	age: 24,
     	location: 'Chandigarh'
     },(err, result) => {
     	if(err){
     		return console.log('unable to insert user', err)
     	}
			console.log(JSON.stringify(result.ops, undefined, 2));    
			 });

	db.close();

});