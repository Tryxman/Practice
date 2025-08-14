const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11]

function getSecondLargest(numbers = []) {
  let max = numbers[0]
  let secondMax = numbers[0]

  for (let num of numbers) {
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax && num < max) {
      secondMax = num
    }
  }

  return secondMax
}

console.log(getSecondLargest(numbers))
