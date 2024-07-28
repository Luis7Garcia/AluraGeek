async function listarProductos() {
    const conexion = await fetch("https://my-json-server.typicode.com/Luis7Garcia/api-alurageek/productos");

    const conexionConvertida = await conexion.json();
    return conexionConvertida
}

async function enviarProducto(nombre, precio, imagen){
    const conexion = await fetch("https://my-json-server.typicode.com/Luis7Garcia/api-alurageek/productos", {
        method: "POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

 async function borrarProducto(id){
    try{
        const respuesta = await fetch(`${"https://my-json-server.typicode.com/Luis7Garcia/api-alurageek/productos"}/${id}`,{
            method: "DELETE",
            headers: {"content-type":"application/json"},
            console: console.log("eliminado")
        });

        if(!respuesta.ok){
            throw new Error("Error al eliminar el producto intentalo nuevamente");
        }

        return respuesta;


    }catch (e){
        alert(e);
    }
 }
export const conexionAPI = {
    listarProductos, enviarProducto, borrarProducto
}

