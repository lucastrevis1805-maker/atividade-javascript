const nome = 'Lucas';
const idade = 17;
const cidade = 'Campinas';

console.log("Olá meu nome é", nome);
console.log("Eu tenho", idade, "anos");
console.log("E moro em", cidade);

console.log("===================================")

// const anoDeNascimento = 2009;
// anoDeNascimento = 2008;

// console.log(anoDeNascimento);
// O erro ocorre devido a uma tentativa de alteração em uma variável de tipo constante.

let idadeAtual = 17;
idadeAtual = 18;

console.log("Teste com a variável let:", idadeAtual);

console.log("===================================");

const valorJantar = 350;
const taxaDeServico = 0.10;

const gorjeta = valorJantar * taxaDeServico;

const total = (valorJantar + gorjeta) / 3;

console.log("Total para cada amigo:", total);

console.log("===================================");

let usuarioLogado = false;
console.log("Status inical do usuário:", usuarioLogado);

usuarioLogado = true;
console.log("Status atualizado:", usuarioLogado);

console.log("===================================");

let estoqueCamisetas = 50;
estoqueCamisetas = estoqueCamisetas - 15;
estoqueCamisetas = estoqueCamisetas - 12;

console.log("Quantidade de camisetas disponíveis:", estoqueCamisetas);

console.log("===================================");

const primeiroNome = 'Lucas';
const nomeDoMeio = 'Trevisan';
const sobrenome = 'da Silva';

const nomeCompleto = primeiroNome + " " + nomeDoMeio + " " + sobrenome;

console.log("Nome completo:", nomeCompleto);

console.log("===================================");

const largura = 45;
const comprimento = 67;

const area = largura * comprimento;

console.log("Área do terreno:", area, "metros.");

console.log("===================================");

const produto = 'lapis';
let precoProduto = 1.50;

const frete = false;

const desconto = 0.10;
const valorDescontado = precoProduto - desconto * precoProduto;

console.log("Produto:", produto, "Preço com desconto:", valorDescontado, "Status do frete:", frete);
