
/* Leaders in Array in JS - METHOD THREE
https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&sortBy=submissions */

// Method 3 - Scan right to left 
// Solution: 
    // Look at all values from right to left. 
    // Keep track of a max value. 
    // Once we find a value greater than the max value, we found a leader 

/* Test array = [16, 17, 4, 3, 5, 2]
*/

// Step 1: Create a function that takes in an array
function leader3(array) {

    // Step 2: Create an empty leaders array and max value variable initially equal to the rightmost variable
    let leaders = [];
    let max = array[array.length-1];
    console.log(max); // will log 2
    
    // Since the right most value is always a leader, add it to leaders array
    leaders.push(max);
    console.log(leaders); // [2]

    // Step 3: Create a for loop that scans from right to left 
        // Starting at the second to last element and moves towards the left
    for (let i = array.length-2; i >= 0; i--) {
        console.log(i) // Will log 4

        // Step 4: Compare to see the value at index i is greater than the max value 
        // If so this number is a leader
        if (max < array[i]) { 
            leaders.push(array[i]) 
            console.log(leaders); // [2, 5]
            max = array[i];
            console.log(max); // 5
        }
    }

    // Step 6: Return leaders   
    return leaders;

    

}

// Test code
console.log(leader3([16, 17, 4, 3, 5, 2]));