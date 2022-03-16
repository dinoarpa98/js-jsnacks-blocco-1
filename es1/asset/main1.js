let primoNumero = parseInt(prompt("Primo Numero"));
let secondoNumero = parseInt(prompt("Secondo numero"));


let risultato = document.getElementById("greatest");



    {if (primoNumero > secondoNumero) {

        risultato.innerHTML = `${primoNumero} maggiore`;

    } else if (primoNumero < secondoNumero) {
        risultato.innerHTML = `${secondoNumero} maggiore`;

    } else {
        risultato.innerHTML = `sono uguali`;

    }

}

