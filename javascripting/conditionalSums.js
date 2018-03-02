var conditionalSum = function(values, condition)
{
var sum = 0;

if (condition == "even")
{
 for (var i = 0; i <= values.length - 1; i++)
 {
   if (isEven(values[i]))
   {
      sum = sum + values[i];
   }
  }
  return sum;
}
else if (condition == "odd")
{
 for (var i = 0; i <= values.length - 1; i++)
 {
   if (isOdd(values[i]))
   {
      sum = sum + values[i];
   }
  }
  return sum;
}
}

function isOdd(num) {
  return num % 2 !== 0;
}
function isEven(num) {
  return num % 2 === 0;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));