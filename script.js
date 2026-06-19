let scores = {
    home: 0,
    away: 0
};

function addPoints(team, points) {
    scores[team] += points;

    document.getElementById(team + "-score").textContent =
        scores[team];
}

function resetScores() {
    scores.home = 0;
    scores.away = 0;

    document.getElementById("home-score").textContent = 0;
    document.getElementById("away-score").textContent = 0;
}