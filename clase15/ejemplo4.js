function todosLosParrafos(){
    const allParrafos = document.getElementsByTagName('p'); // tambien puede ser querrySelectorAll();

    //console.log(allParrafos)

    const num = allParrafos.length;
    alert(`Hay ${num} elementos P dentro de este documento`);
    // alert('La cantidad de P es ' + allParrafos.length)
};

function parrafosCajaUno(){
    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName('p');
    //console.log(caja1);
    //console.log(caja1parrafos);

    const num = caja1parrafos.length;
    alert(`Hay ${num} elementos P dentro de este documento`);
}

function parrafosCajaDos(){
    //const caja2 = document.getElementById('caja2');
    //const caja2parrafos = caja2.getElementsByTagName('p');

    const caja2 = document.querySelectorAll('#caja2 p')
    console.log(caja2);

    const num = caja2.length;
    alert(`Hay ${num} elementos P dentro de este documento`);

};

//todosLosParrafos();
//parrafosCajaUno();
//parrafosCajaDos();
