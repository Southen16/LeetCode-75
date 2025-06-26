// 2542. Maximum Subsequence Score
// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

// For chosen indices i0, i1, ..., ik - 1, your score is defined as:

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.

// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

 

// Example 1:

// Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
// Output: 12
// Explanation: 
// The four possible subsequence scores are:
// - We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
// - We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
// - We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
// - We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
// Therefore, we return the max score, which is 12.
// Example 2:

// Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
// Output: 30
// Explanation: 
// Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
 

// Constraints:

// n == nums1.length == nums2.length
// 1 <= n <= 105
// 0 <= nums1[i], nums2[j] <= 105
// 1 <= k <= n

class MinHeap {
    constructor() {
        this.data = [];
    }
    
    push(val) {
        this.data.push(val);
        this._bubbleUp();
    }

    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._bubbleDown();
        return top;
    }

    _bubbleUp() {
        let i = this.data.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.data[i] >= this.data[p]) break;
            [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
            i = p;
        }
    }

    _bubbleDown() {
        let i = 0, l = this.data.length;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < l && this.data[left] < this.data[smallest]) smallest = left;
            if (right < l && this.data[right] < this.data[smallest]) smallest = right;
            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }

    size() {
        return this.data.length;
    }
}

var maxScore = function(nums1, nums2, k) {
    const n = nums1.length;
    const pairs = nums1.map((num, i) => [nums2[i], nums1[i]]);

    // Sort by nums2 descending
    pairs.sort((a, b) => b[0] - a[0]);

    let heap = new MinHeap();
    let sum = 0, maxScore = 0;

    for (let [num2, num1] of pairs) {
        heap.push(num1);
        sum += num1;

        if (heap.size() > k) {
            sum -= heap.pop();
        }

        if (heap.size() === k) {
            maxScore = Math.max(maxScore, sum * num2);
        }
    }

    return maxScore;
};