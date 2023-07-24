function addBigNumbers(a, b) {
  if (a.length < b.length) {
    [a, b] = [b, a]; // đổi vị trí 2 toán tử
  }

  b = b.padStart(a.length, "0"); // Pad the shorter number with leading zeros

  let carry = 0;
  let result = "";

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}

function multiplySingleDigit(num, digit) {
  let carry = 0;
  let result = "";

  for (let i = num.length - 1; i >= 0; i--) {
    const product = parseInt(num[i]) * digit + carry;
    carry = Math.floor(product / 10);
    result = (product % 10) + result;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}

function multiplyBigNumbers(a, b) {
  let result = "0";
  a = a.split("").reverse().join("");

  for (let i = 0; i < b.length; i++) {
    const digit = parseInt(b[i]);
    const partialProduct = multiplySingleDigit(a, digit) + "0".repeat(i);
    result = addBigNumbers(result, partialProduct);
  }

  return result;
}

function calculate(input) {
  const [numA, operator, numB] = input.split(" ");

  let result;
  if (operator === "+") {
    result = addBigNumbers(numA, numB);
  } else if (operator === "*") {
    result = multiplyBigNumbers(numA, numB);
  } else {
    console.log("Toán tử không hợp lệ. Vui lòng sử dụng '+' hoặc '*'");
    return;
  }

  console.log(result);
}

// Test the function with the given input
const input = "1234567890123456789012345678 + 9234567891234567890098765432";
calculate(input);
