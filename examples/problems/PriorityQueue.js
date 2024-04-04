class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      this.items.push({ item, priority });
      this.items.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.items.shift().item;
    }
  }
  
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("Task 1", 3);
  priorityQueue.enqueue("Task 2", 1);
  console.log(priorityQueue.dequeue());  // Output: "Task 2"

//   /It maintains a priority queue using an array and sorting based on priority.