const items = document.getElementsByClassName('items');

function cambiarVisibilidad (){
    const item = items[2];
    if(item.style.visibility ==0){
        item.style.visibility = 'hidden';
    }else{
        item.style.visibility = '';
    }
}
setInterval(cambiarVisibilidad, 500)// son medio segundo

// cada mediio segundo aparece y desaparece con si fuera una publicidad