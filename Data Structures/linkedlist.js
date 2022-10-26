//the first node in the linked list is the head node
//the last node is the tail node, and points to a null
//value

//a node is comprised of a data, and the position of
//the next element

// a pointer is a reference to another place in memory / a node / an object

//const obj1 = { a: true };
//const obj2 = obj1;

// obj2 is a pointer to the first variable obj1

// linked list implementation in javascript

/*
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
*/

class LinkedList {
  constructor(value) {
    // value is the starting node, aka the head node
    this.head = {
      value: value,
      next: null,
    };
    // tai by default is equal to the head as there is only one value
    this.tail = this.head;
    // by default length is one
    this.length = 1;
  }

  // append method
  append(value) {
    // code here
    // when a new value is added to a linked list,

    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;

    // increment the length value
    this.length++;

    return this;
  }

  // prepend method
  prepend(value) {
    const oldHead = this.head;

    const newNode = {
      value: value,
      next: oldHead,
    };

    this.head = newNode;

    this.length++;
  }

  // traverse method
  traverse() {
    let currentNode = this.head;
    // use a while loop, as we will not know the length of the LLDS
    while (currentNode.next != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(this.tail.value);
  }
}
// linked list = [10, 5, 16]
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

// linked list = [1, 10, 5, 16]

myLinkedList.traverse();
