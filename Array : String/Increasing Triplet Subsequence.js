/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      // Update `first` if the current number is smaller or equal
      first = num;
    } else if (num <= second) {
      // Update `second` if the current number is smaller or equal
      // but larger than `first`
      second = num;
    } else {
      // If we find a number larger than `second`, the triplet exists
      return true;
    }
  }

  return false; // No such triplet found
};

/*

Explanation:
	1.	Two Variables (first and second):
	•	first: Tracks the smallest number found so far.
	•	second: Tracks the smallest number that is larger than first.
	2.	Iterating Through nums:
	•	If num <= first, update first to num.
	•	Else if num <= second, update second to num.
	•	Otherwise, we found a number greater than second, so we have first < second < num, meaning a triplet exists.
	3.	Early Return:
	•	As soon as we find a triplet, return true.
	•	If the loop completes without finding a triplet, return false.
    
 */
