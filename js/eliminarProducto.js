import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(id){
    await conexionAPI.borrarProducto(id);
    
}

window.addEventListener("click", function (){
   
    const iconoBorrar = document.querySelectorAll('.icono');
    
    iconoBorrar.forEach(btn => {
        const id = btn.getAttribute("data-id");

        btn.addEventListener("click", (event) =>{
            
            event.preventDefault();
            eliminarProducto(id);
        });
    });
});