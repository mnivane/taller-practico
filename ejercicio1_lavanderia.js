const readline = require('readline');

const costoPorHora = 5000;
let acumuladorIngresos = 0;
let contadorDescuentos = 0;
let clientesProcesados = 0;

rl.question("¿Cuántos clientes va a registrar hoy? ", function(cantidadClientes) {

    cantidadClientes = parseInt(cantidadClientes);

    function registrar() {

    if (clientesProcesados < cantidadClientes) {

    rl.question("Nombre del cliente: ", function(nombre) {

    rl.question("Horas de alquiler: ", function(horas) {

    horas = parseInt(horas);

    let subtotal = horas * costoPorHora;
    let descuento = (horas > 12) ? subtotal * 0.30 : 0;
    let total = subtotal - descuento;

    if (descuento > 0) {
    contadorDescuentos++;
    }

    acumuladorIngresos += total;

    console.log(`\n--- CLIENTE ${clientesProcesados + 1}: ${nombre} ---`);
    console.log(`Horas alquiladas: ${horas}`);
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Descuento (30%): $${descuento} — ${(descuento > 0) ? "CON DESCUENTO" : "SIN DESCUENTO"}`);
    console.log(`Total a pagar: $${total}\n`);

    clientesProcesados++;
    registrar();
    })
    });

    } else {

    console.log("=== RESUMEN DEL DÍA ===");
    console.log(`Clientes atendidos: ${cantidadClientes}`);
    console.log(`Ingreso total: $${acumuladorIngresos}`);
    console.log(`Clientes con descuento: ${contadorDescuentos}`);

    rl.close();
   }
}

    registrar();
});