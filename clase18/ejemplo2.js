const alumnos = [
    {nombre: 'Flavia', edad: 20},
    {nombre: 'Matias', edad: 4},
    {nombre: 'Olivia', edad: 6},
    {nombre: 'Flor', edad: 3},
    {nombre: 'Lola', edad: 8},
    {nombre: 'Juli', edad: 2}
];

const chicos = alumnos.filter(chico => chico.edad <= 4);

for(i = 0; i<chicos.length; i++){
    document.write(`<p> Niño:${chicos[i].nombre}, cuya edad es: ${chicos[i].edad} </p>`)
}

console.log(chicos)