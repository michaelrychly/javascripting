var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(elements){
  z = Math.pow(elements.x,2) + Math.pow(elements.y,2);
  z = Number(Math.sqrt(z));
  return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);