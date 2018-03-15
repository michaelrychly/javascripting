var arguments = process.argv.slice(2);

var fs = require("fs");
var file = arguments;

fs.readFile(file.toString(), function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});