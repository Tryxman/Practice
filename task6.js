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
function getWordsWith(array, subString, length) {
  return array.filter((word, index) => {
    return (
      word.toLowerCase().includes(subString.toLowerCase()) &&
      word.length >= length
    )
  })
}
