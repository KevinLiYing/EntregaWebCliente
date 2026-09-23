let secreto = Math.floor(Math.random() * 100) + 1;

const intento = document.querySelector("#intento");
const boton = document.querySelector("#probar");
const nuevaProfecia = document.querySelector("#nueva-profecia");
const respuesta = document.querySelector("#respuesta");
const marcador = document.querySelector("#marcador");
const historial = document.querySelector("#historial");
let intentos = 0;
let intentosRealizados = [];

boton.addEventListener("click", () => {
	const numeroRecibido = Number(intento.value);

	if (intento.value === "" || Number.isNaN(numeroRecibido) || numeroRecibido < 1 || numeroRecibido > 100) {
		respuesta.textContent = "Eso no es un número válido";
		return;
	}

	intentos += 1;
	intentosRealizados.push(numeroRecibido);
	marcador.textContent = `Intentos: ${intentos}`;
	historial.textContent = `Has probado: ${intentosRealizados.join(", ")}`;

	if (numeroRecibido === secreto) {
		respuesta.textContent = `Correcto. Lo has conseguido en ${intentos} intentos.`;
		boton.disabled = true;
	} else if (numeroRecibido < secreto) {
		respuesta.textContent = "Mi número es mayor";
	} else {
		respuesta.textContent = "Mi número es menor";
	}
});

nuevaProfecia.addEventListener("click", () => {
	secreto = Math.floor(Math.random() * 100) + 1;
	intentos = 0;
	intentosRealizados = [];
	intento.value = "";
	respuesta.textContent = "El oráculo espera...";
	marcador.textContent = "Intentos: 0";
	historial.textContent = "";
	boton.disabled = false;
});