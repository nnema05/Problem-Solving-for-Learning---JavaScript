

/* Leaders in Array in JS - METHOD 1
https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&sortBy=submissions */

/* Test array = [16, 17, 4, 3, 5, 2]
*/

// Method One - Brute Force
/* Solution: 
-Focus on each element in the array. 
-Compare that element to each element to the right of it
*/


// Step 1: Create a function that takes in an array.
function leader(array) {
    
    // Step 2: Create an empty array called leaders. 
        // We will add to this array each time we find a leader and return this leader at the end
        let leaders = [];

    // Step 3: Create the first outer loop which will go through every element from 0 to end of array
    for (let i = 0; i < array.length ; i++)   {
        console.log("i is " + i) // Initially 0

        // Step 4: Create the inner loop which will go through every element to the right of the array.
        for (j = i+1; j < array.length; j++) {
            console.log ("j is " + j); // Initially be 1

            // Step 5: Compare the value of i to the value of j
                // If this the element in index i is less then the element to the right of it (array[j]), then its NOT a leader.
                // Break out of the inner loop and change the value of i to go to the next element

                if (array[i] <=array[j]) {
                    console.log(i) // 16 
                    console.log(j) // 17
                    console.log(array[i] + " is not a leader since " + array[i] + " is less than " + array[j])
                    break;
                }
        }

        // If the inner loop doesn’t break, we found a leader 
        if (j == array.length) {
            console.log(i); // Logs 5
            console.log(j); // Logs 6
            leaders.push(array[i])
            console.log(leaders) // should log [17]
        }

    }
    // Step 6: Return all of our leaders
    return leaders;

}

// Test
console.log(leader([16, 17, 4, 3, 5, 2])); // Will log 17, 5, 2

