
/* Equilibrium Point in JS
https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&sortBy=submissions
*/ 

/* Example Array 
array = [1,3,5,2,2]
*/

// Step 1: Create a function that finds the equilibrium point and takes in any array
function equilibriumPoint(array) {

    let leftSum;
    let rightSum;

    // Step 2: Take care of corner cases. If there is only one element in our array...
        // ... that element is the only equilibrium point possible
    if (array.length === 1) {
        // return position 1 as equilibrium point
        console.log("Since the array length is 1, the element at the first position is the only possible equilibrium point");
        return 1;
    }

    // Step 3: Create for loop that selects the element we will test as an equilibrium point
        // We will check each element in our array, one by one, until we find equilibrium
        // Always skip first index, so there is always something on left and right to compare to
    for (i = 1; i < array.length; i++) {
        console.log("i is equal to " + i);
        console.log("the element at i (possible equilibrium point) is equal to " + array[i]);

        // Step 4: Initialize the leftSum to rightSum to 0
            // these sums should always be reset to 0 everytime we test a new equilibrium point
        leftSum = 0;
        rightSum = 0;

        // Step 5: Create a for loop that will find the sum of all of the elements to the LEFT of the array
        for (let lefti = 0; lefti < i; lefti++) {
            console.log("lefti is equal to " + lefti);

            // find sum of elements on the left of possible equilibrium point 
            leftSum += array[lefti];
            console.log("leftSum is now equal to " + leftSum);

        }
        
        // Step 6: Create a for loop that will find the sum of all of the elements to the RIGHT of the array
        for (let righti = i + 1; righti < array.length; righti++) {
            console.log("righti is equal to " + righti);

            // find sum of elements on the left of possible equilibrium point 
            rightSum += array[righti];
            console.log("rightSum is now equal to " + rightSum);

        }

        // Step 7: Check if rightSum = leftSum
            // If yes, we have found our equilibrium point and we return the position its at 
        if (leftSum === rightSum) {
            console.log(leftSum);
            console.log(rightSum);

            let equilbriumPoint = i+1;
            console.log("Our equilbrium point is " + equilbriumPoint);
            return equilbriumPoint;
        }

    }
    
    // Step 8: If no equilbrium point is found, return false
    console.log("No equilbrium point exists");
    return false;
}

// Test 
// console.log(equilibriumPoint([1,3,5,2,2]));
console.log(equilibriumPoint([1]));