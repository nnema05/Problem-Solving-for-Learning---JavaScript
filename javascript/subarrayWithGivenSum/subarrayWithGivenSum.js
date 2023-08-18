
/* Subarray with given Sum
https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&sortBy=submissions
 */

// Example array: [1,2,3,7,5], givenSum = 12
    //Answer:  sub array from index 1 to index 3 [2, 3, 7]


// Step 1: Create a function that takes in an array and takes in a given sum
function subarrayWithGivenSum(array, givenSum) {

    // Step 2: Go through every item in array (first for loop)
        // With each item in array, we will keep adding the next numbers to it in our next for loop
    for (i = 0; i < array.length; i ++) {
        // here declare sum which is orginally equal to the value element i
        let sum = array[i];
        console.log("sum is equal to " + sum); // logs 1

        // check if first element or i is equal to sum 
        if (sum === givenSum) {
            // break loop and return the first and last index of this subarray
            // which means to return orignal i and the index of the elemenet next to j 
            console.log(i + " = givenSum ") // should log 2 and 4 AT END
            return i;
        }

        // Step 3: Create second for loop (remember the variable that represents index is now j!)
            // This will start at element i and then add each element after it to sum
        for (j = i + 1; j < array.length; j ++) {
            
            // Step 3a:  add value of j to sum
            sum += array[j];
            console.log("sum after adding j is = " + sum) // should log 3 (because 1 + 2)

            // Step 4: Check if sum is equal to givenSum
            // each time it will check if the sum is = 12 (where it will break loop and return first and last index of array)
            // or it will check if the sum is greater than 12 (where will break this for loop and go to next element additions)
            // or it will continue 

            if (sum === givenSum) {
                // break loop and return the first and last index of this subarray
                // which means to return orignal i and j 
                console.log ("sum = givenSum")
                console.log("My subarray is from index  " + i + " " + j) // should log 1 and 3 AT END
                return [i, j] // should log 1 and 3 AT END
            
            // if our sum is greater than givenSum, this i does not work, break out of this loop and go to next i
            } else if (sum > givenSum) {
                console.log ("sum > givenSum")
                break;
            }
        }
    }
    // Step 5: If nothing works return -1
    return -1;
}

// Test code
subarrayWithGivenSum([1,2,3,7,5], 12)