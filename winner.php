<?php
$filename = 'game-over.json';

$winnerNumber = $_GET["num"];

$gameOverStatus = false;

$score = 10000;
switch ($winnerNumber) {
    case 1:
        $score = 10000;
        break;
    case 2:
        $score = 9000;
        break;
    case 3:
        $score = 8000;
        break;
    case 4:
        $score = 7000;
        break;
    case 5:
        $score = 6000;
        $gameOverStatus = true;
        break;
}

$convertedgameOverStatus = ($gameOverStatus) ? 'true' : 'false';

$somecontent = "{ \"winnerNumber\" : ".$winnerNumber.",  \"gameOver\" : ".$convertedgameOverStatus.", \"winningAvatar\" : \"".htmlentities(str_rot13($_GET["avatar"]))."\", \"score\" : ".$score." }";
// Let's make sure the file exists and is writable first.
if (is_writable($filename)) {

    // In our example we're opening $filename in append mode.
    // The file pointer is at the bottom of the file hence
    // that's where $somecontent will go when we fwrite() it.
    if (!$handle = fopen($filename, 'w')) {
         echo "Cannot open file ($filename)";
         exit;
    }

    // Write $somecontent to our opened file.
    if (fwrite($handle, $somecontent) === FALSE) {
        echo "Cannot write to file ($filename)";
        exit;
    }

    fclose($handle);

} else {
    echo "The file $filename is not writable";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Winner</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <style>
    html { margin : 0;
        color : #000; height: 100%;
        background: url(/images/egg-room.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }
    body { margin : 0; padding : 0; height: 100%;}
    h1  { text-align: center; font-size : 48px; }
    main {
        height: 95%;
        width: 95%;
        margin: 0 auto;
        margin-top : 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
    }
    main h1 {
        background: transparent;
        text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
        color: white;
        width: 65%;
        padding: 10px;
        margin-top : 3em;
        overflow: auto;
    }
    main h2 {
        background: #d6b71d;
        color: black;
        width: 65%;
        padding: 10px;
        overflow: auto;
    }
    main h3 {
        background: #d6b71d;
        color: black;
        width: 65%;
        padding: 10px;
        overflow: auto;
    }

    </style>
</head>
<body>
    <main>
        <h2 style="text-align : center;">Thank you for playing my game.</h2>
        <h1>Congratulations <?php
        echo(htmlentities(str_rot13($_GET["avatar"])));
        ?>, you found the easter egg! <br /><br /> DON'T TELL ANYONE!
        </h1>
        <h3 style="text-align : center; color : black;"><a style="color : black;" href="/prize.pdf">Claim your prize</a></h3>
    </main>
</body>
</html>