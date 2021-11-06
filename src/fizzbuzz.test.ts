import fizzbuzz from './fizzbuzz';

describe('fizzbuzz()', () => {
    
    it('fizzbuzz(6, 3, 5) debe retornar "Fizz"', () => {
        // Evalua que el 6 es multiplo de 3
        expect(fizzbuzz(6, 3, 5)).toBe("Fizz");
    });

    it('fizzbuzz(50, 3, 5) debe retornar "Buzz"', () => {
        // Evalua que el 50 es multiplo de 5
        expect(fizzbuzz(50, 3, 5)).toBe("Buzz");
    });

    it('fizzbuzz(15, 3, 5) debe retornar "FizzBuzz"', () => {
        // Evalua que el 15 es multiplo de 3 y 5
        expect(fizzbuzz(15, 3, 5)).toBe("FizzBuzz");
    });

    it('muestra en pantalla los 100 primeros:', () => {

        let arrayFizzBuzz = [];
        const arrayOk = [
            1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
            7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
            13,     14,     'FizzBuzz', 16,     17,     'Fizz',
            19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
            'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
            31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
            37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
            43,     44,     'FizzBuzz', 46,     47,     'Fizz',
            49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
            'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
            61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
            67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
            73,     74,     'FizzBuzz', 76,     77,     'Fizz',
            79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
            'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
            91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
            97,     98,     'Fizz',     'Buzz'
        ];

        for (let i = 0; i < 100; i++) {
            arrayFizzBuzz.push(fizzbuzz(i + 1, 3, 5))
        }

        console.log(arrayFizzBuzz);
        expect(arrayFizzBuzz).toEqual(arrayOk);
    });
    
});
