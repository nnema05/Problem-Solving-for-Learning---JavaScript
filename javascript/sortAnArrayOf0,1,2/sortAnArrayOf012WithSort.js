

/* Sort an Array of 0, 1, 2  - WITH SORT BUILT IN FUNCTION
https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab*/

/* Example array 
let array = [0, 2, 1, 2, 0];
*/

// Step 1: Create a function that takes in an array
function sort(array) {

   // Step 2: Check every element in array to make sure they are 1, 2, or 3
      // Create for loop
      // if an element in array is greater, immediately return false out of function
   for (i = 0; i < array.length; i++) {
      console.log("in for loop")
      console.log(array[i])

      if (array[i] > 2) {
         console.log("An element in array is greater than 2");
         return false;
      } 
   }

   // Step 3: Sort array in ascending order with numeric sort function
   let sortedArray = array.sort((x, y) => x-y);
   return sortedArray;
   // should return 0, 0, 1, 2, 2
   
}

//let array = [0, 2, 1, 2, 0];
// let array = [0, 1, 0]
let array = [1, 2, 3, 2, 0]
console.log(sort(array));