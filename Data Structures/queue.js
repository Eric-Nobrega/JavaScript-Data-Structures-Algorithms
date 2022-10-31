class Queue {
  // constructor method
  constructor() {
    this.objects = [];
    this.head = 0;
    this.tail = 0;
  }

  // isEmpty method
  isEmpty() {
    return this.objects.length == 0;
  }

  // enqueue method
  enqueue(element) {
    // add the new element on to the end of the objects array
    // by accessing the tail index, which is the end node/element
    this.elements[this.tail] = element;
    // increment the tail value to be equal to the end node/element index
    this.tail++;
  }

  // dequeue method
  dequeue() {
    // remove the
    delete this.elements[this.head];
    this.head++;
  }

  // peek method
  peek() {
    // returning the element at index 0, as the element to first leave then
    // queue is the index 0 element (FIFO Data Structure)
    return this.elements[this.head];
  }

  // getLength method
  getLength(){
    return this.tail;
  }
}

const queue = new Queue();
queue.enqueue(5);
console.log(queue.getLength());


// tail = index 5
// head = index 0
