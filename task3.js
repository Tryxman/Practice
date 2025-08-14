const words = [
  'apple',
  'banana',
  'kiwi',
  'Avocado',
  'grape',
  'pear',
  'melon',
  'plum',
  'Mango',
]

function getUniqueSortedLengths(words) {
  return words
    .reduce((result, word, index, array) => {
      if (!result.includes(word.length)) {
        result.push(word.length)
      }
      return result
    }, [])
    .toSorted()
}
