$(function() {
    $("body").on('keydown', move);
    $("body").on('click dblclick', 'button', null, move);

    var keynames = {
        38: "up",
        40: "down",
        37: "left",
        39: "right"
    };
    
    var sides = [
        "whitered", {front: "white", top: "red", left:"blue",right:"green",bottom:"orange",back:"yellow"}
        ,"whitegreen", {front: "white", top: "green", left:"red",right:"orange",bottom:"blue",back:"yellow"}
        ,"whiteorange", {front:"white",top:"orange",left:"green",right:"blue",bottom:"red",back:"yellow"}
        ,"whiteblue", {front:"white",top:"blue",left:"orange",right:"red",bottom:"green",back:"yellow"}
        ,"redwhite", {front:"red",top:"white",left:"green",right:"blue",bottom:"yellow",back:"orange"}
        ,"redblue", {front:"red",top:"blue",left:"white",right:"yellow",bottom:"green",back:"orange"}
        ,"redyellow", {front:"red",top:"yellow",left:"blue",right:"green",bottom:"white",back:"orange"}
        ,"redgreen", {front:"red",top:"green",left:"yellow",right:"white",bottom:"blue",back:"orange"}
        ,"yelloworange", {front:"yellow",top:"orange",left:"blue",right:"green",bottom:"red",back:"white"}
        ,"yellowgreen", {front:"yellow",top:"green",left:"orange",right:"red",bottom:"blue",back:"white"}
        ,"yellowred", {front:"yellow",top:"red",left:"green",right:"blue",bottom:"orange",back:"white"}
        ,"yellowblue", {front:"yellow",top:"blue",left:"red",right:"orange",bottom:"green",back:"white"}
        ,"bluewhite", {front: "blue", top: "white", left:"red",right:"orange",bottom:"yellow",back:"green"}
        ,"blueorange", {front: "blue", top: "orange", left:"white",right:"yellow",bottom:"red",back:"green"}
        ,"blueyellow", {front:"blue",top:"yellow",left:"orange",right:"red",bottom:"white",back:"green"}
        ,"bluered", {front:"blue",top:"red",left:"yellow",right:"white",bottom:"orange",back:"green"}
        ,"greenred", {front:"green",top:"red",left:"white",right:"yellow",bottom:"orange",back:"blue"}
        ,"greenyellow", {front:"green",top:"yellow",left:"red",right:"orange",bottom:"white",back:"blue"}
        ,"greenorange", {front:"green",top:"orange",left:"yellow",right:"white",bottom:"red",back:"blue"}
        ,"greenwhite", {front:"green",top:"white",left:"orange",right:"red",bottom:"yellow",back:"blue"}
        ,"orangewhite", {front:"orange",top:"white",left:"blue",right:"green",bottom:"yellow",back:"red"}
        ,"orangegreen", {front:"orange",top:"green",left:"white",right:"yellow",bottom:"blue",back:"red"}
        ,"orangeyellow", {front:"orange",top:"yellow",left:"green",right:"blue",bottom:"white",back:"red"}
        ,"orangeblue", {front:"orange",top:"blue",left:"yellow",right:"white",bottom:"green",back:"red"}
    ];
    
    var currentFrontSide = 'white';
    var currentTopSide = 'red';
    var findNextSides = 0;
    
    function move(event) {
        let direction = $(this).data('direction') || keynames[event.which];
        let current = sides[sides.indexOf(currentFrontSide + currentTopSide) + 1]
        $('.face').removeClass(currentFrontSide);
        switch(direction) {
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
        $('.face').addClass(currentFrontSide);
    }
});
