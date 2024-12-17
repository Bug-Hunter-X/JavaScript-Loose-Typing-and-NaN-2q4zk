function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // potential bug if a or b is not a number
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: 0
console.log(foo("hello", 5)); // Output: NaN
console.log(foo(1, "world")); // Output: NaN