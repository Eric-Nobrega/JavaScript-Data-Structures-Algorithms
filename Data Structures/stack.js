// implemented using an array

class Stack {
  // constructor method
  constructor() {
    this.objects = [];
  }

  // lookup method
  lookup(value) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i] == value) {
        return i;
      }
    }
    return null;
  }

  // pop method
  pop() {
    this.objects.pop();
  }

  // push method
  push(value) {
    this.objects.push(value);
  }

  // peek method
  peek() {
    return this.objects[this.objects.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.peek());
console.log(stack.lookup(1));
console.log(stack.objects);
