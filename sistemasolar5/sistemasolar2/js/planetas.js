const listaPlanetas = [
   {
    nombre: "Mercurio",
    tipo: "Planeta rocoso",
    descripcion: "El planeta más cercano al Sol y el más pequeño del sistema solar.",
    foto: "img/mercurio.jpg",
    masa: "3.301 × 10²³ kg",
    diametro: "4,879 km",
    distancia: "57.9 millones de km",
    duracionDia: "59 días terrestres",
    duracionAnio: "88 días terrestres",
    lunas: "No tiene",
    datoCurioso: "Aunque está más cerca del Sol, Venus es más caliente que Mercurio."
  },
  {
    nombre: "Venus",
    tipo: "Planeta rocoso",
    descripcion: "El objeto más brillante en el cielo nocturno después de la Luna, con atmósfera densa.",
    foto: "img/venus.jpg",
    masa: "4.867 × 10²⁴ kg",
    diametro: "12,104 km",
    distancia: "108.2 millones de km",
    duracionDia: "243 días terrestres",
    duracionAnio: "225 días terrestres",
    lunas: "No tiene",
    datoCurioso: "Gira en sentido contrario al de la mayoría de los planetas."
  },
  {
    nombre: "Tierra",
    tipo: "Planeta rocoso",
    descripcion: "Nuestro hogar, el único planeta conocido que alberga vida hasta el momento.",
    foto: "img/tierra.jpg",
    masa: "5.972 × 10²⁴ kg",
    diametro: "12,742 km",
    distancia: "149.6 millones de km",
    duracionDia: "24 horas",
    duracionAnio: "365 días",
    lunas: "1",
    datoCurioso: "Es el único planeta conocido que tiene agua líquida estable en su superficie."
  },
  {
    nombre: "Marte",
    tipo: "Planeta rocoso",
    descripcion: "Conocido como el planeta rojo debido a su apariencia por el óxido de hierro.",
    foto: "img/marte.jpg",
    masa: "6.417 × 10²³ kg",
    diametro: "6,779 km",
    distancia: "227.9 millones de km",
    duracionDia: "24.6 horas",
    duracionAnio: "687 días terrestres",
    lunas: "2",
    datoCurioso: "Tiene el volcán más grande conocido del sistema solar: el Monte Olimpo."
  },
  {
    nombre: "Júpiter",
    tipo: "Gigante gaseoso",
    descripcion: "El planeta más grande de todo el sistema solar, famoso por su gran mancha roja.",
    foto: "img/jupiter.jpg",
    masa: "1.898 × 10²⁷ kg",
    diametro: "139,820 km",
    distancia: "778.6 millones de km",
    duracionDia: "9.9 horas",
    duracionAnio: "11.9 años terrestres",
    lunas: "Muchas; entre ellas Europa y Ganímedes",
    datoCurioso: "La Gran Mancha Roja es una tormenta gigantesca observada desde hace siglos."
  },
  {
    nombre: "Saturno",
    tipo: "Gigante gaseoso",
    descripcion: "Distinguido por su impresionante y brillante sistema de anillos planetarios.",
    foto: "img/saturno.jpg",
    masa: "5.683 × 10²⁶ kg",
    diametro: "116,460 km",
    distancia: "1,434 millones de km",
    duracionDia: "10.7 horas",
    duracionAnio: "29.4 años terrestres",
    lunas: "Muchas; Titán es la más grande",
    datoCurioso: "Sus anillos están formados principalmente por hielo y fragmentos de roca."
  },
  {
    nombre: "Urano",
    tipo: "Gigante helado",
    descripcion: "Un gigante de hielo con un eje de rotación único que está prácticamente acostado.",
    foto: "img/urano.jpg",
    masa: "8.681 × 10²⁵ kg",
    diametro: "50,724 km",
    distancia: "2,871 millones de km",
    duracionDia: "17.2 horas",
    duracionAnio: "84 años terrestres",
    lunas: "Tiene lunas como Titania y Oberón",
    datoCurioso: "Su eje está tan inclinado que parece girar de lado."
  },
  {
    nombre: "Neptuno",
    tipo: "Gigante helado",
    descripcion: "El planeta más distante del Sol, caracterizado por sus intensos vientos azules.",
    foto: "img/neptuno.jpg",
    masa: "1.024 × 10²⁶ kg",
    diametro: "49,244 km",
    distancia: "4,495 millones de km",
    duracionDia: "16.1 horas",
    duracionAnio: "165 años terrestres",
    lunas: "Varias; Tritón es la más grande",
    datoCurioso: "En su atmósfera se han registrado algunos de los vientos más rápidos del sistema solar."
  },
  {
    nombre: "Plutón",
    tipo: "Planeta enano",
    descripcion: "Históricamente considerado el noveno planeta, hoy catalogado como planeta enano del cinturón de Kuiper.",
    foto: "img/pluton.jpg",
    masa: "1.303 × 10²² kg",
    diametro: "2,377 km",
    distancia: "5,906 millones de km (promedio)",
    duracionDia: "6.4 días terrestres",
    duracionAnio: "248 años terrestres",
    lunas: "5",
    datoCurioso: "Su luna más grande, Caronte, es tan grande en comparación que ambos orbitan un centro común."
  }
];

const contenedor = document.getElementById("contenedor-planetas");
const filtroTipo = document.getElementById("filtro-tipo");
const modalPlaneta = document.getElementById("modal-planeta");
const tituloModal = document.getElementById("modal-titulo");
const detallesModal = document.getElementById("modal-detalles");
const botonCerrarModal = document.querySelector(".cerrar-modal");

