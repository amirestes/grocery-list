var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//log out the length of groceries
console.log(groceries.length);
//create a variable deleteDuplicates for function expression
var deleteDuplicates = function (list) {
  var cleanList = [];

  for (var item of groceries) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);

newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1} ${item.toUpperCase()}`);
});
