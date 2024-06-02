// este comando implementa uma biblioteca js para captar o dado inserido no console (readline)
const readline = require('readline-sync');

// readline.question = Solicitar o número de alimentos consumidos  // parseInt = converte a string para number  
let numeroDeAlimentos = parseInt(readline.question("Quantos alimentos voce consumiu hoje? "));

// Variável para armazenar o total de calorias 
let totalCalorias = 0;

// Limite diário de calorias
const limiteCalorias = 2000;

/*
let contador = 0;

while (contador < numeroDeAlimentos) {
    let nomeAlimento = readline.question("Digite o nome do alimento " + (i + 1) + ": ");
    let caloriasAlimento = parseInt(readline.question("Digite a quantidade de calorias do " + nomeAlimento + ": "));
    totalCalorias += caloriasAlimento;
    contador = contador++;
}
*/

// for e divido em 3 partes por ; a primeira parte vai armazenar a variavel que vai usar no for, a segunda parte vai ser a condicao do for, terceira parte o que acontece coma a variavel depois do for 
for (let i = 0; i < numeroDeAlimentos; i++) {

    // Solicitar o nome do alimento (só para referência, não precisa armazenar)
    let nomeAlimento = readline.question("Digite o nome do alimento " + (i + 1) + ": ");
    
    // Solicitar a quantidade de calorias do alimento
    let caloriasAlimento = parseInt(readline.question("Digite a quantidade de calorias do " + nomeAlimento + ": "));

    // Adicionar as calorias do alimento ao total (+= soma o valor de caloriasAlimento no totalCalorias)
    totalCalorias += caloriasAlimento;
}   // o for inteiro vai repetir de acordo com a condiçao da linha 15

// Exibir o total de calorias consumidas 
console.log("O total de calorias consumidas é " + totalCalorias + " calorias");

// Verificar se o total de calorias está dentro do limite diário
if (totalCalorias <= limiteCalorias) {
    console.log("Você está dentro do limite diário de calorias.");
} else {
    console.log("Você excedeu o limite diário de calorias.");
}

// para alterar pro switch, precisa modificar um pouco a lógica, pois o switch normalmente não trabalha diretamente com condições booleanas, teria que ser com case