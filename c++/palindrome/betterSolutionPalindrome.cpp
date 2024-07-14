// BETTER SOLUTION
class Solution {
public:
    bool isPalindrome(int x) {
        // If the input number x is negative, it cannot be a palindrome
        // If x is non-zero and ends with a zero, it cannot be a palindrome because leading zeros are not allowed in palindromes
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        // reversed: This variable will store the reversed value of the number x
        // temp: This variable is a temporary placeholder to manipulate the input number without modifying the original value.
        long long reversed = 0;
        long long temp = x;

        // We enter a loop that continues until temp becomes zero:
        while (temp != 0) {
            // Inside the loop, we extract the last digit of temp using the modulo operator % and store it in the digit variable.
            int digit = temp % 10;
            // To reverse the number, we multiply the current value of reversed by 10 and add the extracted digit.
            reversed = reversed * 10 + digit;
            // We then divide temp by 10 to remove the last digit and move on to the next iteration.
            temp /= 10;
        }
        // Once the loop is completed, we have reversed the entire number. Now, we compare the reversed value reversed with the original input value x.
        // If they are equal, it means the number is a palindrome, so we return true.


        return (reversed == x);
    }
};