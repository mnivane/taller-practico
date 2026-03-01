const prompt = require('prompt-sync')();

let opcionMenu = 0;

let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;

let ingresosTotal = 0;
let sumaHoras = 0;
let totalVehiculos = 0;

while (opcionMenu !== 2) {

    console.log("\n=== PARQUIFACIL ===");
    console.log("1. Registrar vehículo");
    console.log("2. Finalizar jornada");
    opcionMenu = parseInt(prompt("Seleccione una opción: "));

    if (opcionMenu === 1) {

        let tipoVehiculo = parseInt(prompt("Tipo de vehículo (1. Moto, 2. Carro, 3. Camioneta): "));
        let horasPermanencia = parseInt(prompt("Horas de permanencia: "));

        let tarifa = 0;

        if (tipoVehiculo === 1) {
            tarifaHora = 2000;
            contMotos++;

        } else if (tipoVehiculo === 2) {
            tarifaHora = 4000;
            contCarros++;

        } else if (tipoVehiculo === 3) {
            tarifaHora = 6000;
            contCamionetas++;
        } else {
            console.log("Tipo de vehículo no válido.");
            continue;
        }

        let costoTotal = tarifaHora * horasPermanencia;
        let descuento = 0; 

        if (horasPermanencia > 8) {
            descuento = costoTotal * 0.20;
        }
        let totalPagar = costoTotal - descuento;

        let tipoTarifa = (horasPermanencia >8) ? "TARIFA DÍA COMPLETO (20%)" : "TARIFA POR HORA";
        console.log("\n--- VEHÍCULO REGISTRADO ---");
        console.log("Horas: " + horasPermanencia);
        console.log("Subtotal: $" + costoTotal);
        console.log("Descuento: $" + descuento + " — " + tipoTarifa);
        console.log("Total: $" + totalPagar);

        ingresosTotal += totalPagar;
        sumaHoras += horasPermanencia;
        totalVehiculos++;

    } else if (opcionMenu === 2) {
        console.log("Opción no válida")
    }

}

let promedioHoras = 0;
if (totalVehiculos > 0) {
    promedioHoras = sumaHoras / totalVehiculos;
}

console.log("\n=== CIERRE DE JORNADA ===");
console.log("Motos: " + contMotos);
console.log("Carros: " + contCarros);
console.log("Camionetas: " + contCamionetas);
console.log("Total vehículos: " + totalVehiculos);
console.log("Ingreso total: $" + ingresosTotal);
console.log("Promedio permanencia: " + promedioHoras + " horas");