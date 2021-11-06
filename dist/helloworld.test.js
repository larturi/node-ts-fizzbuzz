"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('helloworld()', () => {
    it('helloworld(6, 3, 5) debe retornar "Hello"', () => {
        // Evalua que el 6 es multiplo de 3
        expect(helloworld(6, 3, 5)).toBe("Hello");
    });
    it('helloworld(50, 3, 5) debe retornar "World"', () => {
        // Evalua que el 50 es multiplo de 5
        expect(helloworld(50, 3, 5)).toBe("World");
    });
    it('helloworld(15, 3, 5) debe retornar "HelloWorld"', () => {
        // Evalua que el 15 es multiplo de 3 y 5
        expect(helloworld(15, 3, 5)).toBe("HelloWorld");
    });
    it('muestra en pantalla los 100 primeros numeros"', () => {
        let arrayFizzBuzz = [];
        for (let i = 0; i < 100; i++) {
            arrayFizzBuzz.push(helloworld(i + 1, 3, 5));
        }
        console.log(arrayFizzBuzz);
        expect(helloworld(15, 3, 5)).toBe("HelloWorld");
    });
});
//# sourceMappingURL=helloworld.test.js.map