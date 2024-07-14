
#include<iostream>
#include<vector>

using namespace std;

// Not the most optimal solution because it has a nested for loop
// SOLUTION 1
// Outer for loop is on an elemnt from the array (represented by i)
// Inner for loop goes through the elements after i and adds it to the number that the outer for loop is on to see if it adds up to the target 
// ex. 2, 7, 11, 15
// outer for loop starts at 2 (i)
// inner for loop starts at 7 (j)
// adds 2 and 7 and checks if its equal to target, it if is, return i and j (their indicies)

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> solution; 
        for(int i = 0; i < nums.size(); i++) {
            for(int j = i + 1; j < nums.size(); j++) {
                if(nums[i] + nums[j] == target) {
                    cout << "[" << i << "," << j <<"]" << endl;
                    solution.push_back(i);
                    solution.push_back(j);
                    return solution;
                }
            }
        }
        cout << "no solution found" << endl;
        return solution;
    }
};

int main() {
    Solution solution;
    // int myArray[] = {  2, 7, 11, 15 };
    // int myArray[] = { 3, 2, 4 };
    int myArray[] = { 3, 3};
    
    vector<int> nums(begin(myArray), end(myArray));
    int target = 6;
    solution.twoSum(nums, target);
}

// SOLUTION 2
// Second solution (assumes that the list is ordered)
// can start from the middle of the list and remove all the numbers that are greater than the target 
// then repeat same for loop through smaller list (also not optimal )




