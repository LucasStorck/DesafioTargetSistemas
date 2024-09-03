faturamento = { SP: 67836.43, RJ: 36768.66, MG: 36768.66, ES: 27165.48, Outros: 19849.53 };

soma = 0;

for (const i in faturamento) {
  soma += faturamento[i];
}

const porcemtagem = {};
for (const i in faturamento) {
  porcemtagem[i] = (faturamento[i] / soma * 100).toFixed(2);
}

for (const i in porcemtagem) {
  console.log(`${i}: ${porcemtagem[i]}%`);
}