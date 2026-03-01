const prompt = require('prompt-sync')();

let cantidadPersonas    = parseInt(prompt("¿Cuántas personas va a registrar? "));
let salarioMinimo = 1300000;

let contBeneficiarios60_80 = 0;
let contBeneficiariosMayor80 = 0;
let contNoAplica = 0;

let presupuestoTotal = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
    console.log(`\n--- PERSONA ${i} ---`);
    let nombre = prompt("Nombre completo: ");
    let edad = parseInt(prompt("Edad: "));

    let porcentajeBeneficio = 0;
    let subsidio = 0;
    let categoria = "";

    if (edad >= 60 && edad <= 80) {
        porcentaje = 0.12;
        subsidio = salarioMinimo * porcentaje;
        contBeneficiarios60_80++;
        
    } 
    else if (edad > 80) {
        porcentaje = 0.15;
        subsidio = salarioMinimo * porcentaje;
        contBeneficiariosMayor80++;

    } else {
        contNoAplica++;
    }

    categoria = (edad > 80) ? "Adulto Mayor Senior" : "Adulto Mayor";

    if (edad < 60) {
        console.log("No aplica")
    } else {
        console.log("Nombre: " + nombre);
        console.log("Edad: " + edad + " años");
        console.log("Categoría: " + categoria);
        console.log("Subsidio (" + (porcentaje * 100) + "%): $" + subsidio);

}
    
    presupuestoTotal += subsidio;
}

console.log("\n=== INFORME ALCALDIA DE ARMENIA ===");
console.log("Total registrados:" + cantidadPersonas);
console.log("Beneficiarios entre 60 y 80 años: " + contBeneficiarios60_80);
console.log("Beneficiarios mayores de 80 años: " + contBeneficiariosMayor80);
console.log("No aplican: " + contNoAplica);
console.log("PRESUPUESTO TOTAL: $" + presupuestoTotal);