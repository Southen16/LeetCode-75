// 2336. Smallest Number in Infinite Set
// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

// SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

// Example 1:

// Input
// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]
// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]

// Explanation
// SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
// smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
//                                    // is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

// Constraints:

// 1 <= num <= 1000
// At most 1000 calls will be made in total to popSmallest and addBack.

class SmallestInfiniteSet {
  constructor() {
    this.curr = 1;
    this.minHeap = [];
    this.set = new Set();
  }

  popSmallest() {
    if (this.minHeap.length > 0) {
      const smallest = this._heapPop();
      this.set.delete(smallest);
      return smallest;
    } else {
      return this.curr++;
    }
  }

  addBack(num) {
    if (num < this.curr && !this.set.has(num)) {
      this._heapPush(num);
      this.set.add(num);
    }
  }

  _heapPush(val) {
    this.minHeap.push(val);
    let i = this.minHeap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.minHeap[parent] <= this.minHeap[i]) break;
      [this.minHeap[i], this.minHeap[parent]] = [
        this.minHeap[parent],
        this.minHeap[i],
      ];
      i = parent;
    }
  }

  _heapPop() {
    if (this.minHeap.length === 1) return this.minHeap.pop();

    const top = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    let i = 0;
    const n = this.minHeap.length;

    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.minHeap[left] < this.minHeap[smallest])
        smallest = left;
      if (right < n && this.minHeap[right] < this.minHeap[smallest])
        smallest = right;
      if (smallest === i) break;

      [this.minHeap[i], this.minHeap[smallest]] = [
        this.minHeap[smallest],
        this.minHeap[i],
      ];
      i = smallest;
    }

    return top;
  }
}
