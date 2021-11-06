"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz = (n, h, w) => {
    if (n % h === 0 && n % w === 0)
        return "FizzBuzz";
    else if (n % h === 0)
        return "Fizz";
    else if (n % w === 0)
        return "Buzz";
    else
        return n;
};
exports.default = fizzbuzz;
//# sourceMappingURL=fizzbuzz.js.map