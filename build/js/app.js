document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
});

function crearGaleria(){
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i<=CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG'); //CADA VEZ Q USAMOS ESTO DE JAVASCRIPT HAY Q ESCRIBI EN MAYUSCULA
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria'
        
        // Event Handler, esto es el proceso de detectar y responder a una interaccion del usuario

        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}   

function mostrarImagen(i){
    const imagen = document.createElement('IMG'); 
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria'


    //Generar modal

    const modal = document.createElement('DIV')
    modal.classList.add('modal') // con esto genere un DIV para poder manipularlo con SASS
    modal.onclick = cerrarModal 

    // boton cerrar modal

    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal
    
    modal.appendChild(imagen) // esto es para que muestre la imagen de la posicion i
    modal.appendChild(cerrarModalBtn) 

    //Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden') // es para eliminar la clase modal y overflow-hidden
        modal?.remove() // esto es para que cuando yo presiono y abre, cuando vuelvo a presionar se cierra
    },  500);

}