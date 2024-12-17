# JavaScript Loose Typing and NaN

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  The `foo` function attempts to add two numbers, but it doesn't explicitly check for the type of input, leading to unexpected `NaN` results when non-numeric values are passed.  The solution shows how to implement robust type checking to prevent this error.

## Bug

The bug lies in the `foo` function. Due to JavaScript's loose typing, the '+' operator will attempt to perform string concatenation if either `a` or `b` is a string, resulting in `NaN` if a mathematical addition is expected.  This is a classic example of the need for explicit type handling in JavaScript.

## Solution

The solution involves adding explicit type checking and error handling to ensure both `a` and `b` are numbers before performing the addition. This approach provides a more robust and predictable function behavior.