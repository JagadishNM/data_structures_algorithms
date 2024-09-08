

class ListNode {
    constructor(data = 0, next = null) {
        this.data = data;
        this.next = next;
    }
}

function getNumber(binary) {
    let binaryStr = '';
    let currentNode = binary;
    
    // Traverse the linked list and construct the binary string
    while (currentNode !== null) {
        binaryStr += currentNode.data.toString();
        currentNode = currentNode.next;
    }

    // Convert binary string to decimal number
    return parseInt(binaryStr, 2);
}

// Example usage:

// Creating a linked list representing the binary number 010011 (19 in decimal)
let node1 = new ListNode(0);
let node2 = new ListNode(1);
let node3 = new ListNode(0);
let node4 = new ListNode(0);
let node5 = new ListNode(1);
let node6 = new ListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

// Converting the linked list to decimal
console.log(getNumber(node1)); // Output: 19


// 1. Binary Number in a Linked List
// A binary number is represented as a series of O's
// and 1's. In this challenge, the series will be in the
// form of a singly-linked list. Each node instance, a
// LinkedListNode, has a value, data, and a pointer to
// the next node, next. Given a reference to the head
// of a singly-linked list, convert the binary number
// represented to a decimal number.
// Example
// 6
// 7
// 7
// 7.
// 7-
// 75
// 76
// Linked List
// 77
// binary
// +
// 0
// 0
// 0
// 1
// null
// 78
// 79
// Linked list corresponding to the binary number
// (010011)[2] or (19)[10].
// Function Description
// Complete the function getNumber in the editor
// below.
// getNumber has the following parameter(s):
// binary: reference to the head of a singly-linked
// list of binary digits
// 80
// 81
// 82
// 83
// 84
// 85
// 86
// 87