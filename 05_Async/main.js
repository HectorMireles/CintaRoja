function getUsuarios(callback){
    const datos = [
        {nombre: 'Mali', edad: '21'},
        {nombre: 'Raul', edad: '25'},
        {nombre: 'Edwin', edad: '27'},
    ];
    setTimeout(function(){
        callback(datos,'Todo furula.');
        console.log('Esto es después del callback')
    }, 3000);
}

console.log('Inicio del programa, Hola a todos');

getUsuarios(function(data, texto){
    console.log(data);
    console.log(texto);
    console.log('Dentro del callback');
});

