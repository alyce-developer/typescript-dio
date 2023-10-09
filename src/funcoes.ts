// funções
function addNumber(x: number, y: number){
    return x + y;
};

let soma: number = addNumber(10, 5);

console.log(soma);

// -----!!-----
function addToHello(name: string): string {
    return `Hello, ${name}`;
};

console.log(addToHello("Alyce!"));

// -------!!-----

// funções assincronas
async function getDatabase(id: number): Promise<number | string> {
    return "alyce";
};
