
/* Zig Zag problem in JS
https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab*/

// Convert array into Zig-Zag fashion
// arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 

// Solution: Focus on subgroups of 3 and rearranging those subgroups to meet zig zag fashion 

// Example array  = [4, 3, 7, 8, 6, 2, 1] 
// expected output = [3, 4, 7, 8, 1, 6, 2] 

// Step 1: Create function that takes in an array
function zigZag(array) {

    // Step 2: Create for loop that goes through every 2nd, 4th, and 6th..
    //...to eventually focus on each subgroups of three
        // Will start at index 1 (in subgroup indexes 0, 1, 2), then index 3 (in subgroup 2, 3, 4)...
        //... then index 5 (in subgroup 4, 5, 6) ....
        for (i = 1; i < array.length; i += 2 ) {

            // Step 3: Define the left and right components of our subgroup of 3 
            // Place within for loop to make sure these left and right values will change as we traverse 
            let left = i - 1; 
            console.log("left index of subgroup is " + left); // Iteration 1: left = 0
            let right = i + 1;
            console.log("right index of subgroup is " + right);  // Iteration 1: right = 2

            // Create an empty subgroup array which will hold our rearranged subgroups 
            let subgroup = [];

            // Step 4: Set up conditionals that compares the values of left, i, and right values of each subgroup 
            // According to how these elements are greater than or less than each other, they will be rearranged 
            /// Zig zag order:  x < y > z

            // Step 4a: 
            // If our subgroup is in zig zag order already
            console.log("left = " + array[left] + " i =  " + array[i] + " right = " + array[right])

            if (array[left] < array[i] && array[i] > array[right]) { 
                console.log(array[left], array[i], array[right]) 
                console.log("The order of this subgroup is correct and array[left] < array[i] > array[right]");
    
            // Step 4b: 
            // If our subrgoup is order left > i < right
            } else if (array[left] > array[i] && array[i] < array[right]) {
                console.log(array[left], array[i], array[right])
                console.log("The order of the subgroup is Incorrect and array[left] > array[i] < array[right]");
 

            // Rearrange so the largest value is in the middle so check if left < right
                // if so, re order subgroup so i, right, left because i < right > left (zig zag order)
                // if not, reorder subgroup so i, left, right bc i < left > right (zig zag order)
            
                if (array[left] <  array[right]) {
                    subgroup = [array[i], array[right], array[left]];
                    console.log(subgroup); // ROUND 1: [3, 7, 4]

                } else {
                    subgroup = [array[i], array[left], array[right]];
                    console.log(subgroup);
                }

                // replace this new subgroup is original array using splice(start_index, delete_count, value1, value2, value3, ..)
                array.splice(left, 3, subgroup[0], subgroup[1], subgroup[2])
                console.log(array) // should log [3, 7, 4, 8, 1, 6, 2]

            // Step 4c : If order is array[left] > array[i] > array[right]
                // re order subgroup to right, left, i, ... since right < left > i (ideal order)
                // replace old subgroup with new subgroup   
        } else if (array[left] > array[i] && array[i] > array[right]){
            console.log(array[left], array[i], array[right]) 
            console.log("The order is INcorrect and array[left] > array[i] > array[right]");
            
            subgroup = [array[right], array[left], array[i]];
            console.log(subgroup);

            // replace this new subgroup is original array using splice(start_index, delete_count, value1, value2, value3, ..)
            array.splice(left, 3, subgroup[0], subgroup[1], subgroup[2])
            console.log(array)

        // Step 4d (final): If order is array[left] < array[i] < array[right] 
        // re order subgroup left, right, i... since left < right > i (zigzag order)
        } else if (array[left] < array[i] && array[i] < array[right] ) {
            console.log(array[left], array[i], array[right]) 
            console.log("The order is INcorrect and array[left] < array[i] < array[right]");

            subgroup = [array[left], array[right], array[i]];
            console.log(subgroup);

            // replace this old subgroup with new subgroup is original array using splice(start_index, delete_count, value1, value2, value3, ..)
            array.splice(left, 3, subgroup[0], subgroup[1], subgroup[2])
            console.log(array) 
        }
    }

     // Step 5: Return our array
     return array;

}


//Test code:
console.log(zigZag([4, 3, 7, 8, 6, 2, 1])) // --> should return [3, 7, 4, 8, 1, 6, 2]
