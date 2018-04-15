$(function(){
    window.setInterval(checkGameStatus, 1000);

    function checkGameStatus(){
        var req = $.ajax('/oasis/game-over.json', {dataType : 'json'});
        req.done(hasWinnerBeenPosted);
        req.fail(function() { alert('there was a problem -- refresh the page');});
    }
    function hasWinnerBeenPosted(data) {
        if (data.gameOver) {
            $(".scoreboard").text(data.winningAvatar);
        }
    }
});