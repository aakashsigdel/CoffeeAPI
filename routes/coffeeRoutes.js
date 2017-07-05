module.exports = function (app) {
  const coffeeController = require('../controllers/coffeeController');

  app.route('/coffees')
  .get(coffeeController.getCoffees);

  app.route('/coffees/:id')
  .get(coffeeController.getCoffee);
}
