// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

var findMaxAverage = function (nums, k) {
  const n = nums.length;
  // Build prefix sums array where prefix[i] = sum of nums[0..i-1]
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }

  let maxSum = -Infinity;
  // Use prefix sums to find sum of each window in O(1)
  for (let i = k; i <= n; i++) {
    const currentSum = prefix[i] - prefix[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum / k;
};
