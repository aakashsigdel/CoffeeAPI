const mongoose = require('mongoose');

const Coffee = mongoose.model('coffee');

exports.getCoffees = (req, res) => {
  Coffee.find({}, (err, coffees) => {
    if (err) {
      res.send(err);
    }
    res.send(coffees);
  });
}

exports.getCoffee = (req, res) => {
  Coffee.findById(req.params.id, (err, coffee) => {
    if (err) {
      res.send(err)
    }

    res.send(coffee);
  });
}

const setCoffees = (coffees) => {
  Coffee.collection.insert(coffees, (err, docs) => {
    if (err) {
      return console.log('ERROR_AAKASH: error inserting coffees', err);
    }

    console.log('SUCCESS_AAKASH: number of docs inserted', docs.length);
  });
}


const deleteAllCoffees = () => {
  Coffee.remove({}, (err, coffees) => {
    if (err) {
      return console.log('Aakash_ERR: ', err);
    }
    console.log('success_aakash', coffees);
  });
}
