var orm = require('./../config/orm.js');

var burger = {
	all: function(cb){
		orm.selectAll(function(data){
			cb(data);

		});
	},
	insert: function(burgerName){
		orm.insertOne(burgerName);
	},
	update: function(burgerToUpdate){
		orm.updateOne(burgerToUpdate);
	},
	delete: function(burgerToDelete){
		orm.deleteOne(burgerToDelete);
	}
};

module.exports = burger;