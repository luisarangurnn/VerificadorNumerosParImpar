const numero = prompt("Introuce un número para saber si es par o impar");


/*El primer if comprueba que sea par*/
if (numero % 2 === 0) {
    alert(`El número ${numero} es par`);
    console.log(`El número ${numero} es par`);
    
}
/*El segundo IF comprueba que sea impar, en caso que la primera vez
no sea un par*/
if (numero % 2 !== 0 && !isNaN(numero)) {
    alert(`El número ${numero} es impar`);
    console.log(`El número ${numero} es impar`); 
}
/*Con el ElSE nos aseguramos el tener introducido un número*/
else {
    alert(`No has introducido un número`);
    console.log(`No has introducido un número`);
}