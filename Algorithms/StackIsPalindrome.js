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

// check if a string is a palindrome using a stack data structure

function isPalindrome(str) {
  // create a stack variable
  let stackVar = new Stack();

  // push each character of str into the stack variable
  for (let i = 0; i < str.length; i++) {
    stackVar.push(str.charAt(i));
  }

  // create a string variable populated with the first stack as we pop()
  let strVar = "";

  while (stackVar.items.length > 0) {
    strVar = strVar + stackVar.items.pop();
  }

  if (strVar === str) {
    console.log("IS PALINDROME");
    return true;
  } else {
    console.log("IS NOT PALINDROME");
    return false;
  }
}

// should return true
isPalindrome("nan");

// should return false
isPalindrome("dog");
