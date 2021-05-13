import helloworld from './helloworld';

describe('helloworld()', () => {
    
    it('helloworld(6, 3, 5) debe retornar "Hello"', () => {
        expect(helloworld(6, 3, 5)).toBe("Hello");
    });

    it('helloworld(100, 8, 10) debe retornar "World"', () => {
        expect(helloworld(100, 8, 10)).toBe("World");
    });

    it('helloworld(15, 3, 5) debe retornar "HelloWorld"', () => {
        expect(helloworld(15, 3, 5)).toBe("HelloWorld");
    });
    
});
