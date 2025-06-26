// 790. Domino and Tromino Tiling

// You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

// Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

// In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

// Example 1:

// Input: n = 3
// Output: 5
// Explanation: The five different ways are shown above.
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 1000

var numTilings = function (n) {
  const MOD = 1e9 + 7;
  let dp = new Array(n + 2).fill(0);
  let dp2 = new Array(n + 2).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  dp2[0] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp2[i - 1]) % MOD;
    dp2[i] = (dp2[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[n];
};
