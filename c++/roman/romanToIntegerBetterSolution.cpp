#include <iostream>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int romanToInt(string s) {
        // create an unordered map where we map the roman numerals with the corresponding integer valies
        unordered_map<char, int> m;
        
        m['I'] = 1;
        m['V'] = 5;
        m['X'] = 10;
        m['L'] = 50;
        m['C'] = 100;
        m['D'] = 500;
        m['M'] = 1000;

        //The variable ans is initialized to 0 --> this will be final answer
        int ans = 0;
        
        // for loop through the strings!
        for(int i = 0; i < s.length(); i++){
            // if the current character is less than the next character than we subtract that current character from answer
            // example: IX -> When i is 0, the current character s[i] is 'I'. 
                // Since there is a next character ('X'), and the value of 'I' (1) is less than the value of 'X' (10), the condition m[s[i]] < m[s[i+1]] is true
                //  In this case, we subtract the value of the current character from ans.
                /*  ans -= m['I'];
                    ans -= 1;
                    ans becomes -1.
                */
               // When i is 1, the current character s[i] is 'X'. This is the last character in the string, so there is no next character to compare
               // Since there is no next character, we don't need to evaluate the condition. In this case, we add the value of the current character to ans
               /* 
               ans += m[s[i]];
                ans += m['X'];
                ans += 10;
                ans becomes 9.
               */
            // EXAMPLE: "XI"
                // When i is 0, the current character s[i] is 'X'.
                // Since there is a next character ('I'), and the value of 'X' (10) is greater than the value of 'I' (1), the condition m[s[i]] < m[s[i+1]] is false. 
                // In this case, we add the value of the current character to ans.
                // When i is 1, the current character s[i] is 'I'.
                // his is the last character in the string, so there is no next character to compare
                // Since there is no next character, we don't need to evaluate the condition. In this case, we add the value of the current character to ans
                /* ans += m[s[i]];
                    ans += m['I'];
                    ans += 1;
                    ans becomes 11
                */
            if(m[s[i]] < m[s[i+1]] && i != s.length() - 1){
                cout << "subtracting" << endl;
                cout << m[s[i]] << endl;
                cout << m[s[i+1]] << endl;
                ans -= m[s[i]];
            }

            else{
                cout << "adding" << endl;
                cout << m[s[i]] << endl;
                cout << m[s[i+1]] << endl;
                ans += m[s[i]];
            }
        }
        cout << ans << endl;
        return ans;
    }
};

int main() {
    Solution solution;
    
    // string s = "MCMXCIV";
    string s = "IX";
    solution.romanToInt(s);
}