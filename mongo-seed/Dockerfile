FROM mongo
COPY coffeeDB.json /coffeeDB.json
CMD mongoimport --host mongo --db CoffeeDB -c coffees --type json --file /coffeeDB.json --jsonArray
