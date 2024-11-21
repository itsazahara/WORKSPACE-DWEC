let edades = new Array(18, 16, 9, 23, 33, 45, 60, 71, 22, 40, 50, 21, 62, 47, 12);

let media = 0;

edades.filter(edad => (edad >= 18 && edad <= 50)).forEach((edad, index, array) => media += edad / array.length);

console.log("La edad media de clase es: " + Math.round(media));