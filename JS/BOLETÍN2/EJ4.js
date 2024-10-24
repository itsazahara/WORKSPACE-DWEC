var letras = "T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E.";

var dni = prompt("Introduce el número de tu DNI sin letra: ");

var posicion = dni%23;

alert("Tu dni es: " + dni + letras[posicion]);