$(function () {
    var audio = new Audio('bell.wav');

    window.setInterval(checkGameStatus, 1000);

    function checkGameStatus() {
        var req = $.ajax('/game-over.json?t=' + +new Date(), {
            dataType: 'json'
        });
        req.done(hasWinnerBeenPosted);
        req.fail(function () {
            alert('there was a problem -- refresh the page');
        });
    }

    function hasWinnerBeenPosted(data) {
        if (data.winnerNumber > 0) {
            switch (data.winnerNumber) {
                case 1:
                    if ($('.first .name').text() === '') {
                        $('.first .name').text(data.winningAvatar);
                        $('.first .score').text(data.score);
                        audio.play();
                    }
                    break;
                case 2:
                    if ($('.second .name').text() === '') {
                        $('.second .name').text(data.winningAvatar);
                        $('.second .score').text(data.score);
                        audio.play();
                    }
                    break;
                case 3:
                    if ($('.third .name').text() === '') {
                        $('.third .name').text(data.winningAvatar);
                        $('.third .score').text(data.score);
                        audio.play();
                    }
                    break;
                case 4:
                    if ($('.fourth .name').text() === '') {
                        $('.fourth .name').text(data.winningAvatar);
                        $('.fourth .score').text(data.score);
                        audio.play();
                    }
                    break;
                case 5:
                    if ($('.fifth .name').text() === '') {
                        $('.fifth .name').text(data.winningAvatar);
                        $('.fifth .score').text(data.score);
                        audio.play();
                    }
                    break;
            }
        }
    }


});