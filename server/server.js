var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./Db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.urlencoded ({extended: true})); 
app.use(bodyParser.json());

app.post('/todos',(req, res)=>{

	var newTodo = new Todo({

		text: req.body.text
	});
newTodo.save().then((doc)=>{
	res.send(doc);
},(e)=>{
	res.status(400).send(e);
});	


});

app.listen(3000,()=>{
	console.log('Server is running at 3000');
});

// var newTodo  = new Todo({
// 	text: 'walk at places',
// });

// newTodo.save().then((result)=>{
// 	console.log(`Saved Todo ${result}`)
// }, (e)=>{
// 	console.log('unable to save new Todo');
// });

// var newUser = new User({
// 	email: 'abhishek325@gmail.com'
// });
// newUser.save().then((result)=>{
// 	console.log(`Saved Todo ${result}`);
// }, (e)=>{
// 	console.log('Unable to save ')
// });