# GameStore - Evaluación Final Transversal (PFY2201)

Aplicación web interactiva desarrollada con **React 18**, **HTML5 semántico**, **JavaScript ES6+** y **Bootstrap 5**, diseñada para una tienda de videojuegos en línea siguiendo estándares profesionales de desarrollo frontend.

## Descripción del Proyecto
El proyecto resuelve el caso de una tienda de venta de videojuegos que requiere:
- Un catálogo dinámico con tarjetas informativas (imagen, nombre, categoría, precio, descripción).
- Filtrado dinámico por categorías mediante botones interactivos.
- Gestión de inventario en tiempo real (agregar y eliminar videojuegos de la lista mediante estado inmutable).
- Formulario de contacto con validación de campos obligatorios y formato de correo electrónico mediante expresiones regulares.
- Maquetación responsiva adaptable a dispositivos móviles, tablets y computadoras de escritorio.

## Tecnologías Utilizadas
- **HTML5**: Estructuración semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3 / Bootstrap 5.3**: Maquetación responsiva, utilidades Flexbox (`d-flex`, `flex-column`, `align-items-stretch`) y componentes (`navbar`, `card`, `alert`, `form-control`, `badge`).
- **JavaScript (ES6+)**: Manipulación de colecciones (`map`, `filter`), desestructuración, template literals y expresiones regulares (Regex).
- **React 18**: Arquitectura basada en componentes funcionales, modularización mediante `props` y manejo reactivo del estado con el hook `useState`.
- **Vite**: Entorno de compilación y empaquetado de alta eficiencia.

## Arquitectura de Componentes
```text
src/
├── components/
│   ├── Navbar.jsx         # Encabezado y navegación semántica
│   ├── Filter.jsx         # Selector interactivo de categorías
│   ├── GameCard.jsx       # Tarjeta individual de producto con Flexbox
│   ├── GameList.jsx       # Renderizado de lista dinámica y paso de eventos
│   ├── AddGameForm.jsx    # Formulario colapsable para añadir productos al estado
│   └── ContactForm.jsx    # Formulario con validación en tiempo real y alertas
├── data/
│   └── games.js           # Fuente de datos inicial en JavaScript
├── App.jsx                # Componente principal contenedor del estado global
└── index.jsx              # Punto de entrada y montaje del DOM virtual