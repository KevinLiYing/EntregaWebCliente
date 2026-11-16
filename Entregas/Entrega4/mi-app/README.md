# Hook y Zod

Misión M4 de Web Development I.

## Cómo probarlo
Aplicación React con un formulario de contacto validado mediante React Hook Form y Zod. Los contactos se cargan y registran mediante peticiones HTTP gestionadas con TanStack Query.

## Uso de IA 
Proponer la estructura inicial de carpetas.
Crear el esquema de validación con Zod.
Configurar TanStack Query.

## Autopsia
Separé la aplicación en componentes, servicios, hooks y esquemas para que cada parte tenga una responsabilidad concreta.

El esquema Zod es la única fuente de verdad para la validación. El formulario no gestiona manualmente las peticiones: utiliza el hook useContacts, que centraliza la consulta, la mutación y la invalidación de la caché.

La alternativa descartada fue colocar toda la lógica en App.jsx. Habría sido más rápido inicialmente, pero dificultaría el mantenimiento y la reutilización del formulario y del listado.