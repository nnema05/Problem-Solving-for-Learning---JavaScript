
/*
Reverse Array in groups in JS - First Method
https://practice.geeksforgeeks.org/problems/reverse-array-in-groups0255/1?page=2&sortBy=submissions
*/



 
// Step 1: Create a final reversed array that we will return at the end of the function
let reversedArray = []; 

// Step 2: Create a funcion that takes in array and subgroupLength 

function reverseArray (array, subgroupLength) {
    // Step 3: Find out how many subgroupLengths are in my array (divide array.length by subgroupLength)
        // This is the number of times we will loop (reverse our subgroups)
    let numberOfSubgroups = Math.floor(array.length / subgroupLength);
    console.log(numberOfSubgroups);
    
    // Step 4: Check every subgroup and reverse... as long as there is at least one subgroup 
        // While loop
        // Set up a starting index for our each subgroup 
        //...(would start at index 0 and then change with each subgroup)
    let start = 0;
    while (numberOfSubgroups >= 1) {
        // Set up an index each subgroup would end at...
        // ... would be 1 less than the subgroup length and then + the start index (which will change with each subgroup)
        end = subgroupLength - 1 + start 
        console.log(end)
        // Step 5: Slice out and reverse a subgroup, with a start and end + 1 (slice leaves the last index)
        let subgroup = array.slice(start, end + 1);
        console.log(subgroup)
        let reversedSubgroup = subgroup.reverse()
        console.log(reversedSubgroup)
        // Step 6: Add that reversed subgroup to our final reversed array
            // Use concat() to add an array to an array
        reversedArray = reversedArray.concat(reversedSubgroup)
        console.log(reversedArray)
        // Step 7: Change our start index for the next subgroup
            // Should be the ending index of the last subgroup + 1
        start = end + 1
        console.log(start)
        // Step 8: Reduce number of subgroups by 1 since we handled one subgroup already
        numberOfSubgroups -= 1
        console.log(numberOfSubgroups)

    }
    // Step 8: Reverse the remaining of the array when remaining is < subgroupLength
        // Once our numberOfSubgroups has been reduced to < 1 (remaining array.length < ubgroupLength)
        // OR if there were no subgroups in the first place
    // Create an remaining array that starts with our start index (0 or the one changed), to the end of the array
    let remainingArray = array.slice(start, array.length);
    console.log(remainingArray);
    // Reverse remaining array
    let reversedRemainingArray = remainingArray.reverse();
    console.log(reversedRemainingArray);
    // Add that reversed array to our final array 
    reversedArray = reversedArray.concat(reversedRemainingArray);
    console.log(reversedArray);

    // Step 9: Reverse our remaining array 
    return reversedArray;
}

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums = []
console.log(reverseArray(nums, 3));