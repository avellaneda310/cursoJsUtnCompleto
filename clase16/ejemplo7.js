const cuadrado = document.getElementsByClassName('caja')[0];
const rojo= document.getElementById('rojo');
const borde = document.getElementById('borde');
const reset = document.getElementById('reset');

rojo.addEventListener('click', function(){
    cuadrado.classList.add('rojo');
});

borde.addEventListener('click', function(){
    cuadrado.classList.add('borde');// add agrega!!1
});

reset.addEventListener('click', function(){
    cuadrado.classList.remove('rojo', 'borde');// remove cambia todo de vuelta al principio
});