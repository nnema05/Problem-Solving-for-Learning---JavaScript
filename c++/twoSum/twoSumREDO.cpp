
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Use a hash table for quick evaluation 
// key is whats in the for loop and value is the index
// for loop through the vector
// see if the target - num exists in the hash table
// if not put the key in there
// keep doing this until you find the two numbers that add up to the target
// EXAMPLE: nums = [2,7,11,15], target = 9
// for loop at key 2 and index 0 
// 9-2 = 7 does not exist in hash table so continue and put key (2) in the hash table with index 0 as its value
// for loop at key 7 index 1 
// 9 - 7 = 2, 2 does exist in the hash table so return its value and the index we are at in the for loop
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        unordered_map<int, int > map;
        vector<int> solution;
        // for loop through nums
        for(int i = 0; i < nums.size(); i++) {
            int difference = target - nums[i];
            // see if difference exists in hash table
                // if it does return the value of that difference in hash map (map[difference]) and the i 
            if(map.find(difference) != map.end()) {
                solution.push_back(map[difference]);
                solution.push_back(i);
                cout << map[difference] << " " << i << endl;
                return solution;
            } 
            // else add that value to the hash map
            // with key as the number (nums[i]) and the valuye as the index (i)
            map[nums[i]] = i;
        }
        return solution;
    }
};


int main() {
    Solution solution;
    int myArray[] = {  2, 7, 11, 15 };
    // int myArray[] = { 3, 2, 4 };
    // int myArray[] = { 3, 3};
    
    vector<int> nums(begin(myArray), end(myArray));
    int target = 9;
    solution.twoSum(nums, target);
}

