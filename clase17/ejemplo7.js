const frutas = ['paltas', 'naranjas', 'manzanas', 'anana', 'bananas'];

console.log(frutas);
console.log(frutas.sort());

const numeros = [78,10,7,1,2];

console.log(numeros.sort());// esto ordena por ell primer numero

const num = numeros.sort(function(a,b){// ordena de menor a mayor

    return a-b;
});
console.log(num);

const num2 = numeros.sort(function(a,b){// ordena de mayor a menor
    
    return b-a;
});
console.log(num2);

const palabras = ['flavia','pablo', 'abeja', 'perro', 'animal'];

const palab = palabras.sort();// orden a de la a -z

console.log(palab);

console.log(palabras.sort().reverse());// ordena al reves z - a

const palabs = palabras.sort(function(b,a){
    if(b>a)return -1;
    return 0;
});

console.log(palabs);// lo mismo pero de otra forma