var words = ["ground", "control", "to", "major", "tom"];

function map(array, functionName) {
  array.forEach(function(item, index){
    console.log(functionName(item));
  });
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

//[6, 7, 2, 5, 3]
//
//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
//
//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]