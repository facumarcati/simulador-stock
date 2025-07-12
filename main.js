let productos = ["Pan", "Leche", "Azucar", "Galletitas"];
let cantidades = [5, 4, 10, 1];

function main() {
  let bool = true;
  while (bool) {
    console.log("CONTROL DE STOCK");
    console.log("-------------------------");
    console.log("Ingrese la opcion que realizar");
    console.log("1- Ver productos y stock");
    console.log("2- Registrar venta");
    console.log("3- Reponer stock");
    console.log("4- Agregar articulo");
    console.log("0- Salir");

    let opcion = parseInt(prompt("Que movimiento queres realizar?"));
    console.clear();
    switch (opcion) {
      case 1:
        console.clear();
        verProductos(productos, cantidades);
        prompt("Presione ENTER para continuar");
        console.clear();
        break;
      case 2:
        console.clear();
        registrarVenta();
        prompt("Presione ENTER para continuar");
        console.clear();
        break;
      case 3:
        console.clear();
        reponerStock();
        prompt("Presione ENTER para continuar");
        console.clear();
        break;
      case 4:
        console.clear();
        agregarArticulo();
        prompt("Presione ENTER para continuar");
        console.clear();
        break;
      case 0:
        bool = false;
        break;
      default:
        console.log("Opcion no disponible, seleccione otra");
        break;
    }
  }

  verProductos();
  prompt("Presione ENTER para finalizar");
  console.clear();
}

function verProductos() {
  console.log("PRODUCTOS");
  console.log("-------------");
  for (let i = 0; i < productos.length; i++) {
    console.log(i + 1 + "- " + productos[i] + ": " + cantidades[i] + " uds");
  }
}

function registrarVenta() {
  verProductos();

  let producto = validarProducto();
  let productoSeleccionado = productos[producto - 1];

  let cantidad = parseInt(prompt("Cantidad vendida"));

  let boolCantidad = true;
  while (boolCantidad) {
    if (
      cantidad > cantidades[producto - 1] ||
      cantidad <= 0 ||
      isNaN(cantidad)
    ) {
      alert("Cantidad no valida");
      cantidad = parseInt(prompt("Cantidad vendida"));
    } else {
      boolCantidad = false;
    }
  }

  console.clear();
  console.log(
    "Seleccionado: " + productoSeleccionado + " - " + cantidad + " ud(s)"
  );

  cantidades[producto - 1] -= cantidad;

  console.log("-------------------");
  verProductos();
}

function reponerStock() {
  verProductos();

  let producto = validarProducto();
  let productoSeleccionado = productos[producto - 1];

  let cantidad = parseInt(prompt("Cantidad a reponer"));

  let boolCantidad = true;
  while (boolCantidad) {
    if (cantidad <= 0 || isNaN(cantidad)) {
      alert("Cantidad no valida");
      cantidad = parseInt(prompt("Cantidad a reponer"));
    } else {
      boolCantidad = false;
    }
  }

  console.clear();
  console.log(
    "Seleccionado: " + productoSeleccionado + " - " + cantidad + " ud(s)"
  );

  cantidades[producto - 1] += cantidad;

  console.log("-------------------");
  verProductos();
}

function validarProducto() {
  let producto = parseInt(prompt("Ingresa el producto (ingrese el numero)"));

  let boolProducto = true;
  while (boolProducto) {
    if (producto > productos.length || producto <= 0 || isNaN(producto)) {
      alert("Producto no valido");
      producto = parseInt(
        prompt("Vuelva a ingresar el producto (ingrese el numero)")
      );
    } else {
      boolProducto = false;
    }
  }

  return producto;
}

function agregarArticulo() {
  verProductos();

  let productoNuevo = validarProductoNuevo();

  let existe = false;
  while (true) {
    existe = false;

    for (let i = 0; i < productos.length; i++) {
      if (
        productos[i].toLowerCase() === productoNuevo ||
        productoNuevo == null
      ) {
        existe = true;
        break;
      }
    }

    if (existe) {
      alert("Ya existe ese producto o ese producto es invalido. Ingrese otro.");
      productoNuevo = validarProductoNuevo();
    } else {
      break;
    }
  }

  productoNuevo =
    productoNuevo.charAt(0).toUpperCase() +
    productoNuevo.slice(1).toLowerCase();
  productos.push(productoNuevo);
  cantidades.push(0);

  alert("Producto agregado con éxito.");
  verProductos();
}

function validarProductoNuevo() {
  let productoNuevo;

  do {
    productoNuevo = prompt("Ingrese el nombre del producto que quiera agregar");
  } while (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(productoNuevo));

  productoNuevo = productoNuevo.toLowerCase().trim();

  return productoNuevo;
}
