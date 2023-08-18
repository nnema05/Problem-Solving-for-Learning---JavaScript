/* Binary Search Recursive in C++:
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&sortBy=submissions */




#include <iostream>
#include <array>
using namespace std;

class Solution {
        
        /* RECURSIVELY Solution
        - don't need a while loop
        - we need to keep calling the function until we find our target 
        - once we find our target, return its index
        - Have two functions
        - First function: called binary search will call binary search helper in its first case
            - this means left index = 0 and right index = end of array 
        - Second function called binary search helper:
            - will take in an array, target, left and right
            - when yoou want left and right indexes to change, you will pass in diffrent values
            - it will cretae a middle value and compare it to target
            - if  the middle value > target, then reduce the array to only look at the LEFT side of array
                - WHICH MEANS TO RECALL binarySearchHelper where right index = middle - 1
            - if  the middle value < target, then reduce the array to only look at the RIGHT side of array
                - WHICH MEANS TO RECALL binarySearchHelper where left index = middle + 1
         */

    public:
        int binarySearchRecursive(int array[], int target, int arrayLength) {
            // Step 1: Create a funtcion which will call a helper function 
                // this will be called in the first moment of binary search 
                // left index = 0 and right index = end of array 
                // this binary search helper will also have parametrs left and right
                // helper function: will use array, target, array length, left and right
            return binarySearchHelper(array, target, arrayLength, 0, arrayLength - 1);
        }

       // Step 2: Create Binary Search helper 
        // parametrs, array, target, arraylength, left and right
        int binarySearchHelper(int array[], int target, int arrayLength, int left, int right) {
            
            // Step 3: Cretae conditino where it will return false
                // this means there is nothing to look through in the array and the target is not found
                // as soon as left > right, return false
            if(left > right) {
                return false;
            }

            // Step 4: Create middle index
            int middle = (left + right)/2;

            // Step 5: Compare thee middle value to the target value using conditionals
                // if the middle value is equal to target, great! Return middle, which is index of target
            if (array[middle] == target) {
                return middle;
            } else if (array[middle] > target) {     
                // if the middle > target, then reduce the array to only look at the LEFT side of array
                //  WHICH MEANS TO RECALL binarySearchHelper where right index = middle - 1
                return binarySearchHelper(array, target, arrayLength, left, middle - 1);
            } else {
                // if the middle < target, then reduce the array to only look at the RIGHT side of array
                // - WHICH MEANS TO RECALL binarySearchHelper where left index = middle + 1
                return binarySearchHelper(array, target, arrayLength, middle + 1, right);

            } 

        }   
// class needs to end with ;
};

int main() {
    int array[5] = {1, 2, 3, 4, 5};
    int arrayLength = sizeof(array)/ sizeof(array[0]);
    int target = 4;
    // create an object from the class
    Solution solutionObj;
    cout<< solutionObj.binarySearchRecursive(array, target, arrayLength);
    return 0;
}