'use strict';

$(document).ready( () => {

    $('#btnAddress').click( () => {

        window.open('https://goo.gl/maps/N6tsnZdnDGwi2vhf8');

    });

    const URLPARAMS = new URLSearchParams(window.location.search);
    
    if (URLPARAMS.has('invitados') && URLPARAMS.has('cupos')) {
        
        const FAMILIA = URLPARAMS.get('invitados');
        const CUPO = URLPARAMS.get('cupos');
        const INVITADOS = FAMILIA.split(',');
        let html = ``;
        
        for (let i = 0; i < INVITADOS.length; i++) {

            html += `<hr><b>${INVITADOS[i]}</b>`;
            
        }

        $('.invitacion').html(`TENEMOS EL HONOR DE INVITARTE A NUESTRA BODA TE HEMOS RESERVADO ${CUPO} CUPOS PARA: ${html}`);

    }

});