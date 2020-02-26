/**
 * Returns a letter depending on the quantity
 *
 * Imagine you are only working with digits :)
 * Use letters[0] for 1, letters[1] for 2..4, letters[2] for 5..9 and 0
 *
 * @function
 * @param {number} number     – quantity to depend on
 * @param {string[]} letters  - array of letters to choose from
 *
 * @return {string} letter
 * */
const prettyLetter = (number, letters) => {
  if (typeof number !== 'number') {
    throw new TypeError('First argument must be a number')
  }

  number = Math.abs(number).toString()

  const numberIsFractional = number.includes('.')
  const [integerPart] = number.split('.')

  const digitsCount = integerPart.length

  const firstDigit = +integerPart[0]
  const lastDigit = +integerPart[digitsCount - 1]

  if (digitsCount === 1) {
    if (firstDigit === 1) {
      return letters[0]
    }
    if (firstDigit > 1 && firstDigit < 5 || numberIsFractional && +integerPart === 0) {
      return letters[1]
    }
    if (firstDigit === 0 || firstDigit >= 5 || numberIsFractional) {
      return letters[2]
    }
  }
  else {
    if (lastDigit === 1 && firstDigit !== 1) {
      return letters[0]
    }
    if (lastDigit > 1 && lastDigit < 5 || numberIsFractional && +integerPart === 0) {
      return letters[1]
    }
    if (lastDigit === 0 || lastDigit >= 5 || firstDigit === 1 || numberIsFractional) {
      return letters[2]
    }
  }
}

module.exports = prettyLetter
