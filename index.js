const app = require('express')(),
  port = 8080,
  host = '0.0.0.0',
  mongoose = require('mongoose'),
  Coffee = require('./models/coffeeModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo/CoffeeDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/coffeeRoutes');

routes(app);

app.listen(port, function () {
  console.log('BabyJS coffee API started on PORT: ', port);
});

