function getIntersectionNode(headA, headB) {
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
      currA = currA ? currA.next : headB;
      currB = currB ? currB.next : headA;
    }
    return currA;
  }
  
  // Example linked lists with an intersection
  const headA = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
  const headB = { value: 4, next: headA.next };
  console.log(getIntersectionNode(headA, headB));  // Output: { value: 2, next: { value: 3, next: null } }

//   Question:
// Find the node at which the two linked lists intersect.
//   Explanation:
//   It finds the intersection point by adjusting pointers based on the difference in list lengths.

// Time Complexity:
// O(m + n)