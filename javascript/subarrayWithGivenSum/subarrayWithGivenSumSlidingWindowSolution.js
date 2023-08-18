
/* Subarray with given Sum - Sliding Window Solution
https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&sortBy=submissions
 */

// Example array: [1,2,3,7,5], givenSum = 12
    //Answer:  sub array from index 1 to index 3 [2, 3, 7]

/* Example array
Array = [1, 2, 3, 7, 5], givenSum = 12
*/

// Step 1: Create a function that takes in an array and a given sum
function subarrayWithGivenSum (array, givenSum) {

    // Step 2: Creat sum and start variable that will change
        // start is at index 0
        // sum is at the value of index 0
    let start = 0;
    console.log("Start is initially = " + start);
    let sum = array[0];
    console.log("sum is initially = " + sum);

    // Step 3: Take care of any arrays with non-negative integers
        // Go through each element with for loop
        // if element is < 0, return -1
    for (i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            console.log("array contains a negative number")
            return -1;
        }   
        // Step 4: If all integers are positive continue on with loop
            // change  sum 
            // Check conditions based on sum like when sum >, = or < given sum
        else {
            // Step 4a: Create while loop when sum > given sum
                //  if so, decrease current sum by it's starting point and increase start by 1
            while (sum > givenSum) {
                console.log("sum > givenSum")
                sum -= array[start];
                console.log("sum is sum - array[start] which is = " + sum)
                start ++;   
                console.log("start has been incrementted to index " + start)
            }
            
            // Step 4b: Check if sum = given sum
                // if so , return the start and end (i) of that subarray
            if (sum == givenSum) {
                console.log("sum == givenSum")
                console.log("Subarray equal to given sum is between indices " + start + " and " + i);
                return [start, i];
            }

            // Step 4c: Change sum variable
                // as long as we stay in the bounds of the array.length
                // AND the above conditions don't run
                    // then add the next element next to i to sum
            if (i < array.length) {
                let j = i + 1
                console.log("j is = " + j)
                sum += array[j]
                console.log("aftter adding value of j to sum, sum is equal to " + sum)

            }
        }
    } 

    // Step 5: If no subarray is found, return -1
    return - 1;
    
   
}

// Test code 
// console.log(subarrayWithGivenSum([1, -1, 2], 12)); // should return -1 

console.log(subarrayWithGivenSum([1, 2, 3, 7, 5], 12))