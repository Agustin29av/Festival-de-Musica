document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
});

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobrefestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){
        if(sobrefestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }  //todo esto es para dejar fija la barra de navegacion
    })
}

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

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop // section top es la distancia en la cual se encuentra el html hasta arriba ( asi lo explica el mexicano, es basicamente, la que tenga mas)
            const sectionHeight = section.clientHeight // todo esto es para ver cuanto hay del section al section anterior para posicionar bien el scroll

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id  
            }
            //BASICAMENTE ITERAMOS SOBRE TODAS LAS SECCIONES Y DETECTAMOS CUAL ES LA QUE ESTA MAS VISIBLE, LA MARCAMOS COMO LA ACTUAL
        })
        navLinks.forEach(link => {
                link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active') // todo esto para que se resalte en el que estoy y cuando bajo se desactive el anterior y se active el nuevo
            }
        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href') 
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'}) // esto es para que la transicion de scroll sea mas linda
        })
    })
}