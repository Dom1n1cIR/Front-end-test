const { isPalindrome } = require('./script');

test('If Rotator is a palindrome return true', () => {
  expect(isPalindrome('Rotator')).toBe(true)
})

test('If Rotators is a palindrome return false', () => {
  expect(isPalindrome('Rotators')).toBe(false)
})

test('If race car is a palindrome return true', () => {
  expect(isPalindrome('race car')).toBe(true)
})