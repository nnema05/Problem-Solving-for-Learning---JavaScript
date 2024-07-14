
#include<iostream>
#include<vector>
#include <unordered_map>

using namespace std;
// Solve with hash table
// key value look up
// given a key, associating a value with it for quick look ups
// example associatate someones name with information about them
    // then if you want to find the information associated with that person you can find it immediately using their name as a key
    // key and value can be any data structure
    // hash function takes in they key and converts it into an integer (hash code) which becomes the index into the array!
    // two different keys could have the same hash code or same index (this could be a collsions)

// How this will work with example {2, 7, 11, 15} and target = 9
// unordered map 
// first iteration: i = 0, num = 2, complement = 9- 2 = 7
// key 7 is not found in map 
// so it adds 2 as key and i = 0 as the value to the map
// second iteration: i = 1, num = 7, complement =  9 - 7 = 2
// key 2 is found in map!!
// so it returns  

// edge cases
// No Solution: If no solution is found, the function returns an empty vector
// Multiple Solutions: If there are multiple pairs that sum up to the target, this solution returns the first pair it finds.
// Negative Numbers: The solution works with negative numbers.
// Duplicates: If the array contains duplicates, the solution correctly identifies indices without confusion.
// time complexity : O(n)
class Solution {
public:
    vector<int> twoSum(const vector<int>& nums, int target) {
        // Create an unordered map to store the complement and its index
        // We create an unordered map num_to_index to store the numbers we've seen so far along with their indices.
        // the complement (target - num) is the key 
        // and the index is the value 
        unordered_map<int, int> num_to_index;
        vector<int> solution;

        // Iterate over the vector of numbers
        for (int i = 0; i < nums.size(); ++i) {
            int num = nums[i]; // num is whatever is in the array
            int complement = target - num; // complement is the target - num

            // Check if the complement is already in the map
                // We use the find method to check if a KEY exists in the map. 
                    // find returns an iterator to the element if found, otherwise, it returns umap.end()
                // if found.. 
            if (num_to_index.find(complement) != num_to_index.end()) {
                // Return the indices of the two numbers
                // this will return the num_to_index[complement] which is the index of the complement in the original array
                // and will return i, which is the index of the other num in target - complement
                // cout << "hi" << num_to_index[complement] << endl; 
                    // in our case complement is 2 so num_to_index[complement] is value of 2 or index of it in original array so 0!
                solution.push_back(num_to_index[complement]);
                solution.push_back(i);
                return solution;
            }
            // If not found -> Store the current number and its index in the map
            num_to_index[num] = i;
        }

        // If no solution is found, return an empty vector or handle it appropriately
        return solution;
    }
};

int main() {
    int myArray[] = {  2, 7, 11, 15 };
    vector<int> nums(begin(myArray), end(myArray));
    int target = 9;
    Solution solution;

    vector<int> result = solution.twoSum(nums, target);

    if (!result.empty()) {
        cout << "Indices: " << result[0] << ", " << result[1] << endl;  // Output: Indices: 0, 1
    } else {
        cout << "No solution found" << endl;
    }

    return 0;
}

