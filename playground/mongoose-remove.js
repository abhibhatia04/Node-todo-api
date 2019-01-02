const {mongoose} = require('./../server/Db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '5c239fc37f10ab2419deab3f';

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('todos',todos);
// });	

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

// Todo.findOneAndRemove(_id:"5c239fc37f10ab2419deab3f")..then((result)=>{
// 	console.log(result);
// });


Todo.findByIdAndRemove("5c2ccd8b48b06b640a0c96dc").then((result)=>{
	console.log(result);
});