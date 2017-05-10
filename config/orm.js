var connection = require('./connection.js');

var orm = {
	selectAll: function(cb){
		connection.query('SELECT * FROM burgers', function(	err, data){
			if(err){
				console.log('SELECT-ALL METHOD ERR: ' + err);
			}
			cb(data);
		});
	},
	insertOne: function(burgerName){
		connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', burgerName, function(err){
			if(err){
				console.log('INSERT-ONE METHOD ERR: ' +  err);
			}
		});
	},
	updateOne: function(burgerToUpdate){
		connection.query('UPDATE burgers SET devoured = true WHERE burger_name = ?', burgerToUpdate, function(err){
			if(err){
				console.log('UPDATE-ONE METHOD ERR: ' + err);
			}
		});
	},
	deleteOne: function(burgerToDelete){
		connection.query('DELETE FROM burgers WHERE burger_name = ?', burgerToDelete, function(err){
			if(err){
				console.log('DELETE-ONE METHOD ERR: ' + err);
			}
		});
	}
};

module.exports = orm;