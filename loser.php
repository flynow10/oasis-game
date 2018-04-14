<?php
$winnerFile = file_get_contents("./game-over.json", FILE_USE_INCLUDE_PATH);
$theWinner = substr($winnerFile, 40, strlen($winnerFile) - 43);
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OASIS - Loser</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    You lost! <?php echo $theWinner; ?> is the winner.
</body>
</html>