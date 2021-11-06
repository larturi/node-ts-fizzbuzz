const fizzbuzz = (n: number, h: number, w: number) => {

    if (n % h === 0 && n % w === 0)
        return "FizzBuzz";
    else if (n % h === 0)
        return "Fizz";
    else if (n % w === 0)
        return "Buzz";
    else
        return n;
    
}

export default fizzbuzz;

