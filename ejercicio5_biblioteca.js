const prompt = require('prompt-sync')();

let cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios devuelven libros? "));
let multaDiaria = 1500;
let multaAdicional = 10000;

let totalMultas = 0;
let totalLibros = 0;
let librosConRetraso = 0;
let librosPuntuales = 0;

for (let i = 1; i <= cantidadUsuarios; i++) {
    console.log(`\n--- USUARIO ${i} ---`);

    let nombreUsuario = prompt("Nombre: ");
    let cantidadLibros = parseInt(prompt("Cantidad de libros (máximo 3): "));

    while (cantidadLibros > 3 || cantidadLibros <= 0) {
        cantidadLibros = parseInt(prompt("Error. Máximo 3 libros. Ingrese nuevamente: "));

    }

    let multasUsuario = 0;

    for (let j = 1; j <= cantidadLibros; j++) {
        let diasPrestamo = parseInt(prompt("Libro " + j + " - Días de préstamo: "));
        let diasRetraso = 0;
        let multaLibro = 0;

        if (diasPrestamo > 7) {
            diasRetraso = diasPrestamo - 7;
    }
        if (diasRetraso === 0) {
            multaLibro = 0; 
            librosPuntuales++;

        } else if (diasRetraso <= 15) {
            multaLibro = diasRetraso * multaDiaria;
            librosConRetraso++;

        } else {
            multaLibro = (diasRetraso * multaDiaria) + multaAdicional;
            librosConRetraso++;
        }

        console.log("Libro " + j + ": " + diasPrestamo + " días - Retraso: " + diasRetraso + " - Multa: $" + multaLibro); 

        multasUsuario += multaLibro;
        totalLibros++;
    }

    let estadoUsuario = (multasUsuario === 0) ? "PUNTUAL" : "CON RETRASO";
    console.log("Multa total usuario: $" + multasUsuario + " — " + estadoUsuario);
    totalMultas += multasUsuario;
}

console.log("\n=== RESUMEN BIBLIOTECH ===");
console.log("Usuarios atendidos: " + cantidadUsuarios);
console.log("Total libros: " + totalLibros);
console.log("Libros puntuales: " + librosPuntuales);
console.log("Libros con retraso: " + librosConRetraso);
console.log("MULTAS RECAUDADAS: $" + totalMultas);