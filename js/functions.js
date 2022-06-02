function openMenu() {
  document.getElementById("sidebarMenu").style.width = "300px";
}

function closeMenu() {
  document.getElementById("sidebarMenu").style.width = "0";
}
function openCarro() {
  document.getElementById("sidebarCarro").style.width = "300px";
}

function closeCarro() {
  document.getElementById("sidebarCarro").style.width = "0";
}
function openCategorias() {
  document.getElementById("sidebarMenu").style.width = "0";
  let container = document.getElementById("dropdown_contenido");
  container.className = "dropdownAbierto";
}
function cierraMenu() {
  let container = document.getElementById("dropdown_contenido");
  container.className = "dropdown_contenido";
}

//Carrito de compras//

const carritoCompras = document.getElementById("carro");
const contenidoCarrito = document.getElementById("contenidoCarrito");
const vaciarCarrito = document.getElementById("botonVaciar");
const listaBebidas = document.getElementById("listaBebida");
const listaBebidasSinAlc = document.getElementById("listaBebidaSinAlc");
const listaEspecias = document.getElementById("listaEspecia");

const agregarProducto = () => {
  console.log("producto agregado");
}

function Registro() {
  listaBebidas.addEventListener("click", agregarProducto);
  listaBebidasSinAlc.addEventListener("click", agregarProducto);
  listaEspecias.addEventListener("click", agregarProducto);
}
Registro();

