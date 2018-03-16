var numbers = new Array();

var store = function store(number){
  numbers.push(number);
}

var sort = function sortfunction(a, b){
  return (a - b);
}

module.exports.store = store;
module.exports.sort = function() {
  return numbers.sort(sort)
};