// script.js — la lógica de tu página: lo que pasa DESPUÉS de que carga.
// El contenido que se ve está en index.html y el diseño en styles.css.

// Tus datos (los que escribiste en "Mis datos").
const datos = {
  "nombre": "Alejandr05",
  "sobreMi": "GOAT",
  "redes": [
    {
      "nombre": "GitHub",
      "url": ""
    },
    {
      "nombre": "LinkedIn",
      "url": ""
    },
    {
      "nombre": "Sitio web",
      "url": "https://github.com/Alejandr05ang"
    }
  ],
  "hobbies": [
    "correr",
    "saltar",
    "leer"
  ],
  "proyectos": [
    {
      "nombre": "Reloj web",
      "imagenUrl": "https://picsum.photos/seed/reloj-web/480/280",
      "destacado": true,
      "terminado": true,
      "tipo": "demo",
      "url": "https://ejemplo.com/reloj"
    },
    {
      "nombre": "Juego de memoria",
      "imagenUrl": "https://picsum.photos/seed/memoria/480/280",
      "destacado": false,
      "terminado": false,
      "tipo": "texto"
    },
    {
      "nombre": "Portafolio",
      "imagenUrl": "https://picsum.photos/seed/portafolio/480/280",
      "destacado": true,
      "terminado": true,
      "tipo": "texto"
    },
    {
      "nombre": "Agenda de estudio",
      "imagenUrl": "https://picsum.photos/seed/agenda-estudio/480/280",
      "destacado": true,
      "terminado": true,
      "tipo": "video"
    },
    {
      "nombre": "Luis Miguel",
      "imagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBprMyRK9RjiVXmARtbcWtH0K_ZqEjzSuuqUAD36wPZh14ExOKjz4rqD&s=10",
      "destacado": true,
      "terminado": true,
      "tipo": "texto"
    }
  ],
  "skills": [],
  "segundos": 3
};

// ── seccion-carrusel.js ──
{
  const carrusel = document.getElementById('carrusel-carrusel');
  const destacados = datos.proyectos.filter((proyecto) => proyecto.destacado === true);
  const crearElemento = proyecto => {
    const imagen = document.createElement('img');
    imagen.src = proyecto.imagenUrl;
    imagen.alt = proyecto.nombre;
    return imagen;
  };
  if (destacados.length === 0) {
    carrusel.replaceChildren(Object.assign(document.createElement('p'), { textContent: 'Todavía no hay proyectos destacados.' }));
  } else {
    let indice = 0;
    const avanzar = () => {
      const siguiente = crearElemento(destacados[indice]);
      if (siguiente.tagName === 'IMG') siguiente.loading = 'eager';
      if (carrusel.offsetHeight > 0) carrusel.style.minHeight = carrusel.offsetHeight + 'px';
      if (siguiente.tagName === 'IMG' && !siguiente.complete && carrusel.firstChild) {
        siguiente.addEventListener('load', () => carrusel.replaceChildren(siguiente), { once: true });
        siguiente.addEventListener('error', () => carrusel.replaceChildren(siguiente), { once: true });
      } else carrusel.replaceChildren(siguiente);
      indice = (indice + 1) % destacados.length;
    };
    avanzar();
    setInterval(avanzar, (typeof datos !== 'undefined' && datos.segundos > 0 ? datos.segundos : 1) * 1000);
  }
}
