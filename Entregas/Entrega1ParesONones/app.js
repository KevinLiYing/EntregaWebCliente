const jugar = document.querySelector("#jugar");
const mensaje = document.querySelector("#mensaje");

jugar.addEventListener("click", () => {
	const dadoJugador = Math.floor(Math.random() * 6);
	const dadoCasa = Math.floor(Math.random() * 6);
	const suma = dadoJugador + dadoCasa;

	mensaje.textContent = `Tu dado: ${dadoJugador}. Dado de la casa: ${dadoCasa}. Suma: ${suma}.`;
});
