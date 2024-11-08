function removeDuplicates(array: number[]): number[] {
  const uniqueNumbers: number[] = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (array[i] === uniqueNumbers[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueNumbers.push(array[i]);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
