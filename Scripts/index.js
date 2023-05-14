'use strict';

$(document).ready( () => {

    let sound = new Audio('../assets/Sound.mp3');
    
    Swal.fire({
        title: '¿Deseas reproducir el sonido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            sound.play();
        }
    });
    
    const URLPARAMS = new URLSearchParams(window.location.search);
    let invitados = '';
    
    if (URLPARAMS.has('invitados')) {
        
        const FAMILIA = URLPARAMS.get('invitados');
        const INVITADOS = FAMILIA.split(',');
        let html = ``;
        
        for (let i = 0; i < INVITADOS.length; i++) {

            html += `<hr><b>${INVITADOS[i]}</b>`;
            invitados += `${INVITADOS[i]}\n`
            
        }

        $('.invitacion').html(`TENEMOS EL HONOR DE INVITARTE A NUESTRA BODA TE HEMOS RESERVADO ${INVITADOS.length} CUPOS PARA: ${html}`);

    }
    
    $('#btnAddress').click( () => {

        window.open('https://goo.gl/maps/N6tsnZdnDGwi2vhf8');

    });

    $('#btnConfirm').click( () => {

        const telefono = '573218188612';
        const mensaje = `Confirmamos la asistencia de:\n ${invitados} ¡nos veremos allá!`;
        window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);

    });

});