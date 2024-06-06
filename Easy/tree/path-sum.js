/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	// DFS
	function traverse(root, currSum) {
		if (root === null) return false;

		currSum += root.val;
		if (!root.left && !root.right) {
			return currSum === targetSum;
		}

		return traverse(root.left, currSum) || traverse(root.right, currSum);
	}
	return traverse(root, 0);
};

// https://leetcode.com/problems/path-sum/submissions/1247883967/
