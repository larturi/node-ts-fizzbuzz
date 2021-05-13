const helloworld = (n: number, h: number, w: number) => {

    if (n % h === 0 && n % w === 0)
        return "HelloWorld";
    else if (n % h === 0)
        return "Hello";
    else if (n % w === 0)
        return "World";
    else
        return n;
    
}

export default helloworld;

