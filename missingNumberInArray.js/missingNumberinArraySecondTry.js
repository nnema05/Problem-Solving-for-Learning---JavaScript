
/* Missing Number In Array
https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1?page=1&sortBy=submissions */ 


/* Example Input
N = 10
Array = [6,1,2,8,3,4,7,10,5]
*/

// Step 1: Make a function that takes in an array and given n 
function missingNumber (array, n) {

    // Creating variables
    let sortedArray = [];
    let start;
    let next;

    // Step 2: Check if length of array is = n -1
        // If not, return false out of whole function (our array is not our desired length)

    if (array.length == n - 1) {
            
        // Step 3: If it is desired length, sort our array in consecutive order
            // sort((x, y) => x-y); is a function that numerically sorts our numbers in consecutive order
        sortedArray = array.sort((x, y) => x-y);
        console.log(sortedArray);

    } else { 

        console.log("Our array is not our desired length");
        return false;

    }

    // Step 4: Iterate through every number in sorted array to compare it to the number next to it
    for(i = 0; i < sortedArray.length; i++) {
        // Create a start variable and a next variable that will keep changing 
            // start starts at i 
            // next is element next to i so i + 1
        start = i;
        next = i + 1;
        console.log(start, next) // should log (in first iteration 0 and 1)

        // Step 5: Check if consecutive order
            // Check if the value of next element = value of start element + 1
            // IF SO: they are in consecutive order! 
            // BUT there IS still an element missing, since array.length = n - 1
                // the missing number is at the END OR BEGINING of the array 
                // so the last value + 1

        if (sortedArray[next] != sortedArray[start] + 1) {

            // If sortedArray[next] DOES NOT = sortedArray[start] + 1, then it is NOT in consecutive order
            console.log("The array is NOT in consecutive order, There IS a missing number IN THE MIDDLE");

            // Step 6: If pair is NOT in consecutive order, find value after start and value after next and compare
                
                // find the value that would come after the value of the start elemenbt
            valueAfterStart = sortedArray[start] + 1
            console.log(valueAfterStart)

                // find the value that would come before the value of the next element
            valueBeforeNext = sortedArray[next] - 1
            console.log(valueBeforeNext)

                // compare the two to see if they are eqal 
            if(valueAfterStart == valueBeforeNext) {

                // if equal, that's the missing number!
                console.log("The missing number is " + valueAfterStart);
                return valueAfterStart;
            } else { 
                
                // If NOT equal, there is more than one missing number including both valueAfterStart and valueBeforeNext
                console.log("There is MORE THAN ONE missing number which includes " + valueAfterStart + " and " + valueBeforeNext);
                return [valueAfterStart, valueBeforeNext]
            }
        
        }
    }
        

}

// Test code
// let array = [6,1,2,8,3,4,7,10,5] // The missing number is 9
let array = [6,1,2,8,3,4,7,11,5] // There is MORE THAN ONE missing number which includes 9 and 10
//let array = [6,1,2,8,3,4,7,9,5] // WE DON"T ACCOUNT FOR THIS

missingNumber(array, 10);