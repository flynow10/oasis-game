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
    <h1>Let the Egg hunt BEGIN</h1>
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
                <td class="scoreboard">Parzival</td>
                <td class="r">100000</td>
            </tr>
            <tr class="second">
                <td class="r">2nd</td>
                <td>Parzival</td>
                <td class="r">100000</td>
            </tr>
            <tr class="third">
                <td class="r">3rd</td>
                <td>Parzival</td>
                <td class="r">100000</td>
            </tr>
            <tr class="fourth">
                <td class="r">4th</td>
                <td>Parzival</td>
                <td class="r">100000</td>
            </tr>
            <tr class="fifth">
                <td class="r">5th</td>
                <td>Parzival</td>
                <td class="r">100000</td>
            </tr>
        </tbody>
    </table>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="js/scoreboard.js"></script>
</body>
</html>