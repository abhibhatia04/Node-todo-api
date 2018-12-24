// const{MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=> {
	if(err) {
		return console.log('Unable to connect to DB server');
	}
	console.log('connected to DB server');
	//deleteMany it will delete all the records matching the createria.
	// db.collection('Todos').deleteMany({text: 'Walk arounds'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne: it will delete the first in the record matching the creatria.
	// db.collection('Todos').deleteOne({text: 'Walk arounds'}).then((result)=>{
	// 	console.log(result);
	// });
	//findOneAndDelete: it will also delete the first record matching the cretria.
	db.collection('Todos').findOneAndDelete({text: 'Walk arounds'}).then((result)=>{
		console.log(result);
	});


});


