const { factorial, fibonacci } = require('./math');

test('Factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Fibonacci de 6 es 8', () => {
    expect(fibonacci(6)).toBe(8);
});