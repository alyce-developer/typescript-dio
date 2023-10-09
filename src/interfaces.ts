// interface X type

// type
type robot = {
    id: number | string;
    name: string;
};

//interface (é o mais comum. é um contrato, e quem herdar esse contrato é obrigado a segui-lo fielmente)
interface robot2 {
    id: number,
    name: string,
    sayHello(): string,
};

const bot1: robot = {
    id: 12,
    name: "triste",
};

const bot2: robot2 = {
    id: 12,
    name: "demais",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

// console.log(bot1);
// console.log(bot2);

// -----!!----- trabalhando com class

class Pessoa implements robot {
    id: string | number;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id
        this.name = name
    };

    sayHello(): string {
        return `hello motherfucker ${this.name}`;
    };
};

const p = new Pessoa(1, "i'm alyce");
console.log(p.sayHello());
