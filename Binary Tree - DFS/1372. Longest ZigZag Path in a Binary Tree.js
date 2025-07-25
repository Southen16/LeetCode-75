// 1372. Longest ZigZag Path in a Binary Tree
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

// Example 1:

// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
// Example 2:

// Input: root = [1,1,1,null,1,null,null,1,1,null,1]
// Output: 4
// Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
// Example 3:

// Input: root = [1]
// Output: 0

// Constraints:

// The number of nodes in the tree is in the range [1, 5 * 104].
// 1 <= Node.val <= 100

var longestZigZag = function (root) {
  let maxLength = 0;

  const dfs = (node, direction, length) => {
    if (!node) return;
    maxLength = Math.max(maxLength, length);

    if (direction === 0) {
      // came from left, go right
      dfs(node.right, 1, length + 1);
      dfs(node.left, 0, 1); // reset if going same direction
    } else {
      // came from right, go left
      dfs(node.left, 0, length + 1);
      dfs(node.right, 1, 1); // reset
    }
  };

  // Start both directions from root
  dfs(root.left, 0, 1); // go left first
  dfs(root.right, 1, 1); // go right first

  return maxLength;
};
