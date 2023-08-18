
/* Check if Arrays are equal 
Using Sort funtion 
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions
*/

/* Example arrays for debugging
array1 = [2, 4, 5, 3, 2]
array2 = [3, 4, 5, 2, 2]
*/

// Step 1: Create function that takes in 2 arrays
function checkArrays(array1, array2) {
    // Step 2: Check if array lengths are equal
        // Not equal than return false out of whole function
        // Eqaul, return true
        // For debugging sake: store this true or false in a variable that check if lengths are equal
    let ifLengthsAreEqaul
    if( array1.length !== array2.length ) {
        ifLengthsAreEqual = false;
        return false;
    } else {
        ifLengthsAreEqual = true;
    }
    console.log(ifLengthsAreEqual) // In our case, should log true, lengths are both equal to 5

    // Step 3: If lengths are equal, sort both arrays in same way (use sort method)
    if( ifLengthsAreEqual ) {
       
        // store both arrays in new variable to not modify orignal arrays
        let sortedArray1 = array1.sort()
        let sortedArray2 = array2.sort()
        
        console.log(sortedArray1) // should log [2, 2, 3, 4, 5]
        console.log(sortedArray1) // should log [2, 2, 3, 4, 5]

        // Step 4: Check if arrays are equal
            // Do this by converting both into strings and comparing them (toString())
            // if they are equal 
        if( sortedArray1.toString() !== sortedArray2.toString() ) {
            return false;
        } else {
            return true;
        }
    }
}


console.log(checkArrays([2, 4, 5, 3, 2], [3, 4, 5, 2, 2])) // Should return true

console.log(checkArrays([2, 4, 5, 3, 2], [3, 4, 5, 4, 2])) // Should return false

console.log(checkArrays([2, 4, 5, 3], [3, 4, 5, 2, 2])) // Should return false