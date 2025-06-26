/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate prefix product for each element
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Calculate suffix product and multiply with the prefix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
};
/*
Explanation:
	1.	Prefix Product: In the first loop, calculate the product of all elements to the left of each index and store it in the answer array.
	2.	Suffix Product: In the second loop (reverse), calculate the product of all elements to the right of each index and multiply it with the existing value in the answer array.
	3.	Avoid Division: This solution avoids using division entirely by using prefix and suffix products.
	4.	Space Complexity: The space complexity is O(1) (excluding the output array) as we only use a few variables (prefix and suffix).

*/
