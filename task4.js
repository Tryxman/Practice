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
function sumWordsLengthWithoutA(array) {
  const sum = array.reduce((result, el, index, array) => {
    if (!el.toLowerCase().includes('a')) return (result += el.length)
    return result
  }, 0)
  return sum
}
