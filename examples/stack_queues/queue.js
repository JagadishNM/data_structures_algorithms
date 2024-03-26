//Queue is first in first out
class Node4 {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enQueue(val) {
		let newNode = new Node4(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	deQueue() {
		if (!this.first) return null;
		if (this.first === this.last) {
			this.last = null;
		}

		let temp = this.first;
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}
