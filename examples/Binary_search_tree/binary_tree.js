class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;
		while (true) {
			if (current.value === val) return undefined;

			if (val < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (val > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	contains(val) {
		if (this.root === null) return false;
		let current = this.root;
		while (current) {
			if (val < current.value) {
				current = current.left;
			} else if (val > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}

		return false;
	}

	/// Tree traversal starts here

	// Breadth first search
	BFS() {
		let node = this.root,
			queue = [],
			data = [];

		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	// Depth first preorder

	DFSpreOrder() {
		let data = [];

		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	isValidBST(
		root = this.root,
		min = Number.MIN_SAFE_INTEGER,
		max = Number.MAX_SAFE_INTEGER
	) {
		if (root == null) return true;
		if (root.val >= max || root.val <= min) return false;
		return (
			this.isValidBST(root.left, min, root.val) &&
			this.isValidBST(root.right, root.val, max)
		);
	}
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(6);
tree.insert(7);
tree.insert(3);
console.log(tree.isValidBST());
// tree.BFS();
// tree.DFSpreOrder();
// console.log(tree.BFS());
// console.log(tree.DFSpreOrder());
// console.log(tree.root);

tree.contains(10);
tree.contains(55);
