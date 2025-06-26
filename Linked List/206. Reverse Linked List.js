// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextTemp = curr.next; // Save next node
    curr.next = prev; // Reverse the link
    prev = curr; // Move prev forward
    curr = nextTemp; // Move curr forward
  }

  return prev;
};
