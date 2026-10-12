import { Esclusa } from './components/Esclusa';
import { Ranking } from './components/Ranking';
import { Contador } from './components/Contador';
import './App.css';

const jugadores = [
  { id: 1, nombre: 'Ada Lovelace', puntos: 980 },
  { id: 2, nombre: 'Alan Turing', puntos: 875 },
  { id: 3, nombre: 'Grace Hopper', puntos: 790 },
  { id: 4, nombre: 'Linus Torvalds', puntos: 640 },
];

export default function App() {
  return (
    <main className="juego-app">
      <header className="juego-header">
        <p className="juego-header__tag">Centro de control</p>
        <h1>Desafío de la esclusa</h1>
        <p>Abre la compuerta, supera el reto y escala posiciones.</p>
      </header>
      <section className="juego-grid" aria-label="Estado de la partida">
        <Esclusa
          abierta={true}
          avisos={[
            'Presión estable en el compartimento.',
            'Acceso autorizado para la siguiente ronda.',
          ]}
        />
        <Ranking puntuacion={jugadores} />
      </section>

      <section className="juego-contador" aria-label="Contador de intentos">
        <Contador />
      </section>
    </main>
  )

}