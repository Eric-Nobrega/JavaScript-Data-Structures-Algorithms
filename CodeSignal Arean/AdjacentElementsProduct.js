function solution(inputArray) {
  let previousSum = -Infinity;
  let currentSum = null;

  for (let i = 0; i < inputArray.length - 1; i++) {
    currentSum = inputArray[i] * inputArray[i + 1];
    if (currentSum > previousSum) {
      previousSum = currentSum;
    }
  }

  return previousSum;
}
