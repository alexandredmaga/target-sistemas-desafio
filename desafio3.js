/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

let faturamento = require('./faturamento.js')

//MENOR VALOR
console.log(`O menor valor de faturamento foi de: ${faturamento.menorValor().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

//MAIOR VALOR
console.log(`O maior valor de faturamento foi de: ${faturamento.maiorValor().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

//SUPERIOR A MEDIA MENSAL
console.log('\n')

faturamento.superiorMediaMensal()