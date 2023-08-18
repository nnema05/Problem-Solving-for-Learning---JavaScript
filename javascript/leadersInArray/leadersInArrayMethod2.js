/* Leaders in Array in JS - METHOD TWO
https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&sortBy=submissions */

// Method 2 - Scan from left to right 
// Solution: Compares each element to every element to the LEFT of it 

/* Test array = [16, 17, 4, 3, 5, 2]
*/

// Step 1: Create a function that takes in an array
function leader2(array) {

    // Step 2: Make an array that will hold all the leaders and make a copy of array
    let leaders = [];
    let copyOfArray = array; 

    // Step 3: Create a for loop that will go through every item in my array
        // Skip the first element because our leader will always be rightmost
    for(i = 1; i < array.length; i++) {
        console.log(i); // Will log 1

        // Step 4: Check if this element is greater than the element/elements to the left of it
            // If its not greater, move on to the next element 
        if (array[i] > array[i-1]) {
            // If it is greater, then this is a leader
                // add it to an array which will store all the leaders
                // and get rid of that leader and everything to the left of it for the next iteration 
            console.log(array[i]); // 17 in first iteration
            console.log(array[i - 1]); // 16 in first iteration
            console.log(array[i] + " is greater than the element to the left of it which is " + array[i - 1]);

            // add it to an array which will store all the leaders
            leaders.push(array[i]);
            console.log(leaders); // log [17]

            // Remove the leader and everything to the left of it in my array
                // splice(start, delete count)
                // splice starting from beginning of array and delete one more than i
                array.splice(0, i + 1);
                console.log(array); // [4, 3, 5, 2] after first iteration
        }
         
    }

    // Step 5: If array length = 1, then add that last value of array in leaders array
        // This is because the rightmost (last) element is always a leader!
        if (array.length == 1) {
            leaders.push(array[0])
            console.log(leaders) // [17, 5, 2]
        }

    // Step 6: Return leaders
    return leaders;

}

// Test code
console.log(leader2([16, 17, 4, 3, 5, 2]));