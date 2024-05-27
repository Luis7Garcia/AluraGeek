import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen, id){
    const producto = document.createElement("div");
    producto.className = "producto";
    producto.innerHTML = `
    <img class="imagen__producto" src=${imagen} alt="${nombre}"> 
        <div class="descripcion__producto">
            <h3 class="nombre">${nombre}</h3>
            <p class="precio"><i class="fa-solid fa-dollar-sign"></i>${precio}</p>
            <button class="icono" data-id="${id}"> <i class="fa-solid fa-trash"></i></button>
        </div>
    `
    return producto;
}

async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos()
        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)))

    }catch{
        lista.innerHTML = '<h2 class="mensaje__producto"> Ha ocurrido un problema con la conexión intente nuevamente </h2>';
    }
}

listarProductos()