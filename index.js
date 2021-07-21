/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
 function isValid(rolls) {
  let validRoll = true;
    
    for (let roll of rolls) {
      
      if (typeof roll !== "number") {
          validRoll = false 
      }  
  }
      return validRoll;
  }      
    

  /**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
//Using accumulator pattern Step 1. Declare default value  
  let foundValue = null;
// Step 2. Define loop // Iterate thru array called rolls
   for (let i = 0; i < rolls.length; i++) {
// If roll[i] is equal to value     
    if (rolls[i] === value) {
// Return the value of item at index position       
     return value       
    }  
// otherwise, return default value   
  }   
  return foundValue
}
 
  
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
// Step 1. Create a new array called `newArray` equal to []
    let newArray = [];
// Step 2. Define loop to iterate thru array called rolls, condition: compare each number in array called rolls (rolls[i]) with values = > lowest value
    for (let i = 0; i < rolls.length; i++) {
// If rolls[i] == > lowest value .push() into newArray
    let roll = rolls[i];
      if (roll >= lowest) {
      newArray.push(roll)
    }
  }
// Step 3. Return "newArray"
     return newArray
}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
//Step 1. Define default value. 
    let newObject = {};
    
//Step 2. Define loop to iterate thru array of numbers called rolls, condition: change array into object {rolls:counts}
  for (let roll of rolls) {
    if (roll in newObject) {
      newObject[roll] += 1;
    }
      else {
        newObject[roll] = 1
      }
    }

       return newObject;
}
//console.log(getRollCounts ([2, 3, 4]));

 //newObject[rolls[0]] = "Rohan"
       //newObject.name = "Rohan"


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
