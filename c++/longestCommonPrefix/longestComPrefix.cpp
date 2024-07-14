
// First attempt

#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

// #1 designed solution 
// For loop through the vector of strings to find which string is the shortest
// for loop through the length of the shortest string
// see if each of the ith character of the string equal each other
// if they do, add that character to a resulting longest common prefix string 
// Not most efficent solution
// example. ["flower","flow","flight"]
    // flow is shortest string 
    // for loop through length of flow 
    // f in flower and f in flight and f in flow equal each other so add it to result string = "f"
    // l in flower and l in flight and l in flow equal each other so add it to result string = "fl"
    // o in flower and i in flight and o in flow dont equal each other so return the resultant string 
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string shortest = strs[0];
        string prefix = "";
        // find the shortest string
        for(int i = 1; i < strs.size(); i++) {
            if (strs[i].length() < shortest.length()) {
                shortest = strs[i];
                // cout << "shortest " << shortest << endl;
            }
        }

        // for loop through the shortest stirng
        for(int i = 0; i < shortest.size(); i++) {
            // get a character for the shortest string
            char currentChar = shortest[i];
            // cout << "currentChar " << currentChar << endl;
            for (const auto& str : strs) {
                // `str` is a constant reference to each element in `strs`
                // The loop initializes str to refer to the first element in strs.
                // On each iteration, str is set to refer to the next element in strs.

                // check if the current char exists in the other stirngs
                    // if it doesnt return the prefix
                // cout << "str " << str << endl;
                if (str[i] != currentChar) {
                    // cout << "not equal" << endl;
                    // cout << "prefix " << prefix << endl;
                    return prefix;
                }
            }
            // if it does exist in all the strings then add the current char to the prefix
            prefix += currentChar;
        }
        
        // cout << "prefix " << prefix << endl;
        return prefix;
    }
};

// DOESNT WORK!!!
// 2nd solution
// Can make a unordered map of one of the strings 
// for loop through each of the strings and add the character and the amount of time it exists in the map 
// at the end, for loop trhough the map, 
    // which ever one of the characters have the same count as the number of strings that is part of the longest common prefix
    // add it to longest common prefix string and return

class SolutionTwo {
public:
    string longestCommonPrefix(vector<string>& strs) {
        unordered_map<char, int> map;
        string prefix = "";
        for(int i = 0; i < strs.size(); i++) {
            cout << "str" << strs[i] << endl;
            for (char c : strs[i]) {
                cout << "c " << c << endl;
                map[c]++; 
                // If the character is not in the map, it will be added with a value of 1.
                // If it exists, its value (count) will be incremented.
            }
        }

        // for each character in map, check if the value equals to the size of vector
        for (auto i : map) {
            if(i.second == strs.size()) {
                cout << "both values " << i.first << i.second << endl;
                prefix += i.first;
            }
        }

        cout << "prefix " << prefix << endl;
        return prefix;
        
    }
};



int main() {
    Solution solution;
    SolutionTwo solutionTwo;
    vector<string> strs;
    strs.push_back("flower");
    strs.push_back("flow");
    strs.push_back("flight");

    solution.longestCommonPrefix(strs);
    solutionTwo.longestCommonPrefix(strs);
}
