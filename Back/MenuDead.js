window.onload = function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var score = urlParams.get('score');

    if (score) {
        var scoreid = document.getElementById('score');
        scoreid.textContent = "Puntos: " + score;
    }

    if (urlParams.has('scored')) {
        var secondScore = document.createElement('div');
        secondScore.id = 'scoreD'
        document.body.appendChild(secondScore);

        var scoredos = urlParams.get('scored');
        secondScore.textContent = "Puntos: " + scoredos;
    }
};