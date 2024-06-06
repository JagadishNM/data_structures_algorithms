/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

var maxDepth = function (root) {
	if (root === null) return 0;
	let maximumDepth = 0;
	for (let child of root.children) {
		maximumDepth = Math.max(maximumDepth, maxDepth(child));
	}
	return maximumDepth + 1;
};

// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
