var express = require('express');
var methodOverride = require('method-override');
var burger = require('./../models/burger.js');

var router = express.Router();
router.use(methodOverride("_method"));

router.get('/', function(req, res){
	var burgers = [];
	var devouredBurgers = [];
	burger.all(function(data){
		for(var i = 0; i < data.length; i++){
			if(data[i].devoured === 0){
				burgers.push(data[i]);
			}
			else{
				devouredBurgers.push(data[i]);
			}
		}
		res.render('index', {
			burgers: burgers,
			devBurgers: devouredBurgers
		});
	})
});

router.put('/:burgerName', function(req, res){
	var burgerToEat = req.params.burgerName;
	burger.update(burgerToEat);
	res.redirect('/');
});

router.post('/', function(req, res){
	var newBurger = req.body.burgerName;
	burger.insert(newBurger);
	res.redirect('/');
});

router.delete('/:burgerToDelete', function(req, res){
	var doneBurger = req.params.burgerToDelete;
	burger.delete(doneBurger);
	res.redirect('/');
});

module.exports = router;