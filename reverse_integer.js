var reverse = function (x) {

    const checkNumber = (x) => !Number.isInteger(x) || x < -(2 ** 31) || x > 2 ** 31 - 1;
    if (checkNumber(x)) return 0;
    let sign = x < 0 ? -1 : 1;
    if (x < 0) x = Math.abs(x);

    while (x % 10 === 0 && x !== 0) x = x / 10;

    let res = `${x}`.split('').reverse().join('');
    if (checkNumber(parseInt(res))) return 0;
    return parseInt(res) * sign;
};

console.log(reverse(0));
console.log(reverse(-123));
console.log(reverse(120));

/**
 * Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 */