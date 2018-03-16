var store = require("./store");
/*var chalk = require("chalk");

var message = "Hello " + chalk.red("World");
console.log(message);*/

store.store(13);
store.store(2);
store.store(1);
store.store(10);
store.store(5);

console.log(store.sort());

