<?php
$winnerFile = file_get_contents("./game-over.json", FILE_USE_INCLUDE_PATH);
$theWinner = substr($winnerFile, 40, strlen($winnerFile) - 43);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Scoreboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body class="dark">

    
    <h1 class="title">Let the Egg Hunt BEGIN</h1>
    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Player Name</th>
                <th class="r">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr class="first">
                <td class="r">1st</td>
                <td class="name"></td>
                <td class="score r"></td>
            </tr>
            <tr class="second">
                <td class="r">2nd</td>
                <td class="name"></td>
                <td class="score r"></td>
            </tr>
            <tr class="third">
                <td class="r">3rd</td>
                <td class="name"></td>
                <td class="score r"></td>
            </tr>
            <tr class="fourth">
                <td class="r">4th</td>
                <td class="name"></td>
                <td class="score r"></td>
            </tr>
            <tr class="fifth">
                <td class="r">5th</td>
                <td class="name"></td>
                <td class="score r"></td>
            </tr>
        </tbody>
    </table>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/scoreboard.js"></script>
</body>
</html>