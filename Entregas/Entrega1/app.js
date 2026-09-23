const secreto = Math.floor(Math.random() * 100) + 1;
console.log("(psst... el secreto es", secreto, "— quita esta línea al acabar)");

const intento = document.querySelector("#intento");
const probar = document.querySelector("#probar");
const respuesta = document.querySelector("#respuesta");

probar.addEventListener("click", () => {
	const numeroRecibido = Number(intento.value);
	respuesta.textContent = `Has dicho: ${numeroRecibido}`;
});