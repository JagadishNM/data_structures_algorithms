var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
	let current = dummy;
	let carry = 0;

	while (l1 || l2) {
		const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
		const digit = sum % 10;
		carry = Math.floor(sum / 10);

		current.next = new ListNode(digit);
		current = current.next;

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	if (carry > 0) {
		current.next = new ListNode(carry);
	}

	return dummy.next;
};

// https://leetcode.com/problems/add-two-numbers/
