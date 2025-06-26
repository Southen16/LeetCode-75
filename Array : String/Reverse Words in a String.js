/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Trim the string to remove leading and trailing spaces
  s = s.trim();

  // Split the string by spaces into an array of words, filtering out any empty strings
  const words = s.split(/\s+/);

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the words back into a string with a single space separator
  return reversedWords.join(" ");
};

/*
Explanation:
	1.	Trim the String: Use .trim() to remove leading and trailing spaces.
	2.	Split into Words: Use split(/\s+/) to split the string into an array of words based on one or more spaces, ignoring extra spaces between words.
	3.	Reverse the Array: Use .reverse() to reverse the order of words.
	4.	Join Words: Use .join(' ') to join the words back together with a single space between them.

*/
