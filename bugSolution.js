function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Explicitly return NaN if input is not a number
    // throw new Error('Inputs must be numbers'); //Alternative error handling
  }
  return a + b; // Perform addition only if both inputs are numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: 0
console.log(foo("hello", 5)); // Output: NaN
console.log(foo(1, "world")); // Output: NaN