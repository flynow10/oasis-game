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
</head>
<body>
    <h1>Let the Egg hunt BEGIN</h1>
    <h1 class="scoreboard"></h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script src="js/scoreboard.js"></script>
</body>
</html>