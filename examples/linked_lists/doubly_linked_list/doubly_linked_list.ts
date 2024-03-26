class Node2 {
	val;
	next;
	prev;
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	head;
	tail;
	length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value: any): any {
		let newNode = new Node2(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop(): any {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	shift(): any {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	unShift(val: any): any {
		let newNode = new Node2(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index: number) {
		if (index < 0 || index >= this.length) return null;
		const middle = Math.floor(this.length / 2);
		let counter;
		let current;
		if (index < middle) {
			counter = 0;
			current = this.head;
			while (counter !== index) {
				current = current.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			current = this.tail;
			while (counter !== index) {
				current = current.prev;
				counter--;
			}
		}

		return current;
	}

	set(index: number, val: any) {
		let node = this.get(index);
		if (node === null) return false;
		node.val = val;
		return true;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unShift(value);
		if (index === this.length) return !!this.push(value);
		let newNode = new Node2(value);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		this.length++;
		return true;
	}

	// remove node at given index
	remove(index: number): any {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let removed = this.get(index);
		let beforeNode = removed.prev;
		let afterNode = removed.next;
		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		removed.next = null;
		removed.prev = null;
		this.length--;
		return removed;
	}
}

let listD = new DoublyLinkedList();
listD.push(1);
listD.push(2);
listD.push(3);
listD.pop();
