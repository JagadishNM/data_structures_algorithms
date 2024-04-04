function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  
  // Example linked list with a cycle
  const head = { value: 1, next: { value: 2, next: { value: 3, next: head } } };
  console.log(hasCycle(head));  // Output: true

//   Question:
// Detect if a linked list has a cycle.

// It uses Floyd’s cycle-finding algorithm with two pointers moving at different speeds.