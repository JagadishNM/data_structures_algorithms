// Stack is last in first out
class Node3 {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
// Stack is last in first out
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// push is same like unshift in singly linked list
	// adds item at first
	push(val) {
		let newNode = new Node3(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		return ++this.size;
	}

	// pop is same like shift in singly linked list
	// remove item at first

	pop() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}
