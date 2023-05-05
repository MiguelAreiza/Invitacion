'use strict';

$(document).ready( () => {

    $('#btnAddress').click( () => {

        window.open('https://goo.gl/maps/N6tsnZdnDGwi2vhf8');

    });

    const URLPARAMS = new URLSearchParams(window.location.search);
    
    if (URLPARAMS.has('familia') && URLPARAMS.has('cupo')) {
        
        const FAMILIA = URLPARAMS.get('familia');
        const CUPO = URLPARAMS.get('cupo');

        $('.invitacion').html(`FAMILIA <b>${FAMILIA}</b>, TENEMOS EL HONOR DE INVITARTE A NUESTRA BODA TE HEMOS RESERVADO ${CUPO} CUPOS`);

    }

});