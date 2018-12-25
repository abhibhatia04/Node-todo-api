const mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
	text:{
		type: String,
		required: true,
		minlenght: 1,
		trim: true
	},
	completed:{
		type: Boolean,
		default: true
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {Todo};