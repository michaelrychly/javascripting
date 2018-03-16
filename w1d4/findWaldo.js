function findWaldo(arr, found) {
  arr.forEach(function(item, index){
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  });   // execute callback
}

function actionWhenFound(index) {
  console.log("Found Waldo at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);