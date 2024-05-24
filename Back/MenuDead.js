window.onload = function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var score = urlParams.get('score');

    if (score) {
        var scoreid = document.getElementById('score');
        scoreid.textContent  = "Puntos: " + score;
    }
};