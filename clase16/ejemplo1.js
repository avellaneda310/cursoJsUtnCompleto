const items = document.getElementsByClassName('item');

function cambiarVisibilidad(numItem) {
    const item = items[numItem];

    if (item.style.visibility == '') {
        item.style.visibility = 'hidden';// visibility  es propiedad de css y sirve para ocultar
    } else {
        item.style.visibility = '';
    }
};

function cambiarDisplay(numItem) {
    const item = items[numItem];

    if (item.style.display == '') {
        item.style.display = 'none';// cambia como el anterior pero ocupa el espacio del que desaparece
    } else {
        item.style.display = '';
    }
}