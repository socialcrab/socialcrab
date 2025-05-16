function formatNumberThousand(number) {
  if (number < 1000) {
    return number.toString()
  } else {
    const thousands = Math.floor(number / 1000)
    const remainder = number % 1000
    let formattedRemainder = remainder.toString().padStart(3, '0')
    if (remainder > 99) {
      formattedRemainder = ',' + formattedRemainder
    }
    return `${thousands}${formattedRemainder}`
  }
}

export default formatNumberThousand
