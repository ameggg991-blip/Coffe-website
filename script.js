// ==========================================
// CAFÉ AROMA - Lógica con JavaScript
// ==========================================

console.log(`pagina cargada.`);

// ----- 1. Lista de productos -----
let productos = [
  {
    nombre: "Café Americano",
    categoria: "caliente",
    descripcion: "Café negro clásico recién preparado.",
    precio: "$15.00",
    imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
  },
  {
    nombre: "Capuchino",
    categoria: "caliente",
    descripcion: "Espresso con leche vaporizada y espuma.",
    precio: "$22.00",
    imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
  },
  {
    nombre: "Frappé de Café",
    categoria: "frio",
    descripcion: "Café helado batido con crema.",
    precio: "$28.00",
    imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500"
  },
  {
    nombre: "Cold Brew",
    categoria: "frio",
    descripcion: "Café frío infusionado por 12 horas.",
    precio: "$26.00",
    imagen: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500"
  },
  {
    nombre: "Cheesecake",
    categoria: "postre",
    descripcion: "Delicioso pastel de queso con frutos rojos.",
    precio: "$30.00",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
  },
  {
    nombre: "Brownie",
    categoria: "postre",
    descripcion: "Brownie de chocolate con nueces.",
    precio: "$18.00",
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
  }
];

console.log(`productos cargados: ${productos.length}`);

// ----- 2. Referencias al HTML -----
let listaProductos = document.getElementById("listaProductos");
let botonesFiltro = document.querySelectorAll(".filtro");
let formulario = document.getElementById("formulario");

// ----- 3. Función para mostrar productos -----
function mostrarProductos(lista) {
  listaProductos.innerHTML = "";
  console.log(`mostrando ${lista.length} productos`);

  for (let i = 0; i < lista.length; i++) {
    let producto = lista[i];

    let columna = document.createElement("div");
    columna.className = "col-md-4";

    columna.innerHTML =
      '<div class="tarjeta-producto">' +
        '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
        '<div class="info">' +
          '<h5>' + producto.nombre + '</h5>' +
          '<p>' + producto.descripcion + '</p>' +
          '<span class="precio">' + producto.precio + '</span>' +
        '</div>' +
      '</div>';

    listaProductos.appendChild(columna);
  }
}

// Mostrar todos al inicio
mostrarProductos(productos);

// ----- 4. Filtros -----
for (let i = 0; i < botonesFiltro.length; i++) {
  botonesFiltro[i].addEventListener("click", function () {
    // Quitar "activo" de todos
    for (let j = 0; j < botonesFiltro.length; j++) {botonesFiltro[j].classList.remove("activo");}
    this.classList.add("activo");

    let categoria = this.getAttribute("data-categoria");
    console.log(`filtrando por ${categoria}`);

    if (categoria === "todos") {
      mostrarProductos(productos);
    } else {
      let filtrados = [];
      for (let k = 0; k < productos.length; k++) {
        if (productos[k].categoria === categoria) {
          filtrados.push(productos[k]);
        }
      }
      mostrarProductos(filtrados);
    }
  });
}

// ----- 5. Formulario -----
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log("Intentando enviar formulario...");

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  let errorNombre = document.getElementById("errorNombre");
  let errorEmail = document.getElementById("errorEmail");
  let errorMensaje = document.getElementById("errorMensaje");
  let mensajeExito = document.getElementById("mensajeExito");

  // Limpiar errores
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorMensaje.textContent = "";
  mensajeExito.textContent = "";

  let valido = true;

  // Validar nombre
  if (nombre.length < 2) {
    errorNombre.textContent = "Escribe al menos 2 caracteres.";
    console.log("Nombre inválido");
    valido = false;
  }

  // Validar email (solo que tenga @ y .)
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    errorEmail.textContent = "Escribe un correo válido.";
    console.log("Email inválido");
    valido = false;
  }

  // Validar mensaje
  if (mensaje.length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
    console.log("Mensaje muy corto");
    valido = false;
  }

  // Si todo está bien
  if (valido === true) {
    console.log(`Formulario valido: ${nombre}, ${email}, "${mensaje}"`);
    mensajeExito.textContent = "Gracias! Tu mensaje fue enviado.";
    formulario.reset();
  } else {
    console.log("Formulario con errores");
  }
});

// ----- 6. Año automático en el footer -----
let anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();
console.log(`Año: ${anio.textContent}`);