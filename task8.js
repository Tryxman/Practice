const products = [
  ['bread', 12],
  ['milk', 10.5],
  ['cheese', 5],
  ['apple', 3.8],
  ['banana', 4.2],
  ['chocolate', 3],
  ['coffee', 4.5],
  ['butter', 2.5],
  ['tea', 2],
  ['yogurt', 1.8],
]
function summarize(array, isPositive) {
  return array
    .filter(number => (isPositive ? number > 0 : number < 0))
    .reduce((result, sum) => result + sum, 0)
}
function maxProductsListByNames(numbers, products) {
  const incomes = summarize(numbers, true)
  const expenses = summarize(numbers, false)
  let remains = incomes + expenses
  console.log(remains)

  products.sort((a, b) => a[1] - b[1])
  return products.reduce((result, product) => {
    if (remains - product[1] >= 0) {
      result.push(product[0])
      remains -= product[1]
    }
    return result
  }, [])
}
