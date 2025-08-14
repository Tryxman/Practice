const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11]
const arFunc = [
  function addTen(a) {
    return a + 10
  },
  function multiplyByTwo(a) {
    return a * 2
  },
  function modSeven(a) {
    return a % 7
  },
]
function pipelineNumbers(numbers, functions) {
  return numbers.map(number =>
    functions.reduce((result, func) => func(result), number),
  )
}
