
#include <iostream>

using namespace std;

class Solution {
public:
    int romanToInt(string s) {
        
        int answer = 0, number = 0, prev = 0;

    for (int j = s.length() - 1; j >= 0; j--) {
        // for loop from end of string to foreward
        // cases for each one
        switch (s[j]) {
            case 'M':
                number = 1000;
                break;
            case 'D': 
                number = 500;
                break;
            case 'C':
                number = 100;
                break;
            case 'L':
                number = 50;
                break;
            case 'X':
                number = 10;
                break;
            case 'V':
                number = 5;
                break;
            case 'I':
                number = 1;
                break;
        }

        // if number is less than previous than subtract (IX - I is < X)
        if (number < prev) {
            cout << "subtracting" << endl;
            cout << number << endl;
            cout << prev << endl;
            answer -= number;
        }
        // else add the number to the answer
        else {
            cout << "adding" << endl;
            cout << number << endl;
            cout << prev << endl;
            answer += number;
        }
        // reset previous to be the number every time so in next for loop prev will be the previous number
        prev = number;
    }
    return answer;

    }
};

int main() {
    Solution solution;
    
    string s = "IX";
    solution.romanToInt(s);
}