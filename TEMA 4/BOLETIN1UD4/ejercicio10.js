const TAM = 15;
const DEL = 5;
let precios = new Array(TAM);

for (let i = 0; i < TAM; i++) {
    precios[i] = Math.round((Math.random() * 100));
}

console.log("Precios originales: " + precios);

//version normal
for (let i = 0; i < DEL; i++) {
    precios.pop();
}

console.log("Precios con: " + DEL + " eliminados");

//version slice
let preciosReducidos = precios.slice(0, precios.length - DEL);
console.log(preciosReducidos);

//version splice
precios.splice(precios.length - DEL, DEL);
console.log(precios);

precios.push(25.5, 99.0, 23.1, 31.1, 88.0);
console.log(precios);

function buscar_precio(precio_a_buscar) {
    if (precios.indexOf(precio_a_buscar) < 0) {
        console.log("No se encuentra en el array.");
    } else {
        console.log("Se encuentra dentro del array.");
    }
}

buscar_precio(99.0);
buscar_precio(25.0);
buscar_precio(99.1);