
/*First element to occur K times
https://practice.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1
*/ 

// Example array = [1, 3, 2, 7, 7, 3], k = 2

// Step 1: Create function that takes in array and k
function firstElementToOccurKTimes(array, k) {
    // Step 2: Create an object called number of times element occured
    const numberOfTimesElementOccured = {};

    // Step 3: Check every item in our array with a for loop
    for (i = 0; i < array.length; i++) {
        // // set each item in array variable called key
        // let key = array[i]
        // console.log(key)

        //Step 4: Check if element in index i exists in object
            // Do so by seeing if that object.hasOwnProperty(That key)
        console.log(array[i]) // debug to follow how should console, 1, 3, 2, 3 
        
        if (numberOfTimesElementOccured.hasOwnProperty([array[i]])==false)  {
            // If the key DOES NOT exists in obeject...
            // Debug 
            console.log(numberOfTimesElementOccured.hasOwnProperty([array[i]])); // Should return false

            //... add a new key value pair equal to 1 
            numberOfTimesElementOccured[array[i]] = 1; // Use bracket notation instad of dot notation
            console.log(numberOfTimesElementOccured) // should console.log 1:1

        } else {
             // If the key DOES exist in object... 
            // Debug
            console.log(numberOfTimesElementOccured.hasOwnProperty([array[i]])); // should return true

            // ... incrment that value of that elememt key by 1
            numberOfTimesElementOccured[array[i]] = numberOfTimesElementOccured[array[i]] + 1 

            // Debug
            console.log(numberOfTimesElementOccured) //should conosle eventually {1: 1, 2: 1, 3: 1, 7: 2}

            // Step 5: Check what the value is for that element , within the loop (to make sure its the first)
                // if the value is equal to k then exist from loop and return that element
            if (numberOfTimesElementOccured[array[i]] === k) {
                // Debug, should return 7 
                console.log("Found element: " + array[i])
                return array[i]
                break;
            }
           
        }
        
    }
}

// firstElementToOccurKTimes([1, 3, 2, 3], 2);
console.log(firstElementToOccurKTimes([1, 3, 2, 7, 7, 3], 2));