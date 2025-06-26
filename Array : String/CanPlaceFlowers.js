// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  const length = flowerbed.length;

  for (let i = 0; i < length; i++) {
    if (flowerbed[i] === 0) {
      // Check if left and right plots are empty or out of bounds
      const emptyLeft = i === 0 || flowerbed[i - 1] === 0;
      const emptyRight = i === length - 1 || flowerbed[i + 1] === 0;

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1; // Plant a flower here
        count++;
        if (count >= n) return true; // Early return if done
      }
    }
  }

  return count >= n;
};
