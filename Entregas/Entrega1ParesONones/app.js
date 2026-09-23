let saldoActual = 500;
let apuestaConfirmada = 0;
let victorias = 0;
let dineroObtenido = 0;

const saldo = document.querySelector("#saldo");
const contadorVictorias = document.querySelector("#victorias");
const contadorDinero = document.querySelector("#dinero-obtenido");
const apuesta = document.querySelector("#apuesta");
const confirmarApuesta = document.querySelector("#confirmar-apuesta");
const eleccion = document.querySelector("#eleccion");
const jugar = document.querySelector("#jugar");
const mensaje = document.querySelector("#mensaje");

confirmarApuesta.addEventListener("click", () => {
	const cantidad = Number(apuesta.value);

    // importante comprobar que si no le queda dinero que no pueda recuperarlo
	if (Number.isNaN(cantidad) || cantidad <= 0) {
		mensaje.textContent = "Introduce una apuesta válida dentro de tu saldo.";
        
		return;
	}

    if(saldoActual < -100){
            mensaje.textContent = "No te queda dinero para darnos.";
            return;
        }

	apuestaConfirmada = cantidad;
	mensaje.textContent = `Apuesta confirmada: ${apuestaConfirmada.toFixed(2)} €. Ahora puedes jugar.`;
});

jugar.addEventListener("click", () => {
	const dadoJugador = Math.floor(Math.random() * 6);
	const dadoCasa = Math.floor(Math.random() * 6);
	const suma = dadoJugador + dadoCasa;
    // comprobacion se es par o no
	const resultado = suma % 2 === 0 ? "pares" : "nones";

	if (apuestaConfirmada === 0) {
		mensaje.textContent = "Confirma primero una apuesta.";
		return;
	}

    // comprobacion resultado solo añadir el dinero obtenido no el perdido
	const hasAcertado = resultado === eleccion.value;
	if (hasAcertado) {
		saldoActual += apuestaConfirmada;
		victorias += 1;
		dineroObtenido += apuestaConfirmada;
		contadorVictorias.textContent = victorias;
		contadorDinero.textContent = `${dineroObtenido.toFixed(2).replace(".", ",")} €`;
	} else {
		saldoActual -= apuestaConfirmada;
	}
	saldo.textContent = `${saldoActual.toFixed(2).replace(".", ",")} €`;

    // reset
	mensaje.textContent = `Tu dado: ${dadoJugador}. Dado de la casa: ${dadoCasa}. Suma: ${suma}. Resultado: ${resultado}. ${hasAcertado ? "Has ganado" : "Has perdido"} ${apuestaConfirmada.toFixed(2)} €.`;
	apuestaConfirmada = 0;
});
