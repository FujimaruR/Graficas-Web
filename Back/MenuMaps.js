window.onload = function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var jugadores = urlParams.get('jugadores');

    if (jugadores) {
        var mapa1Link = document.getElementById('mapa1');
        var mapa2Link = document.getElementById('mapa2');
        var mapa3Link = document.getElementById('mapa3');
        if (jugadores === '1') {
            mapa1Link.href = "MainGame.html?imagen=MicrosoftTeams-image (1).png&jugadores=1";
            mapa2Link.href = "MainGame.html?imagen=MicrosoftTeams-image (2).png&jugadores=1";
            mapa3Link.href = "MainGame.html?imagen=MicrosoftTeams-image (3).png&jugadores=1";

        } else if (jugadores === '2') {
            mapa1Link.href = "MainGame.html?imagen=MicrosoftTeams-image (1).png&jugadores=2";
            mapa2Link.href = "MainGame.html?imagen=MicrosoftTeams-image (2).png&jugadores=2";
            mapa3Link.href = "MainGame.html?imagen=MicrosoftTeams-image (3).png&jugadores=2";
            
        }
    }
};