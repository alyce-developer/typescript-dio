// váriavel do tipo objeto:
// usa quando a váriavél não tem uma forma pré-definida;
// não pode receber algum tipo fora do objeto que é criado com chaves '{}'
// dentro das chaves ele aceita qualquer tipo

// objeto - sem previsibilidade
let produto: object = {
    name: "alyce",
    cidade: "recife",
    idade: 24,
};

// objeto tipado - com previsibilidade (sheipado)
// conjunto de vários tipos, ou uma structure
type ProdutoLoja = {
    nome: string;
    preco: number,
    unidades: number,
};

let meuProduto: ProdutoLoja = {
    nome: "blusa",
    preco: 15.99,
    unidades: 20,
};

// -------!!-------
// primeiro exemplo das aulas utilizando o type e criando um objeto
type heroi = {
    name: string;
    vulgo: string;
}

function Objetos(pessoa: heroi){
    console.log(pessoa)
}

Objetos({
    name: "alyce",
    vulgo: "landia",
})
