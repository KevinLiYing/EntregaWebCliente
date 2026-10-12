import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setContador((valor) => valor + 1)}>
        Contador: {contador}
        {contador > 20 ? (
          <span> They love me</span>
        ) : contador > 5 ? (
          <span> Hay sonido en el aire</span>
        ) : null}
      </button>

      <button type="button" onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </div>
  )
}