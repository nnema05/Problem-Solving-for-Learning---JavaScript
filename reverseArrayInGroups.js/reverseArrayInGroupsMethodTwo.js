
// Reverse an Array in groups of given size!

// Solution: Derive subarrays using start and end index and reverse each

/* Example array  = [1, 2, 3, 4, 5, 6, 7, 8]
Subarray Length = 3
*/
// Expected output = [3, 2, 1, 6, 5, 4, 8, 7]


// Step 5 (Continued) --> Create reverse function
   // This array will take in an array and the start and end points of it
function reverseArray (array, start, end) {

    // Create a while loop
        // We will reverse the array as long as the start index is less than the end
    while(start < end) {

        // Swap end and start values
        // example: [1, 2, 3] --> swap 1 and 3 so --> [3, 2, 1]
        let temp = array[start];
           array[start] = array[end];
           array[end] = temp;

           // increase start by 1 and decrease end by 1
           // then it will take care of swapping the values between the end and start values if they exist
           start++;
           end--;

    }

}

// Step 1: Create a function that takes in an array and subarray length
function reverseArrayInGroups(array, subarrayLength) {
    
    // Step 2: Find out how many subarrays exist (divide array length by subarray length) and then round down 
    let numberOfSubarrays = Math.floor(array.length / subarrayLength);
    console.log(numberOfSubarrays); // should log 2 (round (8 / 3) = 2)
    
    // Step 3: Define our start and end indexes of our subarray
    // Our start index will begin at 0 and be defined outside the while loop     
        //The start would change after we reverse each subarray
    let start = 0; // start at index 0
    // Create end index
    let end;

    // Step 4: Create a while loop
        // As long as there is at least one subarray, iterate through each subarray
        // We will decrease numberOfSubarrays by 1 to eventually break out of this condition

        // Step 9 (Continued): Account for remaining array by iterating even if there is 0 subarrays
            // change so while loop condition is numberOfSubarrays >= 0
    while (numberOfSubarrays >= 0) {

        // Step 3 (Continued) - Set end index equal to start plus subarray length minus 1
        // end = start + subarrayLength - 1;
        // console.log(end); // 2

        // Step 9 (Continued): Account for remaining array, by creating a conditional
        if (numberOfSubarrays > 0) {
            end = start + subarrayLength - 1;
        } else if (numberOfSubarrays == 0) {
            end = array.length - 1;
        }

        // Step 5: Reverse each subarray
            // Create a reverse function and call it 
        reverseArray(array, start, end); 
        console.log(array); // Should log [3, 2, 1, 4, 5, 6, 7, 8] in first iteration

        // Step 8: Prepare for next round of subarray reversing 
            // Readjust our number of subarray variable, we reversed one so decrease numberOfSubarrays by one
        numberOfSubarrays -= 1;
            // Readjust our start index to start at the next subarray (our end index + 1)
        start = end + 1;
        
    }

    // Step 10: Return your reversed array
    return array;


}


// Test code
console.log(reverseArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3));
// Should log : [3, 2, 1, 6, 5, 4, 8, 7]