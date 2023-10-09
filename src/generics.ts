// generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [10]);
const stgArray = concatArray<string[]>(["alyce", "is"], ["sad again"])

console.log(numArray);
console.log(stgArray);


// os três pontinhos '...' é o operador de spread, usa-se para espalhar os itens dentro do função e transformar tudo em um unico array

// <T> é uma notação generica que quando indicado na função pode representar qualquer tipo, não retorna mais só any e sim retorna o que eu mandar pra ele (string, number, boolean...)

// generics <T> serve pra deixar em aberto o tipo que eu vou definir só depois, o passando como tipo do parâmetro
