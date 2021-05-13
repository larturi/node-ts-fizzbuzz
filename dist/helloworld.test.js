"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloworld_1 = require("./helloworld");
describe('helloworld()', () => {
    it('helloworld(6, 3, 5) debe retornar "Hello"', () => {
        expect(helloworld_1.default(6, 3, 5)).toBe("Hello");
    });
    it('helloworld(100, 8, 10) debe retornar "World"', () => {
        expect(helloworld_1.default(100, 8, 10)).toBe("World");
    });
    it('helloworld(15, 3, 5) debe retornar "HelloWorld"', () => {
        expect(helloworld_1.default(15, 3, 5)).toBe("HelloWorld");
    });
});
//# sourceMappingURL=helloworld.test.js.map