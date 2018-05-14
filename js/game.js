$(function () {
    var keynames = {
        38: "up",
        40: "down",
        37: "left",
        39: "right"
    };

    var colorText = {
        "red": "2. Before James Halliday died he hid three keys that would open gates leading to specific tests inside the OASIS. At the last test, there would be an easter egg. Halliday’s will stated that the first person to find the easter egg would inherit his fortune and become the owner of the OASIS. James Halliday loved the games, movies and music from his childhood in the 1980’s; it in turn shaped the OASIS and the competition.",
        "white": "1. In the year 2045, the world had run out of natural resources and most people were in extreme poverty. The OASIS is a virtual world made by James Halliday.  It is made up of 27 sectors in the arrangement of a rubik's cube. The first sector is where new avatars spawn. Everyone in the world escapes their poverty by going into the OASIS where they can be anyone they want to be.",
        "blue": "3. Wade Owen Watts, like many others, wants to find the easter egg first to improve his state of life. Unfortunately, Wade doesn’t have any money to help him search for clues and there is a company called the IOI that’s <i>double clicking</i> lots of money, who also want control of the OASIS.",
        "green": "4. If the IOI wins the competition they want to advertise their own products and put a monthly fee on the OASIS which is currently free to use. They will go to many extents<span class='x'>,</span> including murder to win the competition.",
        "yellow": "5. Wade is the first person in five years since the contest started to make any progress. <i>Even the smallest pixels on a screen can have a huge effect</i>. He finds the first key and it rewards him with $10,000. This is enough to move into an apartment and get better OASIS gear. After graduating high school, Wade is completely focuses on finding the second key.",
        "orange": "6. The IOI has thousands of workers that are focused on finding the egg. Eventually, Wade teams up with four other people to get the prize and share it. In the end Wade beats the IOI, finds the egg, gets the money and control of the OASIS.",
    }

    var currentFrontSide = 'white';
    var currentTopSide = 'red';
    var currentCenterText = '';

    var sides = [
        "whitered", {
            front: "white",
            top: "red",
            left: "blue",
            right: "green",
            bottom: "orange",
            back: "yellow"
        }, "whitegreen", {
            front: "white",
            top: "green",
            left: "red",
            right: "orange",
            bottom: "blue",
            back: "yellow"
        }, "whiteorange", {
            front: "white",
            top: "orange",
            left: "green",
            right: "blue",
            bottom: "red",
            back: "yellow"
        }, "whiteblue", {
            front: "white",
            top: "blue",
            left: "orange",
            right: "red",
            bottom: "green",
            back: "yellow"
        }, "redwhite", {
            front: "red",
            top: "white",
            left: "green",
            right: "blue",
            bottom: "yellow",
            back: "orange"
        }, "redblue", {
            front: "red",
            top: "blue",
            left: "white",
            right: "yellow",
            bottom: "green",
            back: "orange"
        }, "redyellow", {
            front: "red",
            top: "yellow",
            left: "blue",
            right: "green",
            bottom: "white",
            back: "orange"
        }, "redgreen", {
            front: "red",
            top: "green",
            left: "yellow",
            right: "white",
            bottom: "blue",
            back: "orange"
        }, "yelloworange", {
            front: "yellow",
            top: "orange",
            left: "blue",
            right: "green",
            bottom: "red",
            back: "white"
        }, "yellowgreen", {
            front: "yellow",
            top: "green",
            left: "orange",
            right: "red",
            bottom: "blue",
            back: "white"
        }, "yellowred", {
            front: "yellow",
            top: "red",
            left: "green",
            right: "blue",
            bottom: "orange",
            back: "white"
        }, "yellowblue", {
            front: "yellow",
            top: "blue",
            left: "red",
            right: "orange",
            bottom: "green",
            back: "white"
        }, "bluewhite", {
            front: "blue",
            top: "white",
            left: "red",
            right: "orange",
            bottom: "yellow",
            back: "green"
        }, "blueorange", {
            front: "blue",
            top: "orange",
            left: "white",
            right: "yellow",
            bottom: "red",
            back: "green"
        }, "blueyellow", {
            front: "blue",
            top: "yellow",
            left: "orange",
            right: "red",
            bottom: "white",
            back: "green"
        }, "bluered", {
            front: "blue",
            top: "red",
            left: "yellow",
            right: "white",
            bottom: "orange",
            back: "green"
        }, "greenred", {
            front: "green",
            top: "red",
            left: "white",
            right: "yellow",
            bottom: "orange",
            back: "blue"
        }, "greenyellow", {
            front: "green",
            top: "yellow",
            left: "red",
            right: "orange",
            bottom: "white",
            back: "blue"
        }, "greenorange", {
            front: "green",
            top: "orange",
            left: "yellow",
            right: "white",
            bottom: "red",
            back: "blue"
        }, "greenwhite", {
            front: "green",
            top: "white",
            left: "orange",
            right: "red",
            bottom: "yellow",
            back: "blue"
        }, "orangewhite", {
            front: "orange",
            top: "white",
            left: "blue",
            right: "green",
            bottom: "yellow",
            back: "red"
        }, "orangegreen", {
            front: "orange",
            top: "green",
            left: "white",
            right: "yellow",
            bottom: "blue",
            back: "red"
        }, "orangeyellow", {
            front: "orange",
            top: "yellow",
            left: "green",
            right: "blue",
            bottom: "white",
            back: "red"
        }, "orangeblue", {
            front: "orange",
            top: "blue",
            left: "yellow",
            right: "white",
            bottom: "green",
            back: "red"
        }
    ];

    var avatarName = '';
    $('#avatarname').on('click dblclick', '.btn-primary', null, setAvatarName);


    $("body").on('keydown', move);

    $('#avatarname').modal({
        keyboard: false,
        backdrop: 'static'
    });

    $('body').on('dblclick', '.x', null, foo);


    $('#avatarname').on('shown.bs.modal', function () {
        $('#avatar').trigger('focus');
    });

    function init() {
        $('#avatarname').modal('hide');
        window.setInterval(checkGameStatus, 1000);
    }

    function move(event) {
        if (event.target.id === 'avatar') {
            if (event.which === 13) {
                setAvatarName()
            }
            return;
        }
        let direction = $(this).data('direction') || keynames[event.which];
        if (direction) {
            event && typeof (event.preventDefault) === 'function' && event.preventDefault();
            let current = sides[sides.indexOf(currentFrontSide + currentTopSide) + 1]
            $('.face').removeClass(currentFrontSide);

            switch (direction) {
                case 'left':
                    currentFrontSide = current.right;
                    currentTopSide = current.top;
                    break;
                case 'right':
                    currentFrontSide = current.left;
                    currentTopSide = current.top;
                    break;
                case 'up':
                    currentFrontSide = current.bottom;
                    currentTopSide = current.front;
                    break;
                case 'down':
                    currentFrontSide = current.top;
                    currentTopSide = current.back;
                    break;
            }
            $('.main-w').html(colorText[currentFrontSide]);
            $('.face').addClass(currentFrontSide);
        }
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
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        return str.split('').map(translate).join('');
    }

    function foo() {
        window.location = '/winner.php?avatar=' + avatarName + '&num=' + (winnerNumber + 1);
    }

    var winnerNumber = 0;

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
        if (data.gameOver) {
            window.location = "/loser.php"
        } else if (data.winnerNumber > winnerNumber) {
            winnerNumber = data.winnerNumber;
        }
    }
});