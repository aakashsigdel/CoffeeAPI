const app = require('express')(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Coffee = require('./models/coffeeModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/CoffeeDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/coffeeRoutes');

routes(app);

app.listen(port);

console.log('BabyJS coffee API started on PORT: ', port);
