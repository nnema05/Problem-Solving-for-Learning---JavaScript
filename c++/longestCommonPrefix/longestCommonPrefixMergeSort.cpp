
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;
// BETTER SOLUTION, but with written implementation of sort function (merge sort)
/*SOLUTION
-Initialize an empty string ans to store the common prefix.
-Sort the input list v lexicographically --> using merge sort!!. 
    This step is necessary because the common prefix should be common to all the strings, 
    so we need to find the common prefix of the first and last string in the sorted list.
    If the array is sorted alphabetically 
        then you can assume that the first element of the array and the last element of the array will have most different prefixes
        If this is true, you only have to compare these two strings.
-Iterate through the characters of the first and last string in the sorted list, stopping at the length of the shorter string.
-If the current character of the first string is not equal to the current character of the last string,
     return the common prefix found so far.
-Otherwise, append the current character to the ans string.
-Return the ans string containing the longest common prefix.

*/

// Merge two subarrays arr[l..m] and arr[m+1..r] 

class Solution {
public: 

    // function merge actually sorts the array and merges them
    // Merge two subarrays arr[l..m] and arr[m+1..r] 
    void merge(vector<string>& v, int l, int m, int r) 
    { 
        // has integers i (to keep track of smallest in left array, j to keep track of smalles in right array and k to keep track of next unsorted in og vector)
        int i, j, k; 
        int n1 = m - l + 1;  // size of both of the temp vectors
        int n2 = r - m; 
        // create temp vectors from vector
        vector<string> L(n1), R(n2); 

        /* Copy data from original vector to temp vectors L[] and R[] */
        for (i = 0; i < n1; i++) 
            L[i] = v[l + i]; 
        for (j = 0; j < n2; j++) 
            R[j] = v[m + 1+ j]; 

        /* Merge the temp vectors back into  vector v*/
        i = 0; // Initial index of first subarray 
        j = 0; // Initial index of second subarray 
        k = l; // Initial index of merged subarray 
        while (i < n1 && j < n2)  // keep going while i and j are less then the size of right and left vector
        { 
            // recall i and j are the smallest (most alphabetically first)
            if (L[i] <= R[j])  // if the ith string is lexicographically less then the jth string,
            { 
                 // then the ith string goes first and replaces the next unsorted position in original vector
                v[k] = L[i]; 
                i++; 
            } 
            else
            { 
                 // if the jth string is lexicographically less then the ith string,
                  // then the jth string goes first and replaces the next unsorted position in original vector
                v[k] = R[j]; 
                j++; 
            } 
            // either way, k will be incremented to be to the next unsorted part of the vector 
            k++; 
        } 

        // eventually one of the sub vectors will run out so these while loops take care of the reminaing elements in either sub vector 
        /* Copy the remaining elements of L[], if there 
        are any */
        while (i < n1) 
        { 
            v[k] = L[i]; 
            i++; 
            k++; 
        } 

        /* Copy the remaining elements of R[], if there 
        are any */
        while (j < n2) 
        { 
            v[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 

    /* l is for left index and r is right index of the 
    sub-array of arr to be sorted */
    void mergeSort(vector<string>& v, int l, int r) 
    { 
        if (l < r) 
        { 
            // Same as (l+r)/2, but avoids overflow for 
            // large l and h 
            int m = l+(r-l)/2;  // finds the middle index to divide vector into half 

            // Sort first and second halves 
                // recursive call to merge sort
            mergeSort(v, l, m); // will recrusively call to divide the vector into smaller and smaller halves until there is only one elemnt in the left side which will return back 
            mergeSort(v, m+1, r); // will recrusively call to divide the vector into smaller and smaller halves until there is only one elemnt in the right which will return back
            // at the very end of recrusive calls smallest array, merge function will be called to sort the array 
            merge(v, l, m, r); 
        } 
    } 

    string longestCommonPrefix(vector<string>& v) {
        string ans="";
        mergeSort(v, 0, v.size()-1); // makes a call to merge sort this sorts lexicographically 
        // gets the first and last strings in the vector because they are theoretically the most apart
        int n=v.size();
        string first=v[0],last=v[n-1];
        for(int i=0; i<min(first.size(),last.size());i++){
            if(first[i]!=last[i]){
                cout << ans;
                return ans;
            }
            ans+=first[i];
        }
        cout << ans;
        return ans;
    }

}; 

// Utility function to print the sorted vector
void printVector(vector<string> v) 
{ 
    int i; 
    for (i=0; i < v.size(); i++) 
        cout << v[i] << " "; 
    cout << endl; 
} 


int main() {
    Solution solution;
    vector<string> strs;
    strs.push_back("flower");
    strs.push_back("flow");
    strs.push_back("flight");

    solution.longestCommonPrefix(strs);
    printVector(strs);
}

