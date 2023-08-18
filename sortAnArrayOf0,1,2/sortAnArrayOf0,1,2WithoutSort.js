
/* Sort an Array of 0, 1, 2  - WITHOUT SORT BUILT IN FUNCTION
https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab*/


/* Example array : [0 2 1 2 0]
^ Will use to debug as we go 
*/

// Step 1: Create a function that takes in an array
function sort(array) {
    
    // Step 2: Check if array has an element greater than 2
        // If it does, return false out of function (we don't want to sort this type of array)
        // Go through every element in array (for loop)
        // Check if that element in greater than 2
    for (i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            console.log("Our array has an element greater than 2");
            return false;
        }
    }

    // Step 3: If all elements are 2 or less: We now want to find how many 0s, 1s and 2s are in our array
        // Create a count variable for each that initially starts at 0
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
        // Go through every element in array and check if it is 0, 1 or 2
    for (i = 0; i < array.length; i++) {

        // Describing: Check if the element in array that corresponds to the index i in that array
        if (array[i] == 0) {
            // If the element in 0, increase count0 by 1
            count0 += 1
            console.log(count0) // First iteration: count0 = 1

        } else if (array[i] == 1) {
            // If the element in 1, increase count1 by 1
            count1 += 1
            console.log(count1) // First iteration: count1 = 0

        } else if (array[i] == 2) {
            // If the element in 1, increase count1 by 1
            count2 += 1
            console.log(count2) // First iteration: count2 = 0

        }
    }
    // To Debug: 
    console.log("The values of Count 0, Count 1 and Count 2 are as follows " + [count0, count1, count2])
        // Should log [2, 1, 2]

    // Step 4: Add 0s, 1s, and 2s to a new array based on the count values of the count0, count1, and count2 variables
        // Create a new sorted array which is initially empty
    let sortedArray = [];

        // To keep track of counts, use while loop
        // While count0, count1, count2> 0, add a 0, 1, or 2 to the end of sortedArray
        // decrease respective count variable as elements are added
    
    // Count 0
    while (count0 > 0) {
        sortedArray.push(0);
        console.log("Sorted Array is now " + sortedArray);
        count0 -= 1;
        console.log("Count 0 is now " + count0);
    }

    // Count 1
    while (count1 > 0) {
        sortedArray.push(1);
        console.log("Sorted Array is now " + sortedArray);
        count1 -= 1;
        console.log("Count 1 is now " + count1);
    }

    // Count 2
    while (count2 > 0) {
        sortedArray.push(2);
        console.log("Sorted Array is now " + sortedArray);
        count2 -= 1;
        console.log("Count 2 is now " + count2);
    }

    // Step 5: Return sorted array
    return sortedArray;
}

// Test code 
// let array = [0, 1, 2, 3] // Should log "Our array has an element greater than 2", false
// let array = [0, 2, 1, 2, 0] // Should return [0, 0, 1, 2, 2]
console.log(sort(array))