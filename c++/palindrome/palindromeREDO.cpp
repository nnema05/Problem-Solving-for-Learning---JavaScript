

// REDO! 
// First check if an integer is a negative number or if it ends with a 0
    // this means it can't be a palindrome (there can't be any leading 0's)
// Get a backwards version of the integer and compare it to the original x passed in
// First method: 
    // Convert the integer to a string
    // for loop from the end of the string to the begining and add each character to a new backwards string
    // compare the original string and backwards string
// Second method (first method is an unessary conversion)
    // I could manipulate the actual integer passed in
    // I could take the last digit of the integer (by dividing by 10)
    // And then add the last digit as the first digit to a new integer which will represent the backwards version of the og integer
    // and then I could get rid of the last integer (by dividing by 10) and have a smaller original number
    // I would keep taking the lasts digits of the number and adding it to the new backwards integer until there is no more digits left
    // EXAMPLE: 1221
    // backwards number = 0 
    // digit = 1221 % 10 = 1
    // backwards number + digit = 1
    // 1221 / 10 = 122 
    // digit = 122 % 10 = 2
    // backwards number * 10 + digit = 12
    // 122 / 10 = 12
    // digit = 12 % 10 = 2
    // backwards number * 10 + digit = 122
    // 12 / 10 = 1
    // digit = 1 % 10 = 1
    // backwards number * 10 + digit = 1221
    // 1 / 10 = 0 --> the last check would be if the og number is now 0!
    
    


#include <iostream>
using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        // First check to see if integer is a negative number, if so immediately not a palindrom
        // or if the number ends with a 0 (means its divisible by 10 )
        // also while x is not 0 (x = 0 is a palindorome)
        if(x <  0 || x % 10 == 0 && x!= 0 ) {
            cout << "is negative or ends with 0" << endl;
            return false;
        }

        // make long long int in case of very large numbers!
        // make a copy of a x to manipulate  
        long long int copy = x;
        // make a backwards number
        long long int backwards = 0;

        // while copy is not 0 
        while (copy != 0) {
            // get last digit of copy
            int digit = copy % 10;
            // add it to be the first digits of backwards number
            backwards = backwards * 10 + digit;
            // get rid fo the last digit in copy 
            copy = copy / 10;
        }

        cout << backwards << endl; 

        // now check if backwards and the passed in number are equal
        if (backwards == x) {
            cout << "is palindrome!" << endl; 
            return true;
        } else {
            cout << "is not a  palindrome!" << endl; 
            return false;
        }

    }
};

int main() {
    Solution solution;
    // solution.isPalindrome(-1234);
    // solution.isPalindrome(12340);
    // solution.isPalindrome(1221);
    solution.isPalindrome(1234);
}


