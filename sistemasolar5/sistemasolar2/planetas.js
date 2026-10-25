const listaPlanetas = [
  {
    nombre: "Mercurio",
    tipo: "Planeta rocoso",
    descripcion: "El planeta más cercano al Sol y el más pequeño del sistema solar.",
    foto: "img/mercurio.jpg"
  },
  {
    nombre: "Venus",
    tipo: "Planeta rocoso",
    descripcion: "El objeto más brillante en el cielo nocturno después de la Luna, con atmósfera densa.",
    foto: "img/venus.jpg"
  },
  {
    nombre: "Tierra",
    tipo: "Planeta rocoso",
    descripcion: "Nuestro hogar, el único planeta conocido que alberga vida hasta el momento.",
    foto: "img/tierra.jpg"
  },
  {
    nombre: "Marte",
    tipo: "Planeta rocoso",
    descripcion: "Conocido como el planeta rojo debido a su apariencia por el óxido de hierro.",
    foto: "img/marte.jpg"
  },
  {
    nombre: "Júpiter",
    tipo: "Gigante gaseoso",
    descripcion: "El planeta más grande de todo el sistema solar, famoso por su gran mancha roja.",
    foto: "img/jupiter.jpg"
  },
  {
    nombre: "Saturno",
    tipo: "Gigante gaseoso",
    descripcion: "Distinguido por su impresionante y brillante sistema de anillos planetarios.",
    foto: "img/saturno.jpg"
  },
  {
    nombre: "Urano",
    tipo: "Gigante helado",
    descripcion: "Un gigante de hielo con un eje de rotación único que está prácticamente acostado.",
    foto: "img/urano.jpg"
  },
  {
    nombre: "Neptuno",
    tipo: "Gigante helado",
    descripcion: "El planeta más distante del Sol, caracterizado por sus intensos vientos azules.",
    foto: "img/neptuno.jpg"
  },
  {
    nombre: "Plutón",
    tipo: "Planeta enano",
    descripcion: "Históricamente considerado el noveno planeta, hoy catalogado como planeta enano del cinturón de Kuiper.",
    foto: "img/pluton.jpg"
  }
];

const contenedor = document.getElementById("contenedor-planetas");

function mostrarPlanetas() {
  listaPlanetas.forEach(planeta => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-planeta");

    tarjeta.innerHTML = `
      <img src="${planeta.foto}" alt="${planeta.nombre}">
      <h3>${planeta.nombre}</h3>
      <p class="tipo">${planeta.tipo}</p>
      <p>${planeta.descripcion}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

mostrarPlanetas();

// Validación sencilla del formulario de suscripción sin recargar la página
const formSuscripcion = document.getElementById("form-suscripcion");
const mensajeExito = document.getElementById("mensaje-exito");

formSuscripcion.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue
  const correoInput = document.getElementById("correo").value;
  
  if (correoInput.trim() !== "") {
    mensajeExito.textContent = "¡Gracias por suscribirte al boletín espacial!";
    mensajeExito.style.display = "block";
    formSuscripcion.reset(); // Limpia el campo
  }
});

// Validación sencilla del formulario de suscripción sin recargar la página
const formSuscripcion = document.getElementById("form-suscripcion");
const mensajeExito = document.getElementById("mensaje-exito");

formSuscripcion.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue
  const correoInput = document.getElementById("correo").value;
  
  if (correoInput.trim() !== "") {
    mensajeExito.textContent = "¡Gracias por suscribirte al boletín espacial!";
    mensajeExito.style.display = "block";
    formSuscripcion.reset(); // Limpia el campo
  }
});