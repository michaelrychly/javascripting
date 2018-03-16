var array = [10, 2, 5, 1, 9];
array.sort(sortfunction);

function sortfunction(a, b){
  return (a - b);
}

console.log(array);