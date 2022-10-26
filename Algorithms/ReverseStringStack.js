// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented

  // push function
  push(element) {
    // push element into the items
    this.items.push(element);
  }

  // pop function
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }
}

// reverse logic
function reverseString(str) {
  // create a stack of characters
  let stack = new Stack();
  let reversedStack = new Stack();
  // push all characters of string to stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // pop all characters of string and
  // put them back to str
  while (!stack.isEmpty()) {
    reversedStack.push(stack.pop());
  }

  console.log(reversedStack.items);
}

let str = "Hello World";
reverseString(str);
