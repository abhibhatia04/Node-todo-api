// const{MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=> {
	if(err) {
		return console.log('Unable to connect to DB server');
	}
	console.log('connected to DB server');
	// db.collection('Todos').find().toArray().then((doc)=>{
	// 	console.log(JSON.stringify(doc, undefined, 2));
	// })
	db.collection('Users').find({name: 'Abhishek'}).toArray().then((doc)=>{
		console.log(JSON.stringify(doc, undefined, 2));
	},(err)=>{
		console.log('Unable to fetch data');
	})


});


