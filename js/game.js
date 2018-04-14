$(function() {

    var avatarName = '';
    $('#avatarname').on('click dblclick', '.btn-primary', null, setAvatarName);


    $('#avatarname').modal({ keyboard : false});
    
    $('.x').on('dblclick', setWinner);

    function init() {
        $('#avatarname').modal('hide');
        window.setInterval(checkGameStatus, 1000);
    }

    function setAvatarName() {
        avatarName = rot13($('#avatar').val());
        init();
    }

    function rot13(str) {
        var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index     = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        return str.split('').map(translate).join('');
      }

    function setWinner() {
        window.location = '/oasis/winner.php?avatar=' + avatarName;
    }

    function checkGameStatus() {
        var req = $.ajax('/oasis/game-over.json', {dataType : 'json'});
        req.done(hasWinnerBeenPosted);
        req.fail(function() { alert('there was a problem -- refresh the page');});
    }

    function hasWinnerBeenPosted(data) {
        if (data.gameOver) {
            window.location = "/oasis/loser.php"
        }
    }
});