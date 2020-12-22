// Declara a variável sum
var sum = 0;
// Para cada elemento na linha de comando, adiciona-se à sum a soma do valor anterior dela com o novo valor obtido.
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
// Imprime a soma
console.log(sum);