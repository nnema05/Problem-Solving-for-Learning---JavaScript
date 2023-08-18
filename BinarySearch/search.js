
/*
A simple sequential search through array in Js
*/

function search(arr, k) {
    // create a boolean variable called found, initially value is false
    let found = false
    // will equal the location of where k is found
    let indexLocation
    // check every item in array
    for (let i = 0; i < arr.length; i++) {
        // if item in array is equal to k...
        if (k == arr[i]) {
            found = true
            indexLocation = i
            break; // break out of loop 
        } 
    }
    let sentence = "Did you find item " + k  + "?"
    if (found == true) {
        numberOfIterations = indexLocation + 1
        console.log(sentence + " " + " Yes, I found the item at index " + indexLocation + ". I found this answer after " + numberOfIterations+ " iterations");
    } else {
        console.log(sentence + " " + " No, item not found");
    }
    
}

let arr = [1, 2, 3, 4, 5]
search(arr, 4)