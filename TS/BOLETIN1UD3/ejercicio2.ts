let expReg = /[0-9]/;

let expReg2 = new RegExp("[0-9]");

console.log("Prueba 1 " + expReg.test("Hola"));
console.log("Prueba 2 " + expReg2.test("Hola"));
console.log("Prueba 3 " + expReg.test("1"));
console.log("Prueba 4 " + expReg2.test("1"));
console.log("Prueba 5 " + expReg.test("123"));
console.log("Prueba 6 " + expReg2.test("123"));
console.log("Prueba 7 " + expReg.test("abc123"));
console.log("Prueba 8 " + expReg2.test("abc123"));
