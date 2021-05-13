"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloworld = (n, h, w) => {
    if (n % h === 0 && n % w === 0)
        return "HelloWorld";
    else if (n % h === 0)
        return "Hello";
    else if (n % w === 0)
        return "World";
    else
        return n;
};
exports.default = helloworld;
//# sourceMappingURL=helloworld.js.map