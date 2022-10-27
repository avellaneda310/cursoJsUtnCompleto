const empleados = [
    {nombre: 'Flavia', trabajo: 'desarrollador'},
    {nombre: 'matias', trabajo: 'abogado'},
    {nombre: 'flor', trabajo: 'contador'},
    {nombre: 'oli', trabajo: 'desarrollador'},
    {nombre: 'lola', trabajo: 'desarrollador'}
];

const desarrolladores = empleados.filter(empleado => empleado.trabajo == 'desarrollador');

const noDesarrolladores = empleados.filter(empleado => empleado.trabajo !== 'desarrollador');

console.log(desarrolladores);
console.log(noDesarrolladores);