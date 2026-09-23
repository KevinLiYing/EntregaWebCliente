const secreto = Math.floor(Math.random() * 100) + 1;
console.log("(psst... el secreto es", secreto, "— quita esta línea al acabar)");

const intento = document.querySelector("#intento");
const probar = document.querySelector("#probar");
const respuesta = document.querySelector("#respuesta");

probar.addEventListener("click", () => {
	const numeroRecibido = Number(intento.value);

	if (intento.value === "" || Number.isNaN(numeroRecibido) || numeroRecibido < 1 || numeroRecibido > 100) {
		respuesta.textContent = "Eso no es un número válido";
		return;
	}

	if (numeroRecibido === secreto) {
		respuesta.textContent = "¡Correcto!";
	} else if (numeroRecibido < secreto) {
		respuesta.textContent = "Mi número es mayor";
	} else {
		respuesta.textContent = "Mi número es menor";
	}
});