if (!contenedor || !filtroTipo || !modalPlaneta || !tituloModal || !detallesModal || !botonCerrarModal) {
  throw new Error("Faltan elementos necesarios para mostrar la información de los planetas.");
}

function crearTarjeta(planeta) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta-planeta", "tarjeta-contenedor");

  tarjeta.innerHTML = `
      <div class="tarjeta">
        <div class="tarjeta-lado tarjeta-frente">
          <img src="${planeta.foto}" alt="${planeta.nombre}">
          <h3>${planeta.nombre}</h3>
          <p class="tipo">${planeta.tipo}</p>
          <p>${planeta.descripcion}</p>
          <button type="button" class="btn-saber-mas btn-girar">Saber más</button>
        </div>

        <div class="tarjeta-lado tarjeta-atras">
          <h3>Detalles de ${planeta.nombre}</h3>
          <p><strong>Diámetro:</strong> ${planeta.diametro}</p>
          <p><strong>Masa:</strong> ${planeta.masa}</p>
          <p><strong>Distancia al Sol:</strong> ${planeta.distancia}</p>
          <p><strong>Duración del día:</strong> ${planeta.duracionDia}</p>
          <p><strong>Duración del año:</strong> ${planeta.duracionAnio}</p>
          <p><strong>Lunas:</strong> ${planeta.lunas}</p>
          <p><strong>Dato curioso:</strong> ${planeta.datoCurioso}</p>
          <button type="button" class="btn-saber-mas btn-detalles">Ficha completa</button>
          <button type="button" class="btn-saber-mas btn-volver">Volver</button>
        </div>
      </div>
  `;

  const tarjetaInterna = tarjeta.querySelector('.tarjeta');
  const btnGirar = tarjeta.querySelector('.btn-girar');
  const btnVolver = tarjeta.querySelector('.btn-volver');
  const btnDetalles = tarjeta.querySelector('.btn-detalles');

  btnGirar.addEventListener('click', () => {
    tarjetaInterna.classList.add('rotada');
  });

  btnVolver.addEventListener('click', () => {
    tarjetaInterna.classList.remove('rotada');
  });

  btnDetalles.addEventListener('click', () => mostrarDetalles(planeta));

  return tarjeta;
}

function mostrarPlanetas(tipo = "todos") {
  contenedor.replaceChildren();
  listaPlanetas
    .filter(planeta => tipo === "todos" || planeta.tipo === tipo)
    .forEach(planeta => {
      contenedor.appendChild(crearTarjeta(planeta));
    });
}

function mostrarDetalles(planeta) {
  tituloModal.textContent = `Ficha de ${planeta.nombre}`;
  detallesModal.replaceChildren();

  const datos = [
    ["Tipo", planeta.tipo],
    ["Masa", planeta.masa],
    ["Diámetro", planeta.diametro],
    ["Distancia al Sol", planeta.distancia],
    ["Duración del día", planeta.duracionDia],
    ["Duración del año", planeta.duracionAnio],
    ["Lunas", planeta.lunas],
    ["Dato curioso", planeta.datoCurioso]
  ];

  datos.forEach(([etiqueta, valor]) => {
    const parrafo = document.createElement("p");
    const nombreDato = document.createElement("strong");
    nombreDato.textContent = `${etiqueta}: `;
    parrafo.append(nombreDato, document.createTextNode(valor));
    detallesModal.appendChild(parrafo);
  });

  modalPlaneta.showModal();
}

filtroTipo.addEventListener("change", () => {
  mostrarPlanetas(filtroTipo.value);
});

botonCerrarModal.addEventListener("click", () => {
  modalPlaneta.close();
});

modalPlaneta.addEventListener("click", evento => {
  if (evento.target === modalPlaneta) {
    modalPlaneta.close();
  }
});

const formularioSuscripcion = document.getElementById("form-suscripcion");
const campoCorreo = document.getElementById("correo");
const errorCorreo = document.getElementById("error-correo");
const mensajeExito = document.getElementById("mensaje-exito");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

if (!formularioSuscripcion || !campoCorreo || !errorCorreo || !mensajeExito) {
  throw new Error("Faltan elementos necesarios para validar el formulario de suscripción.");
}

campoCorreo.addEventListener("input", () => {
  const correoValido = patronCorreo.test(campoCorreo.value.trim());
  errorCorreo.textContent = campoCorreo.value && !correoValido
    ? "Escribe un correo válido, por ejemplo nombre@dominio.com."
    : "";
  mensajeExito.hidden = true;
});

campoCorreo.addEventListener("invalid", () => {
  errorCorreo.textContent = campoCorreo.value.trim()
    ? "Escribe un correo válido, por ejemplo nombre@dominio.com."
    : "Escribe tu correo electrónico.";
});

formularioSuscripcion.addEventListener("submit", evento => {
  evento.preventDefault();
  const correoValido = patronCorreo.test(campoCorreo.value.trim());

  if (!correoValido) {
    errorCorreo.textContent = "Escribe un correo válido, por ejemplo nombre@dominio.com.";
    campoCorreo.focus();
    return;
  }

  errorCorreo.textContent = "";
  mensajeExito.textContent = "El correo tiene un formato válido. Este formulario todavía no envía datos a un servidor.";
  mensajeExito.hidden = false;
});

mostrarPlanetas();