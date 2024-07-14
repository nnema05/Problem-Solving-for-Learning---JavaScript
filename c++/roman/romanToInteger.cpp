#include <iostream>

using namespace std;

// For loop through each string
// if statemnet: depending on it add to your number 
// DOES NOT WORK 

class Solution {
public:
    int romanToInt(string s) {

        int num = 0;

        for(int i = 0; i < s.length(); i++) {
            // case I
            if(s[i] == 'I') {
                num += 1;
                cout << num;
            // Case V
            } else if (s[i] == 'V') { 
                // case of IV
                if(i != 0 && s[i--] == 'I') {
                    cout << s[i--] << endl;
                    // subtract the 1 that was added before and add 4
                    num -= 1;
                    num += 4;

                }
            }

        }
        cout << num << endl;
        return num;
    }
};

int main() {
    Solution solution;
    
    string s = "IV";
    solution.romanToInt(s);
}