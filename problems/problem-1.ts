function sumArray(numbers: number[]) {
  let sum = 0;
  numbers.map((num) => {
    sum += num;
    return num;
  });
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
