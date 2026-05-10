let quantidadeDespesas;

// Validação com while
while (true) {
    quantidadeDespesas = Number(prompt("Quantas despesas deseja adicionar?"));

    if (quantidadeDespesas > 0) {
        break;
    }

    alert("Digite um número válido maior que 0.");
}

let salario = Number(prompt("Digite seu salário mensal:"));

let totalDespesas = 0;

// Repetição com for
for (let i = 1; i <= quantidadeDespesas; i++) {

    let despesa;

    // Validação da despesa
    while (true) {
        despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

        if (despesa >= 0) {
            break;
        }

        alert("Digite um valor válido.");
    }

    totalDespesas += despesa;
}

// Operações matemáticas
let saldoFinal = salario - totalDespesas;

// Decisão com if/else
if (saldoFinal > 0) {
    alert(`Você economizou R$ ${saldoFinal.toFixed(2)}`);
} else if (saldoFinal === 0) {
    alert("Você terminou o mês sem saldo.");
} else {
    alert(`Você ficou no negativo em R$ ${Math.abs(saldoFinal).toFixed(2)}`);
}

// Exibição no console
console.log("===== RESUMO FINANCEIRO =====");
console.log("Salário:", salario);
console.log("Total de despesas:", totalDespesas);
console.log("Saldo final:", saldoFinal);