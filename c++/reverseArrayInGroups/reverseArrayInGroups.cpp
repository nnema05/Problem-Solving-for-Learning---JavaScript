
/* Reverse Array in Groups - Using C++!
https://practice.geeksforgeeks.org/problems/reverse-array-in-groups0255/1?page=2&sortBy=submissions
*/

#include<iostream>
// for floor function 
#include<cmath>
using namespace std;

// Example: [1, 2, 3, 4, 5, 6, 7, 8], subgroupLength = 3 (USE TO DEBUG)

// Step 0: Create a class that will hold our solution 
class Solution {

    // Reverse Array in Groups Solution
    /*
    - Function: Takes in an array and a length of a subgroup
    - Using the length of the array, find how many subgroups are in my array
    - Define a start index: which will start at the begining of an array
    - Then create a while loop that will keep going as long as there is at least 1 subrgoup in array
    -In while loop: 
        - Define an end index which represnts the end of our subgroup
        - Then reverse subgroup 
            - Reverse by swapping the left and right indexes 
        - Reduce number of subgroups to one
        - And change the start index to the begining of the next index 
    - Take care of remaining array 
        - Do so in while loop 
        - If number of subgroups is 0, then the end index is the end of the array 
        - Reverse the remaining 
    -Return reversed array
    */

   private: 
   // Step 6: Reverse subgroup function!
    // Cretae a function that passes in the start and end of the subgroup 
    void reverseSubgroup(int array[], int start, int end) {

        // Then swap the start and end values of the subarray
        // example: [1, 2, 3] --> swap 1 and 3 so --> [3, 2, 1] 
        // do this until start < end, if start > end then it's already been swapped
        while(start < end) {
            int temp = array[start];
            array[start] = array[end];
            array[end] = temp;

            // increase start by one and decrease end by 0 
            // then it will take care of swapping the values between the end and start values if they exist
            start++;
            end--;
        }

    }
  
   public:

         // Step 1: Create a public function that takes in an array, subrgoup length and array length
        int reverseArrayInGroups(int array[], int subgroupLength, int arrayLength) {

            // Step 2: Create an empty array called finalReversedArray which will hold our reversed array
                // The length of it will be the length of the original array
            // int finalReversedArray[arrayLength]; DON't NEED THIS!

            // Step 3: Find out how many subgroups exist in our array 
                // divide array length by subgroup length
                // Use floor() to round number down if decimal
            int numberOfSubgroups = floor(arrayLength/subgroupLength);

            // Step 4: Need to define the start and end of our subgroups
                // Our start will be index 0, will change with each subgroup within our loop
            int start = 0;

            // Step 5: Create a while loop
                // This should go as long as numberOfSubgroups is >= 0 (to consdier the remaining array)
                // We will decrease numberOfSubgroups by 1 to eventually break out of this condition
            while (numberOfSubgroups >= 0) {

                // Step 4: CONTINUED: state the end index
                    // If numberOfSubrgroups > 0
                        // Then end, will be start plus subgroup length minus 1 (we are still taking care of subgroups)
                    // If numberOfSubrgroups = 0
                        // Then end, will be last number in array
                int end = 0;
                if (numberOfSubgroups > 0) {
                    end = start + subgroupLength - 1;
                } else if (numberOfSubgroups == 0) {
                    end = arrayLength - 1;
                }
                // example: if our start is 0 and our subgroup length is 3 then, our end index should be 2
                cout << end;

                // Step 6: Reverse subgroup
                    // Create reverse function outside 
                    // call function 
                reverseSubgroup(array, start, end);
               
                cout << array; // should print [3, 2, 1, 4, 5, 6, 7, 8]

                // Step 8: Prepare for next round of subgroup reversing 
                    // Readjust our number of subgroups varaible, we reversed one so decrease numberOfSubgroups by one
                numberOfSubgroups -= 1;
                    // Readjust our start index to start at the next subgroup (our end index + 1)
                start = end + 1;

            }
            return 0;

        }

};

// Test function in main
int main() {
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int subgroupLength = 3;
    int arrayLength = sizeof(array) / sizeof(array[0]);

    // create an object from the class to call function
    Solution solutionObj;
    solutionObj.reverseArrayInGroups(array, subgroupLength, arrayLength);
    cout << "printing final array ";
    for (int i = 0; i < arrayLength; i++)
        cout << array[i] << " ";
    return 0;

}