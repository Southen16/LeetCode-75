/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity; // Smallest value found so far
  let second = Infinity; // Second smallest value found so far

  for (const num of nums) {
    if (num <= first) {
      // Update `first` if current number is smaller or equal
      first = num;
    } else if (num <= second) {
      // Update `second` if current number is smaller or equal
      // but larger than `first`
      second = num;
    } else {
      // If we find a number larger than `second`,
      // a triplet exists
      return true;
    }
  }

  return false; // No such triplet found
};

/* 

How It Works:
	1.	Initialization:
	•	Start with first and second set to Infinity.
	•	These variables will help track the smallest and second smallest values in the array.
	2.	Iterate Through the Array:
	•	If num <= first, update first with the current number.
	•	Else if num <= second, update second.
	•	Otherwise, if a number is greater than second, we have found a triplet: first < second < num.
	3.	Return Result:
	•	If no such triplet is found during iteration, return false.*/
