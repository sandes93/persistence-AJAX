/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
  number: Sequelize.INTEGER
  
  // allowNull: false
});



// DayRestaurant = db.define('day_restaurant', {
//   dayId: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   restaurantId: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   }
// });

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, { through: 'day_restaurant' });
//Restaurant.belongsToMany(Day, { through: DayRestaurant });
Day.belongsToMany(Activity, {through: 'day_activity'});

module.exports = Day;