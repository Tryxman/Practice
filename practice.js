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

/* 2️⃣ sumPosNeg — 1 балл
Напишите функцию, которая вернёт массив из двух чисел: сумма положительных и сумма отрицательных.
Бонус (+1 балл): использовать результат из задачи 1. */

function sumPosNeg(arr) {
  const [positives, negatives] = getPosNegArrays(numbers)

  let sumPos = 0
  let sumNeg = 0

  for (let i = 0; i < positives.length; i++) {
    sumPos += positives[i]
  }

  for (let i = 0; i < negatives.length; i++) {
    sumNeg += negatives[i]
  }

  return [sumPos, sumNeg]
}

const [sumPos, sumNeg] = sumPosNeg(numbers)

console.log(sumPos)
console.log(sumNeg)
