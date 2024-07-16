let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste al Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor');
            } else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                } 
                intentos++;
                limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    }

    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumeroSorteados);
        // si ya se soltearon todos los numeros
        if (listaNumeroSorteados.length == numeroGenerado){
            asignarTextoElemento('p', 'Se Asignaron todos los numeros posibles')

        } else {
        // Si el numero generado esta incluaido en la lista 
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

        }
     }
    

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Secreto Adivina el N°');
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
    
function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar el Número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
// este es




