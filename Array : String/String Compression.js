/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0; // Pointer to write the compressed result
  let i = 0; // Pointer to traverse the array

  while (i < chars.length) {
    let char = chars[i];
    let start = i;

    // Count the occurrences of the current character
    while (i < chars.length && chars[i] === char) {
      i++;
    }
    let count = i - start;

    // Write the character to the array
    chars[write++] = char;

    // If the count is greater than 1, write the digits of the count
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }

  return write;
};

/*

How It Works:
	1.	Initialization:
	•	Use write to track where to write the compressed characters.
	•	Use i to iterate through the input array.
	2.	Processing Groups:
	•	For each character, count the number of consecutive occurrences (count).
	•	Write the character to the chars array.
	•	If count > 1, split the count into digits (e.g., 12 → '1', '2') and write them.
	3.	Return the Result:
	•	The write pointer represents the new length of the compressed array.
*/
