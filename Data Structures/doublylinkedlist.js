/*the main benefit of a DLL vs LL is that the list can be 
traversed backwards easily since each node points forward, 
and backwards*/

class DoublyLinkedList {
  constructor(value) {
    // value is the starting node, aka the head node
    this.head = {
      value: value,
      next: null,
      prev: null,
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
      prev: null,
    };
    newNode.prev = this.tail;
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
let DoublyLinkedList = new DoublyLinkedList(10);
DoublyLinkedList.append(5);
DoublyLinkedList.append(16);
DoublyLinkedList.prepend(1);
// linked list = [1, 10, 5, 16]
DoublyLinkedList.remove(1);
// linked list = [1, 5, 16]
DoublyLinkedList.traverse();
