export const generateFourDigit = () => {
  return Math.floor(1000 + Math.random() * 9000)
}

export const looseCheckEmail = (string) => {
  return /^\S+@\S+\.\S+$/g.test(string)
}

export const strictCheckEmail = (string) => {
  return true
}
