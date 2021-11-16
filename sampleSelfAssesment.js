1.To find the average of array dynamic :
function(table){
  
  return 
}
input=[1,2,3,4,5,6,7,8,9,0]


2.I need to write the body of the isOnEvenPosition (table, value) function so that it returns true 
if the value value is contained in the table array at an even index, and false otherwise. so i wrote that code:

solution:function isOnEvenPosition(table,value){
    for(var i=0;i<table.length;i++){
        if (i % 2 === 0 && table[i] === value) {
            return true;
        }
    }
    return false;
}
3.function(i,j){
  return true if any one of i and j equals to 1 and sum of i and j more than one 
}
for example = i=1,j=2  true
for example i=3,j=4   false

4./**
 * From a collection of numbers inside an array, returns the closest value to zero.
 */
function closestToZero(numbers) {
    if(!numbers.length){
        return 0;
    }
    
    let closest = 0;
    
    for (let i = 0; i < numbers.length ; i++) {
        if (closest === 0) {
            closest = numbers[i];
        } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
            closest = numbers[i];
        } else if (numbers[i] < 0 && - numbers[i] < Math.abs(closest)) {
            closest = numbers[i];
        }
    }
    
    return closest;
}
5.
find the largest number in array dynamically and return true if element in array is greater than 0 otherwise return 0 or null

function largest(num)
{
}

let num = [50,-2,-3,100,78]

