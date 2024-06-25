// declared let variable (string has quotations)
const name ='Alex';
// delcared number variable (number has no quotations)
let number = 9 + 1;
// declared a boolean variable (boolean has no quotations)
let isStudent = true;

//  conditional statement 
if (isStudent) {
   console.log('hello' + name); 
} else {
   console.log('goodbye');
}

if (number == 10) {
    console.log('number is 10');
} else {
    console.log('number is not 10');
}
// print statement
console.log ("Hello world!");
console.log ("Name")



// function of 2 - 30 / range (how to get a number gap range)
function isAgeInRange(age, minAge, maxAge) {
    return age >= minAge && age <= maxAge;
  }
  
  // Example usage:
  let age = 25;
  let minAge = 2;
  let maxAge = 30;
  
  console.log(isAgeInRange(age, minAge, maxAge)); // true