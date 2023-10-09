// decorators
// é um decorador que é chamado sempre quando você o coloca em cima de uma classe
// pra decorar no código, usa-se o @ seguido pelo nome do método/função.
// e pra habilitar o decorators é preciso ir no tsconfig e descomentar o experimentalDecorators
// @ExibirNome quando é executado, ele vai chamar o decorators

function ExibirNome(target: any) {
    console.log(target);
};

@ExibirNome
class Funcionario { }


// ------!!-------

// quero documentar qual a versão de uma API:


function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "alyce" });
    };
}

@apiVersion("2.0")
class Api{
    name: any;
}

const api = new Api();
console.log(api.__version);
console.log(api.__name);





// ---------!!---------

// factory é um conceito onde uma função retorna outra função;
// @apiVersion é a função decorada;

// "traduçao":
// linha 21: dentro da função target, ou classe do tipo  any, vamos associar um objeto(que é o target), vamos pegar toda a estrutura dele(o prototype), e após isso vamos criar uma nova propriedade fazendo o uso de dois _ _(exemplo: __version);
// depois criamos uma nova class (linha 26);
// e acima na class Api{}, é onde passamos o decorator, e dentro dele aceita um parâmetro, que nesse caso é a versão do tipo string (exemplo: "2.0");
// em seguida criamos uma const api, onde vamos criar uma nova instância de api (linha 28);
// por fim vamos chamar com o console.log a nova api juntamente com a propriedade __version.

// obs: a class nova só vai existir quando o processo do typescript conseguir interpretar a linha 21, através do servidor local > ts node dev < que vai transpilar o código;

// o que fizemos foi: injetar uma propriedade dinamicamente, ou seja, estamos adicionando uma coisa que não existia originalmente na class;

// geralmente as propriedades injetadas serão utilizadas por debaixo dos panos para outro programador fazer alguma outra coisa
