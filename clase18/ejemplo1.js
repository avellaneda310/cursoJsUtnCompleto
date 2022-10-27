const datosUsuarios = [
    {
        nombre: 'Flavia', password: '123456'
    },
    {
        nombre: 'Matias', password: '654321'
    },
    {
        nombre: 'Flor', password: '1233654'
    },
    {
        nombre: 'Oli', password: '321456'
    }

];

const soloPassword = datosUsuarios.map(function(p){
    return p.password;
});

console.log(soloPassword);