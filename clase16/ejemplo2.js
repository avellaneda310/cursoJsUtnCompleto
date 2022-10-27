const link = document.getElementById('link');

link.addEventListener('click', function(e){// es un evento para ir a un link o lo que sea
    e.preventDefault();// esta funcion frena ir ala pagina y pregunta si queres ir gracias al evento 'e'
    alert('Quisiste ir a: ' + e.currentTarget.href)// currentTarget toma la info del href.
    // si saco la e va directo a la pagina
})