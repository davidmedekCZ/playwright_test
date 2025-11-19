export class Calculator {
  add(a, b) {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    return result;
  }

  substract(a, b) {
    const result = a - b;
    console.log(`${a} - ${b} = ${result}`);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);
    return result;
  }

  divide(a, b) {
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    return result;
  }
}
