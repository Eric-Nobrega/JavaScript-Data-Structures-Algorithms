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

    // return this;
  }

  // prepend method
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // traverse method
  traverse() {
    let arr = [];
    let currentNode = this.head;
    // use a while loop, as we will not know the length of the LLDS
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  // insert method
  insert(index, value) {
    // check the paramaters, error handling
    if (value >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    // leader node is the node previous to the index we
    // want to insert to, therefore we subract 1 from the
    // index paramter
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    // insert the new node into the LLDS
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  // traverse to index method
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // remove method
  remove(index) {
    //check params
    //remove the pointer that points towards the deleted node
    //update it with the node infront of the deleted node
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next.next;

    leaderNode.next = holdingPointer;
    this.length--;
  }
}
// linked list = [10, 5, 16]
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// linked list = [1, 10, 5, 16]
myLinkedList.remove(1);
// linked list = [1, 5, 16]
myLinkedList.traverse();
