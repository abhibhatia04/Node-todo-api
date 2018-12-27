const {mongoose} = require('./../server/Db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '5c239fc37f10ab2419deab3f';

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('todos',todos);
// });	

Todo.findOne({_id: id}).then((todo)=>{
	console.log(JSON.stringify(todo, undefined, 2));
});


Todo.findById(id).then((todo)=>{
	console.log('todo', todo)
}).catch((e)=>{
	console.log(e);
});