let playas = ["maspalomas", "caleta", "victoria", "chipiona", "matalacañas", "rota"];

//Bucle antiguo
for (let i = 0; i < playas.length - 1; i++) {
    if (i % 2 == 0) {
        console.log(playas[1]);
    }
}

//Bucle nuevo
playas.forEach((playa, index) => {
    if (index % 2 == 0) {
        console.log(playa);
    }
})

//Bucle más nuevo
console.log(playas.filter((playa, index) =>
    index % 2 == 0
))