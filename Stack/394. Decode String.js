// 394. Decode String
// Medium
// Topics
// premium lock icon
// Companies
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currNum = 0;
  let currStr = "";

  for (let char of s) {
    if (!isNaN(char)) {
      // if char is a digit
      currNum = currNum * 10 + Number(char);
    } else if (char === "[") {
      // push the current string and number onto the stack
      stack.push(currStr);
      stack.push(currNum);
      // reset for the new substring
      currStr = "";
      currNum = 0;
    } else if (char === "]") {
      // pop the number and last string
      let num = stack.pop();
      let prevStr = stack.pop();
      // build the new string
      currStr = prevStr + currStr.repeat(num);
    } else {
      currStr += char; // normal letter, add to current string
    }
  }

  return currStr;
};
