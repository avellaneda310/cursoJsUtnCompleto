const nombre = 'Flavia';
const edad = 41;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años de edad`);

const edad1 = 18;
const edad2 = 30;

const mensaje1 = `La cuota para ${edad1} es ${edad1 >= 21 ? 500 : 300}`;// es un operador ternario
const mensaje2 = `La cuota para ${edad2} es ${edad2 >= 21 ? 500 : 300}`;// variable condicion ? verdadero :falso


console.log(mensaje1);
console.log(mensaje2);