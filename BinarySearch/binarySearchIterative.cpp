
/* Binary Search Iterative in C++: 
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions 
*/

#include <iostream>
#include <array>
using namespace std;

class Solution {
    public:
    int binarySearchIterative(int array[], int target, int arrayLength) {
        // code here

        /* ITERATIVE Solution
        - Define a left and right index
        - Find the middle of those indexes
        - Compare the middle to our target value
        - if the middle value > target, then reduce the array to only look at the LEFT side of array
        - if the middle value < target, then reduce the array to only look at RIGHT side of array 
        - Repeat the process of finding a middle and comparing that middle to a target
        - Once we find our target, return the index of that target value
        */

        // Step 1: Define your left (start of array) and right (end of array) indexes
            // These will keep changing as we figure out 
        int left = 0;
        int right = arrayLength - 1;

        // Step 2: Create a while loop 
            // This loop will go on as long as the left value is less then the right value
        while (left <= right) {
            // Step 3: Find the middle index of array 
                // this is in the for loop because it will keep changing as we iterate
            int middle = (left + right)/2;

            // Step 4: Compare thee middle value to the target value using conditionals
                // if the middle value is equal to target, great! Return middle, which is index of target 
            if (array[middle] == target) {
                return middle;
            } else if (array[middle] > target) {
                // if the middle > target, then reduce the array to only look at the LEFT side of array
                // that means change the right index so it is now to the left of the middle
                right = middle - 1;
            } else {
                // if the middle < target, then reduce the array to only look at the RIGHT side of array
                // that means change the left index so it is now to the right of the middle
                left = middle + 1;

            } 

        }
        
        // Step 5: Now, if we went through entire for loop and didn't find our target:
        // Return false!
        return false; 

    }

};

int main() {
    int array[5] = {1, 2, 3, 4, 5};
    int arrayLength = sizeof(array)/ sizeof(array[0]);
    int target = 4;
    // create an object from the class
    Solution solutionObj;
    cout<< solutionObj.binarySearchIterative(array, target, arrayLength);
    return 0;
}

