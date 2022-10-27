const alternar = document.getElementsByClassName('alternar')[0];// le agrego el 0 por que es elementS por que busca mas alementos
alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo');
})

// classList: representa una lista de clases asignada al elemento
// toggle: cambiar una clase
// remove: remueve una o mas clases