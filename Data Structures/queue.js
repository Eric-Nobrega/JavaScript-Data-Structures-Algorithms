// program to implement queue data structure
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  // enqueue method
  enqueue(element) {
    // sets the tail to be equal to the new element that is added to the queue
    this.elements[this.tail] = element;
    // increments the tail
    this.tail++;
  }

  // dequeue method
  dequeue() {
    // select the item at the front of the back
    const item = this.elements[this.head];
    // remove the item at the front of the queue
    delete this.elements[this.head];
    // increment the head value as it is moving up the queue's index
    this.head++;
    // return the item that was removed from the front of the queue
    return item;
  }

  // peek method
  peek() {
    // select and return the element at the front of the queue (head)
    return this.elements[this.head];
  }

  // length method
  get length() {
    // return the length of the queue
    return this.tail - this.head;
  }

  // empty method
  get isEmpty() {
    return this.length === 0;
  }
}

// create an instance of a queue
let q = new Queue();

// enqueue elements from 1 - 7
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}

// get the number at the front of the queue
console.log(q.peek());

// get the current length of the queue
console.log(q.length);

// remove the element at the front of the queue
console.log(q.dequeue());

// remove all the elements
while (!q.isEmpty()) {
  console.log(q.dequeue());
}
