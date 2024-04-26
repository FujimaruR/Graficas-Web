window.onload = function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var imagen = urlParams.get('imagen');
    var jugadores = urlParams.get('jugadores');

    if (imagen) {
        var cajaBlanca = document.querySelector('.caja-blanca img');
        cajaBlanca.src = "/Front/recursos/Mapas/" + imagen;
    }

    if (jugadores) {
        var players = document.querySelector('.players img');
        if (jugadores === '1') {
            players.src = "/Front/recursos/Imagenes/1jugadores.png";
        } else if (jugadores === '2') {
            players.src = "/Front/recursos/Imagenes/2jugadores.png";

            var segundaCajaBlanca = document.createElement('div');
            segundaCajaBlanca.className = 'caja-blanca segunda-caja-blanca'; // Asigna una clase diferente para el segundo contenedor
            var segundaImagen = document.createElement('img');
            segundaImagen.src = "/Front/recursos/Mapas/" + imagen;
            segundaImagen.alt = "invalid-img";
            segundaImagen.className = "box segunda-box"; // Asigna una clase diferente para la segunda imagen
            segundaImagen.id = "box2"; // Cambia el id para que sea único
            segundaCajaBlanca.appendChild(segundaImagen);
            document.body.appendChild(segundaCajaBlanca);

            var primeraCajaBlanca = document.querySelector('.caja-blanca');
            primeraCajaBlanca.style.right = '55%';
        }
    }
};