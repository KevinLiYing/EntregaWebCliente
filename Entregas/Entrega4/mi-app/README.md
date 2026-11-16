# PokeAPI

Misión M3

## Cómo probarlo
Dentro de mi-app utilizar 'npm run dev' para correr el servidor. Hacerle el click al enlace localhost y utilizar la página web. En la página web se verán los pokemos de kanto y hay un buscador en el que puedes buscar el que quieras. La página indica el tipo, nombre y puntos de estadísticas totales del pokemon.

## Uso de IA 
Utilice la IA para cambiar los componentes y añadir props a ellos.

Ejemplo: Vamos a ir componente por componente añadiendo props

Ejemplo: Enlazame los cambios de components a la app para poder probarlo.

## Autopsia
1. He separado las interfaces en varios componentes de la app en vez de implementarlo todo en la app.jsx. Así, todo tiene un comportamiento especifico y es más fácil de leer. Los componentes ahora tienen props para que sean más flexibles con su comportamiento y sea más fácil de modificar.

2. Al recorrer los Pokémon utilizo pokemon.id como key en vez de utilizar el índice del array como dictado en clase que debería ser.

3. La estructura de carpetas tenemos los componentes que son los visuales de la página, el services que conseguirá los datos de la api y los utils que serán funciones para filtrar, ordenar o buscar.