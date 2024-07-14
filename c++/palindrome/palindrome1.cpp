
#include <iostream>
using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        // First check to see if integer is a negative number, if so immediately not a palindrom
        if(x <  0) {
            cout << "is negative" << endl;
            return false;
        }

        // Convert the integer to a string 
        string num_to_str = to_string(x);
        string backwards_str; 
        // For loop from end of the to the begining and store in a new stirng 
        for(int i = num_to_str.length() -1;  i >= 0; i--) {
            backwards_str += num_to_str[i];
        }
        // print backwards string
        cout << backwards_str << endl;
        // see if new backwards string == the original string, if so it's a palindrome
        if(backwards_str == num_to_str) {
            cout << "palindrome!" << endl;
            return true;
        } else {
            cout << "not a palindrome!" << endl;
            return false;
        }
    }
};

int main() {
    Solution solution;
    // solution.isPalindrome(-1234);
    solution.isPalindrome(121);
}


