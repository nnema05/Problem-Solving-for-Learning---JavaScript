
#include <iostream>
#include <unordered_map>
using namespace std;   

// CLimbing Stairs Problem, on my own

// Problem: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
    // Implement a method to count how many possible ways the child can run up the stairs. 

// FIRST SOLUTION
// Solution Example: n = 5
/* climbStairs = CS

CS(5) --> is n = 1 or 0? No so CS(n-1) + CS(n-2) + CS(n-3)
- CS(4) + CS(3) + CS(2) --> Check if each n = 0 or 1? No so split CS(4), CS(3) and CS (2)
-- CS(3) + CS(2) + CS(1) + CS(2) + CS(1) + CS(0) + CS(1) + CS (0) + CS(-1) --> Is n = 1 or 0, yes so change some accordingly and split the res
--- CS(2) + CS(1) + CS(0) + CS(1) + CS (0) + CS(-1) + 1 + CS(1) + CS (0) + CS(-1) + 1 + 1 + 1 + 1 + 0
---- CS(1) + CS (0) + CS(-1) + 1 + 1 + 1 + 1 + 0 + 1 + 1 + 1 + 0 + 1 + 1 + 1 + 1 + 0
----- 1 + 1 + 0 + 1 + 1 + 1 + 1 + 0 + 1 + 1 + 1 + 0 + 1 + 1 + 1 + 1 + 0 = 13 ways! 
*/

// Step 1: Create a class called Solution and a public function called climbStairs
    // parameter n number of steps
class Solution {
    public: 
        int climbStairs(int n) {

            // Step 2: Create Conditions 
                // If n < 0, return 0 
                // If n = 0 or 1, return 1
            if (n < 0 ) {
                return 0;
            } else if (n == 0 | n == 1) {
                return 1;
            } else {
                // Step 3: If n > 1, create recursive situation
                    // Call climb stairs, substrating 1, 2 and 3 from n and adding the values
                return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n-3);
            }
        }
};

// Step 4: Call our function 
    // Create main function
int main() {
    // create object from soluution 
    Solution solutionObj;
    // call function and print solution
    cout << solutionObj.climbStairs(5);
    return 0;
}

// SECOND SOLUTION
// Store values of CS(5, 4, 3, 2, 1) in key value pairs, so those values can be pulled out 
    // Reduces iterations, becasue you don't have to split n's all the way to 1 and 0
// Use unordered map to do so

//Creating a memonization question where the values for things like climbStairs (5, 4, 3, 2) 
// are stored in a map (key value pair) and can be returned to avoid doing recursion

// Step 1: Create class solution and climb stairs function 
    // Parameters are n and unordered map called memo 
class SolutionTwo {
public:
    int climbStairsTwo(int n, unordered_map<int, int>& memo) {
        
        // Step 2: Create conditionals 
            // if n = 0 or 1, return 1
        if (n == 0 || n == 1) {
            return 1;
        }

            // if you can't find climbStairs(n, n -1, n-2 or n-3) in memo...
                // ... add the sum of those values in memo
            
        if (memo.find(n) == memo.end()) {
            memo[n] = climbStairsTwo(n-1, memo) + climbStairsTwo(n-2, memo);
        }

        // Step 3: return that memo value for the key n
        return memo[n];
    }

    // Step 4: Create another function with same name, but just parameter n
        // To create memo unordered map 
        // and to call the function, this time with memo as a parameter
    int climbStairsTwo(int n) {
        unordered_map<int, int> memo;
        return climbStairsTwo(n, memo);
    }
};