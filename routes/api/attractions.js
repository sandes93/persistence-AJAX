var Express  = require('express');
var router = Express.Router();
var db = require('../../models');


router.get('/hotels', function(req, res, next) {

var hotel = db.models.hotel
hotel.findAll()
.then(function(hotels){
	res.send(hotels) ;
});


});
router.get('/restaurants', function(req, res, next) {

	var restaurant = db.models.restaurant
	restaurant.findAll()
	.then(function(restaurants){
		res.send(restaurants) ;
	});

});



router.get('/activities', function(req, res, next) {



	var activity = db.models.activity
	activity.findAll()
	.then(function(activities){
		res.send(activities) ;

	});


});

module.exports= router;
