const myPenguin = {
    character: 'Gunter',
    origin: 'Adventure Time',
    notes: 'The penguin of the ice king who likes to steal things',
};

console.log (myPenguin);
console.log ("Hola, soy un pingüino y mi nombre es",myPenguin.character);

myPenguin.puedeVolar = false;

myPenguin.graznar = function graznar() {
    alert('kaww kaww!!')
};

myPenguin.graznar();