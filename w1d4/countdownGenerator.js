var countdownGenerator = function (x) {

  return function(){
    var text = "";

    if (x < 4 && x > 0){
      text = "T-minus " + x + "...";
    }
    else if (x === 0){
      text = "Blast Off!";
    }
    else if (x === -1){
      text = "Rockets already gone, bub!";
    }

    x -= 1;
    console.log(text);
  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!