
/* Check if two arrays are equal solution in JS
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions*/

/* Example arrays: 
array1 = [2, 5, 6, 3, 2]
array2 = [3, 2, 2, 6, 5]
*/


// Step 1: Create a function which takes in array1 and array2
function checkTwoArrays(array1, array2) {
    let copyOfArray2 = array2
    // Step 2: Check if array sizes are the same
        // If not, immediately return false
        // If true, continue on with the function
        // Create an if length is equal variable to set to true or false for debugging
    let ifLengthIsEqual;
    if (array1.length !== array2.length) {
        // when array lengths are not equal
        ifLengthIsEqual = false
        return false;
    } else {
        // when array lengths are equal, set ifLengthIsEqual variable to true, (use in future!)
        ifLengthIsEqual = true
    }
    console.log(ifLengthIsEqual) // In our example, would log true 

    // Step 3: When ifLengthIsEqual = true, check if every element in array 1 exists in array 2 (using for loop and conditionals)
        // Create conditional to check if ifLengthIsEqual = true
    if (ifLengthIsEqual) {
        // Create a for loop which will go through every item in array 1 
        let elementsExistsInArray2
        let indexInArray2; // SEE STEP 4, PROBLEM AND SOLUTION
        for (i = 0; i < array1.length; i ++) {
            // Check if the element in the i index exists in array 2 using includes()
                // set that equal to its own variable called elementsExistsInArray2
            elementsExistsInArray2 = array2.includes(array1[i]);
            console.log(array1[i]) // Round 1: should log 2, // Round 2: should log 5
            console.log(elementsExistsInArray2) // Round 1: should log true // Round 2: should log true


            // Step 4: Set up conditional based on if elementsExistsInArray2 is true or false
                // If false, break out of loop and return false 
            if (elementsExistsInArray2 == false) {
                return false;
                break;
                } else {
                // If true, continue on with the loop, but remove that element from array 2 (to deal with repitions)
                // Problem: We know the element but don't know the index of that element in array 2, how to remove?
                // Solution: Find the index of (using indexOf()) that value in array 2, use that index to then splice out that value from array2
                indexInArray2 = array2.indexOf(array1[i]); // finding index of that value from array 1 in array 2
                console.log("position in array 2 for element " + array1[i] + " is " + indexInArray2) // Round 1: should return index 1 // Round 2: should return index 4
                array2.splice(indexInArray2, 1); // removing that value in array 2 based on the index
                console.log(array2) // Round 1: should return [3, 2, 6, 5] // Round 2: should return [3, 2, 6]
                continue;
                }
            }
            // after for loop is completed and we haven't broken out of loop, return true
            return true;
        }
}

// Test code
// let array1 = [5, 6, 3, 2]
// let array2 = [3, 2, 2, 6, 5]
// console.log(checkTwoArrays(array1, array2)) // should return false!

let array1 = [2, 5, 3, 3, 2]
let array2 = [3, 2, 2, 6, 5]
console.log(checkTwoArrays(array1, array2)) // should return false!

// let array1 = [2, 5, 6, 3, 2]
// let array2 = [3, 2, 2, 6, 5]
// console.log(checkTwoArrays(array1, array2)) //should return true!
