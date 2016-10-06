var Express  = require('express');
var router = Express.Router();
var db = require('../../models');

var Day= db.models.day;

router.get('/days', function(req, res, next) {

	Day.findAll()
	.then(function(days){
		res.send(days);
	});

});

router.get('/day/:id', function(req, res, next) {

	Day.findById(req.params.id)
	.then(function(days){
		res.send(days);
	});

});

router.post('/days', function (req, res, next) {
	Day.create(req.body)
	.then(function (newDay) {
		res.send(newDay);
	})

})

// router.delete('/days/:id' function (req, res, next) {
// 	Day.findById(req.params.id)
// })

module.exports = router;