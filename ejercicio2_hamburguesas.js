const { parse } = require('node:path');

const prompt = require('prompt-sync')();

let opcion;
let cantidadCombo;
let precioCombo;
let subtotal;

let totalCuenta = 0;
let totalCombos = 0;

let contadorCombo1 = 0;
let contadorCombo2 = 0;
let contadorCombo3 = 0;

do {

    console.log("=== BURGER PALACE ===");
    console.log("1. Clásica  (hamburguesa sencilla + papas + gaseosa) - 15000");
    console.log("2. Doble Poder (hamburguesa doble + papas grandes + gaseosa) - 22000");
    console.log ("3. Mega Fest  (hamburguesa triple + papas + malteada + postre) - 35000 ");
    console.log("4. Finalizar pedido");

    opcion = parseInt(prompt("Seleccione combo: "));

    if (opcion === 1) {
        precioCombo = 15000;

}
    else if (opcion === 2) {
        precioCombo = 22000;
    }
    else if (opcion === 3) {
        precioCombo = 35000;
    }
    else if (opcion === 4) {
        break;
    }
    else {
        console.log("Opción no válida. Intente nuevamente.");
        continue;
    }

    cantidadCombo = parseInt(prompt("Cantidad: "));
    subtotal = precioCombo * cantidadCombo;
    totalCuenta += subtotal;
    totalCombos += cantidadCombo;

    if (opcion === 1) {
        contadorCombo1 += cantidadCombo;
    }
    else if (opcion === 2) {
        contadorCombo2 += cantidadCombo;
    }
    else if (opcion === 3) {
        contadorCombo3 += cantidadCombo;
    }

    console.log("Subtotal: $" + subtotal);
    console.log("Total acumulado: $" + totalCuenta);

} while (opcion !== 4);

console.log("\n=== CUENTA FINAL ===");
console.log("Combos Clásica: " + contadorCombo1);
console.log("Combos Doble Poder: " + contadorCombo2);
console.log("Combos Mega Fest: " + contadorCombo3);
console.log("Total combos: " + totalCombos);
console.log("TOTAL A PAGAR: $" + totalCuenta);