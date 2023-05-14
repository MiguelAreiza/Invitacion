'use strict';

$(document).ready( () => {

    let sound = new Audio('../assets/Sound.mp3');
    sound.play()
    // Swal.fire({
    //     title: '¿Deseas reproducir el sonido?',
    //     icon: 'question',
    //     showCancelButton: true,
    //     confirmButtonText: 'Sí',
    //     cancelButtonText: 'No'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         sound.play();
    //     }
    // });
    
    $('#btnAddress').click( () => {

        window.open('https://goo.gl/maps/N6tsnZdnDGwi2vhf8');

    });

    const URLPARAMS = new URLSearchParams(window.location.search);
    
    if (URLPARAMS.has('invitados')) {
        
        const FAMILIA = URLPARAMS.get('invitados');
        const INVITADOS = FAMILIA.split(',');
        let html = ``;
        
        for (let i = 0; i < INVITADOS.length; i++) {

            html += `<hr><b>${INVITADOS[i]}</b>`;
            
        }

        $('.invitacion').html(`TENEMOS EL HONOR DE INVITARTE A NUESTRA BODA TE HEMOS RESERVADO ${INVITADOS.length} CUPOS PARA: ${html}`);

    }

});