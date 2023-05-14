'use strict';

$(document).ready( () => {

    setTimeout(() => {
        let sonido = new Audio('../assets/Sound.mp3');
        sonido.play();
    }, 200);

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