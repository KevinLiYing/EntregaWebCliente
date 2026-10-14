# PokeAPI

Misión M2

## Cómo probarlo
Dentro de mi-app utilizar 'npm run dev' para correr el servidor. Hacerle el click al enlace localhost y utilizar la página web. En la página web se verán los pokemos de kanto y hay un buscador en el que puedes buscar el que quieras. La página indica el tipo, nombre y puntos de estadísticas totales del pokemon.

## Uso de IA 
Utilice la IA para la estructura base del proyecto y para la implementación de la llamada fetch a la API.
También lo he utilizado para el css.

Ejemplo: Completame la estructura que debería tener el proyecto para coger información de pokemos de una PokeAPI.

EJemplo Hazme la llamada fetch a la API y une todo el proyecto con esa llamada.

## Autopsia
1. He separado las interfaces en varios componentes de la app en vez de implementarlo todo en la app.jsx. Así, todo tiene un comportamiento especifico y es más fácil de leer.

2. Al recorrer los Pokémon utilizo pokemon.id como key en vez de utilizar el índice del array como dictado en clase que debería ser.