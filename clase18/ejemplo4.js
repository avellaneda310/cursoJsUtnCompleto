function getNombreDiaPorMes(mes){
    if(Number.isNaN(mes)) return false;
    if(mes < 1 || mes > 12) return false;
    mes--; // asi mes10 es9 por quearranca de 0

    const data = [
        {nombre: 'enero', dias: 31},
        {nombre: 'febrero', dias: 28},
        {nombre: 'marzo', dias: 31},
        {nombre: 'abril', dias: 30},
        {nombre: 'mayo', dias: 31},
        {nombre: 'junio', dias: 30},
        {nombre: 'julio', dias: 31},
        {nombre: 'agosto', dias: 31},
        {nombre: 'septiembre', dias: 30},
        {nombre: 'octubre', dias: 31},
        {nombre: 'noviembre', dias: 30},
        {nombre: 'diciembre', dias: 31},
    ];

    return data[mes];
};

const numMes = parseInt(prompt('Ingrese el mes del año:', ''));
const resultado = getNombreDiaPorMes(numMes);

if(resultado){
    alert(`El mes de ${resultado.nombre} tiene ${resultado.dias} dias`)
}else{
    alert('mes invalido')
};