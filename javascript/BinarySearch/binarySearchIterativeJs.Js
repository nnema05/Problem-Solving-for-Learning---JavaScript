
/*  Binary Search Iterative in JS 
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions
*/


/* Designed solution
 Array that takes in array and target
    array: [2, 3, 7, 8, 10]
    target: [10]
 Find the  middle position of that array 
    index 0 + index 4 / 2 = index 2
    ROUND 3: index 0 
 Compare the element located at the middle to my target value 
    array[2] = 7 --> 7 < 10
 If target = element at middle, return the middle position, done!
    doesn't happen yet
 If target < element at middle, get rid of middle element and everything greater than the middle (shorten array size)
    now array= [8, 10]
 If target > element at middle, get rid of middle element and everything less than the middle (shorten array size)
    doesn't happen
 If falls under last two comparisons, keep going until you find the target or there is no more elements to look through
    GO BACK -> ROUND 2
 If target is not found return -1

 ROUND 2: 
 Array that takes in array and target
    array: [8, 10]
    target: [10]
 Find the  middle position of that array 
   index 0 + index 1 / 2 = .5, round down (index 0)
Compare the element located at the middle to my target value 
    array[0] = 8
    8 < 10 
If target = element at middle, return the middle position, done!
    doesn't happen yet
If target < element at middle, get rid of middle element and everything greater than the middle (shorten array size)
    now array is[10]
If target > element at middle, get rid of middle element and everything less than the middle (shorten array size)
    doesn't happen
If falls under last two comparisons, keep going until you find the target or there is no more elements to look through
     GO BACK, ROUND 3

ROUND 3
Array that takes in array and target
    array: [10]
    target: [10]
 Find the  middle position of that array 
   index 0 + index 0 / 2 = index 0
Compare the element located at the middle to my target value 
    array[0] = 10
    10 = 10 
If target = element at middle, return the middle position, done!
    10 = 10, return index of 10 in orginal array (mid)
If target < element at middle, get rid of middle element and everything greater than the middle (shorten array size)
If target > element at middle, get rid of middle element and everything less than the middle (shorten array size)
If falls under last two comparisons, keep going until you find the target or there is no more elements to look through
     FOUND!
*/ 

// Step 1: Create a function that passes in an array and the target value I'm looking for 
function binarySearch (array, target) {
    //Step 2: Define a start and end to our array 
    // Important because the start and end of our array needs to keep changing as our array keeps decreasing in size

    // The start will be at index 0 
    let start = 0;
    // End will be at end of the array (array.length - 1)
    let end = array.length - 1;

    
    // To compare, we want to keep going through the array until there is no more elements to compare
    // Chose a while loop
    // As long as the start index <= end index, keep searching!
    // have to start <= end, because when there is only one element left, you have to run the while loop to compare that!
    while (start <= end) {

        // Step 3: Find the middle value (will change everytime the while loop run)
        // round down the middle value if needed --> Math.floor
        let mid = Math.floor((start + end) / 2)

        // Step 4: Compare target to middle and return accordingly
        // Comparison 1: If element at middle equals target...
        if (target === array[mid]) {
            // Return the index of target which is mid
            return mid;

        } else if (target < array[mid]) {
            // Comparison 2: If target < element at middle...
            //ignore middle element and everything GREATER then middle element (RIGHT hand side)
            // re assign the end value to the index below the middle value to do this!
            end = mid - 1;

        } else {
            // Comparison 3: If target < element at middle or in any other situation..
            //ignore middle element and everything LESS then middle element (LEFT hand side)
            // re assign the start value to the index below the middle value to do this!
            start = mid + 1;
        }
    }

    // Comparison 4: If you run the while loop completely and still nothing is found
    return false;
}

// set our test array
let nums = [2, 3, 7, 8, 10]
// Test
console.log(binarySearch(nums, 10)) // should return 4