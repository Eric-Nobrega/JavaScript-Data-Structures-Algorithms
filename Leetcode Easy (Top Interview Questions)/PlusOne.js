var plusOne = function (digits) {
  // the difficult aspect of this problem comes from numbers such as 9, which when
  // we increment by 1, we end with 10, this is difficult as it means we must find
  // a solution that will accomodate for both these numbers, as well as numbers that
  // simply require a simple incrementation such as (4 + 1 = 5)

  // example:
  // input [1, 2, 9] == 129
  // adding 1 will equal 130
  // we must however handle the number 9 correctly
  // we do this by setting 9 to zero, since we will be heading to the next tens
  // (30 in this example)
  // therefore after doing so, the number 129/[1, 2, 9] would be set to [1, 2, 0]
  // we then continue the reverse loop, checking if the next number (2) is equal to 9
  // it isnt, therefore we increment by 1, leaving the state equal to [1, 3, 0]
  // we are now on the number 1,

  // loop through the digits array from the end (reverse loop)
  for (let i = digits.length - 1; i > -1; i--) {
    // if selected digit == 9
    if (digits[i] == 9) {
      // set digit to 0
      digits[i] = 0;
      // if index is zero
      if (i == 0) {
        // add the number 10 on to end of arr
        digits = [1].concat(digits);
      }
    } else {
      // if the selected number is not a 9, we simply increment by one
      console.log(digits[i]);
      digits[i]++;
      break;
    }
  }
  return digits;
};
