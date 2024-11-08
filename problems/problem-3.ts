function countWordOccurrences(sentence: string, word: string): number {
  const words = sentence.toLowerCase().split(" ");
  const result = word.toLowerCase();
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === result) {
      count++;
    }
  }

  return count;
}

console.log(
  countWordOccurrences("I love typescript and typescript also typescript", "typescript")
);