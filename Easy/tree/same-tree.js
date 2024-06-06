function isSameTree(p, q) {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;

	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}

	return false;
}

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
console.log(isSameTree([1, 2, 1], [1, 1, 2]));

// https://leetcode.com/problems/same-tree/description/
