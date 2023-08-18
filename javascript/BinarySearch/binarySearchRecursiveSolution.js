
/* BINARY SEARCH- RECURSIVE in JS 
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions
*/


// set our test array
let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21] 

function binarySearch(array, target) {
    // will return the binary search helper function
    // every time it is recalled, we need an updated left and right
    // start left and right as 0 and the last element in array
    return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
    // Now have a base case
    // Step 1: Continously call binary search helper until we hit base case
    // Base case is not finding index
    if(left > right ) { // means we didn't find the index
        return false;
    }
    // Step 2: Find the middle, get average of left and right indecis
    //  Since it could have a decimal, want to round down SO do Math.floor
    let mid = Math.floor((left + right) / 2)
    // Step 3: Take the element located at the middle and comparee it to the target value
    //  Comparison 1: If target = element at middle, you found the target!!... 
    if (target === array[mid]) {
    //... return that index
    return mid;
    //  Comparison 2: If my target < element in middle..
    } else if (target < array[mid]) {
    // RERUN THE binarySearchHelper method with a NEW RIGHT
    // ignore middle element and everything GREATER then middle element (RIGHT hand side)
    // reassign the RIGHT to END the array at the element BEFORE the middle element
        return binarySearchHelper(array, target, left, mid - 1)
    //  Comparison 3: If my target > element in middle..
    } else {
        // RERUN THE binarySearchHelper method with a NEW LEFT
        //ignore middle element and everything LESS then middle element (LEFT hand side)
        // reassign the LEFT to START the array at the element AFTER the middle element
        return binarySearchHelper(array, target, mid + 1, right)
        }
    }

// Test
console.log(binarySearch(nums, 7)); // return 1
console.log(binarySearch(nums, 15)); // return false

// Time complexity: 0(logn)
// Space complexity: Take more space, 0(logn)