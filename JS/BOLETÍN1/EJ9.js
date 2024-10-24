let numero = 3;
let cadena = "14";

//Suma entre ambos
let resultado = numero + cadena;
console.log(resultado);
/*En este caso lo que ocurre es que la variable numero (5) se convierte en una cadena, la cual
en la suma se concatena con la variable cadena (14) y el resultado es la concatenación de ambas*/

//Suma numérica
let resultadoNumerico = numero + Number(cadena);
console.log(resultadoNumerico);
/*En este otro caso, el resultado entre la suma de ambas es realmente la suma entre ambos números
ya que se ha usado Number(cadena) para que Javascript detecte que es un número y no una cadena.*/