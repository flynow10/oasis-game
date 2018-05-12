$(function(){
    var audio = new Audio('bell.wav');
    var scoreboardPlayers = {
        first : {
            name : "",
            score : null
        },
        second : {
            name : "",
            score : null
        },
        third : {
            name : "",
            score : null
        },
        fourth : {
            name : "",
            score : null
        },
        fifth : {
            name : "",
            score : null
        }
    }
    window.setInterval(checkGameStatus, 300);
    window.setInterval(updateScoreboardStatus, 1000);

    function checkGameStatus(){
        var req = $.ajax('/game-over.json', {dataType : 'json'});
        req.done(hasWinnerBeenPosted);
        req.fail(function() { alert('there was a problem -- refresh the page');});
    }
    function hasWinnerBeenPosted(data) {
        if (data.gameOver) {
            if (scoreboardPlayers.first.score === null )
            audio.play();
        }
            scoreboardPlayers.first.name = data.winningAvatar;
            if (data.score !== 0) {
            scoreboardPlayers.first.score = data.score;
            }
    }
    function updateScoreboardStatus(){
        $(".scoreboardnf").text(scoreboardPlayers.first.name);
        $(".scoreboardsf").text(scoreboardPlayers.first.score);

    }
});