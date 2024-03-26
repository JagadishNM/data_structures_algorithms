class Node1 {
	val: any;
	next: any;
	constructor(val: any) {
		this.val = val;
		this.next = null;
	}
}
class SinglyLinkedList {
	head: any;
	tail: any;
	length: any;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add at last
	push(val: any) {
		const newNode: any = new Node1(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	//remove at last
	pop(): any {
		if (!this.head) return undefined;
		let current: any = this.head;
		let newTail: any = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	//remove at first
	shift(): any {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	//add at first
	unShift(val: any): any {
		let newNode = new Node1(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// to get pitem based on index

	get(index: number): any {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	// to replace value at given index

	set(value: any, index: number): boolean {
		let node = this.get(index);
		if (node === null) return false;
		node.val = value;
		return true;
	}

	// insert node at given index
	insert(value: any, index: number): boolean {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unShift(value);

		const newNode = new Node1(value);
		let previousNode = this.get(index - 1);
		let temp = previousNode.next;
		previousNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	// remove node at given index
	remove(index: number): any {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var previousNode = this.get(index - 1);
		var removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}

	/* 
	
	reverse method is Important 
	*/
	//reverse linked list
	// 	[100, 201, 205, 300, 400]
	//  prev node next
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	// print values
	print() {
		let arr: any = [];
		let current: any = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
		return arr;
	}
}

let list: any = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.print();
list.reverse();
list.print();
// console.log(list);
// list.pop();
// console.log(list);
// list.shift();
// console.log(list);
// list.unShift(4);
// console.log(list);
// list.get(1);
