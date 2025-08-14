/*1️⃣ getPosNegArrays — 1 балл
Напишите функцию, которая вернёт массив из двух массивов: первый — все положительные числа, второй — все отрицательные (ноль игнорировать).
Бонус (+1 балл): решение в одно действие (например, в один reduce). */
const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11]
function getPosNegArrays(array) {
  const positiveArray = []
  const negativeArray = []
  const result = []
  for (const el of array) {
    if (el > 0) {
      positiveArray.push(el)
    } else if (el < 0) {
      negativeArray.push(el)
    }
  }
  return [positiveArray, negativeArray]
}
console.log(getPosNegArrays(numbers))

const arrayNew = numbers.reduce(
  (result, el) => {
    if (el > 0) result[0].push(el)
    else if (el < 0) result[1].push(el)
    return result
  },
  [[], []],
)
console.log(arrayNew[0], arrayNew[1])

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
console.log()
