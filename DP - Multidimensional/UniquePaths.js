// 62. Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:

// 1 <= m, n <= 100

var uniquePaths = function (m, n) {
  let dp = new Array(n).fill(1); // Only one way to reach any cell in the first row

  for (let i = 1; i < m; i++) {
    // Start from the second row
    for (let j = 1; j < n; j++) {
      // Start from the second column
      dp[j] = dp[j] + dp[j - 1]; // Current cell = top cell + left cell
    }
  }

  return dp[n - 1]; // The bottom-right corner value
};
