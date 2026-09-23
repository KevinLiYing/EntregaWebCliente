const secreto = Math.floor(Math.random() * 100) + 1;

const intento = document.querySelector("#intento");
const boton = document.querySelector("#probar");
const respuesta = document.querySelector("#respuesta");
const marcador = document.querySelector("#marcador");
let intentos = 0;

boton.addEventListener("click", () => {
	const numeroRecibido = Number(intento.value);

	if (intento.value === "" || Number.isNaN(numeroRecibido) || numeroRecibido < 1 || numeroRecibido > 100) {
		respuesta.textContent = "Eso no es un número válido";
		return;
	}

	intentos += 1;
	marcador.textContent = `Intentos: ${intentos}`;

	if (numeroRecibido === secreto) {
		respuesta.textContent = `Correcto. Lo has conseguido en ${intentos} intentos.`;
		boton.disabled = true;
	} else if (numeroRecibido < secreto) {
		respuesta.textContent = "Mi número es mayor";
	} else {
		respuesta.textContent = "Mi número es menor";
	}
});