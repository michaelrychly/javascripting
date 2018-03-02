var repeatNumbers = function(data)
{
  var numbers = "";

  for (var i = 0; i < data.length; i++)
  {
    for (var j = 0; j < data[i][1]; j++)
    {
      numbers = numbers + data[i][0].toString();
    }
    numbers = numbers + ", ";
  }
  numbers = numbers.substring(0, numbers.length - 2);
  return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));