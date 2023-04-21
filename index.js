// Old was of writing methods
function oldWay(paramOne, paramTwo) {
  return paramOne + paramTwo;
}

console.log(oldWay(3, 4));

// Newer way to write methods
const newWay = (paramOne, paramTwo) => {
  return paramOne + paramTwo;
};

console.log(newWay(5, 4));

//Better way (only works for short methods)
const betterWay = (paramOne, paramTwo) => paramOne + paramTwo;
console.log(betterWay(15, 4));

// If you have more then one line of logic don't write to one line it
const withLogic = (paramOne) => {
  let tax = 0;
  switch (paramOne) {
    case 1:
      tax = 0.01;
      break;
    case 10:
      tax = 0.09;
      break;
    case 15:
      tax = 0.12;
      break;
    default:
      tax = 0.05;
  }

  return paramOne * (1 + tax);
};

// the .toFixed is a build in method that keep the decimal place to what number you put in
console.log(withLogic(1).toFixed(2));
console.log(withLogic(15).toFixed(2));
console.log(withLogic(3).toFixed(2));


