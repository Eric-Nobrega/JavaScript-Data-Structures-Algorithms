var removeDuplicates = function (s) {
  // stack data structure

  // initialise stack
  let res = [];

  // loop through the array
  for (let i = 0; i < s.length; i++) {
    // if the current element doesnt not equal the top of the stack, push it
    if (s[i] !== res[res.length - 1]) {
      res.push(s[i]);
      // if the current element does equal the top of the stack, remove it
    } else {
      res.pop();
    }
    console.log(res);
  }
  return res.join("");
};
