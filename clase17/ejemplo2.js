function ocultarMensaje(){
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'none';//style la vincula display que none hace que desaparezca
};

setTimeout(ocultarMensaje, 5000);
// crea una ventana y luego desaparece, ejemplo: cuando me logueo me dice vienvenido y se va

// se pueden sumar los dos settimeout con setinterval, aparece y desaparece hasta que se va definitivamente