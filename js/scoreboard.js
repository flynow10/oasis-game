$(function(){
    var scoreboardPlayers = {
        first : {
            name : "",
            score : 0
        },
        second : {
            name : "",
            score : 0
        },
        third : {
            name : "",
            score : 0
        },
        fourth : {
            name : "",
            score : 0
        },
        fifth : {
            name : "",
            score : 0
        }
    }
    window.setInterval(checkGameStatus, 300);
    window.setInterval(updateScoreboardStatus, 1000);

    function checkGameStatus(){
        var req = $.ajax('/oasis/game-over.json', {dataType : 'json'});
        req.done(hasWinnerBeenPosted);
        req.fail(function() { alert('there was a problem -- refresh the page');});
    }
    function hasWinnerBeenPosted(data) {
        if (data.gameOver) {
            scoreboardPlayers.first.name = data.winningAvatar;
        }
    }
    function updateScoreboardStatus(){
        $(".scoreboardnf").text(scoreboardPlayers.first.name);
    }
});