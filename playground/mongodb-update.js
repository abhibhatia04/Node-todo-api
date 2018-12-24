// const{MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=> {
	if(err) {
		return console.log('Unable to connect to DB server');
	}
	console.log('connected to DB server');
	//findOneAndUpdate: it will  Update the first record matching the cretria.
	// db.collection('Todos').findOneAndUpdate({text: 'Something to do'},{text: 'Something not to do'},{
	// 	returnOrignal: false
	// }).then((result)=>{
	// 	console.log(result);
	// }, (err)=>{
	// 	console.log('Unable to update the record');
	// });



db.collection('Users').findOneAndUpdate({name: 'Om'},{$inc:{age: 1}},{
		returnOrignal: false
	}).then((result)=>{
		console.log(result);
	}, (err)=>{
		console.log('Unable to update the record', err);
	});

});


