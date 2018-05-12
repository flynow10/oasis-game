$(function() {

    var avatarName = '';
    $('#avatarname').on('click dblclick', '.btn-primary', null, setAvatarName);


    $('#avatarname').modal({ keyboard : false, backdrop : 'static'});
    
    $('.x').on('dblclick', setWinner);

    function init() {
        $('#avatarname').modal('hide');
        window.setInterval(checkGameStatus, 1000);
    }

    function setAvatarName() {
        var providedName = $('#avatar').val();
        if (providedName.length === 0) {
            alert('You must enter a name!');
        } else {
            avatarName = rot13($('#avatar').val());
            init();
        }
    }

    function rot13(str) {
        var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index     = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        return str.split('').map(translate).join('');
      }

    function setWinner() {
        window.location = '/winner.php?avatar=' + avatarName;
    }

    function checkGameStatus() {
        var req = $.ajax('/game-over.json', {dataType : 'json'});
        req.done(hasWinnerBeenPosted);
        req.fail(function() { alert('there was a problem -- refresh the page');});
    }

    function hasWinnerBeenPosted(data) {
        if (data.gameOver) {
            window.location = "/loser.php"
        }
    }
});