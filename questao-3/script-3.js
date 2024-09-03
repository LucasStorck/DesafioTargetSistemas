const fs = require('fs');

const fonteDeDados = fs.readFileSync('dados.json');
const dados = JSON.parse(fonteDeDados);

const diaComFaturamento = dados.filter(dia => dia.valor > 0);
const menorFaturamento = Math.min(...diaComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diaComFaturamento.map(dia => dia.valor));

const totalFaturamento = diaComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const media = totalFaturamento / diaComFaturamento.length;

const acimaDaMedia = diaComFaturamento.filter(dia => dia.valor > media).length;

console.log(`Menor Faturamento: ${menorFaturamento}`);
console.log(`Maior Faturamento: ${maiorFaturamento}`);
console.log(`Faturamentos Acima da Média: ${acimaDaMedia}`);