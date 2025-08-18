/* Controla o fluxo da aplicação, importando os outros módulos
 * uSAR O MÓDULO INTERNO READLINI PARA:
 * - Perguntar ao Usuário qual valor deseja converter
 * - Perguntar se deseja converter para USD ou EUR
 * - Exibir o resultado
 * UTILIZAR CORRETAMENTE REQUIRE E module.exports.
 * Encerrar a aplicação quando o usuário digitar sair
 */

const readline = require('readline');
const ModuloConversor = require('./conversor');
const ModuloMensagens = require('./mensagens');

const rd = readline.createInterface({
    input: process.stderr,
    output: process.stdout,
})

console.log("Conversor de Moedas: ");
rd.question(ModuloMensagens.PerguntarValorConversao())


