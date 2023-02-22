let lunghezzaViaggio = prompt("Quanti km percorrerà?");

let etaPasseggero = prompt("Quanti anni ha?");

let prezzoBiglietto = parseFloat(lunghezzaViaggio) * 0.21;

if (etaPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
}
else if (etaPasseggero > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}

document.writeln("Il prezzo del biglietto è: " + prezzoBiglietto.toFixed(2));