// 1493. Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

var longestSubarray = function (nums) {
  let left = 0,
    zeros = 0,
    maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > 1) {
      // We can delete at most 1 zero
      if (nums[left] === 0) zeros--;
      left++;
    }

    // Subtract 1 because we must delete one element
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};
