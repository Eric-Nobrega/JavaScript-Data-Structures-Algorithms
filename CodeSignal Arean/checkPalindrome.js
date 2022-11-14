function solution(inputString) {
  // create first stack
  let stack = [];
  // create second stack
  let reversedStack = [];

  // push string characters into first stack
  for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString[i]);
  }

  // populate the reversedStack with the reverse of the first stack
  while (stack.length != 0) {
    reversedStack.push(stack.pop());
  }

  // check if palindrome
  return reversedStack.join("") == inputString;
}
