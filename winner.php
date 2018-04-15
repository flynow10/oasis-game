<?php
$filename = 'game-over.json';
$somecontent = "{ \"gameOver\" : true, \"winningAvatar\" : \"".htmlentities(str_rot13($_GET["avatar"]))."\" }";
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
</head>
<body>
    <h1 style="text-align : center;">Congratulations <?php
    echo(htmlentities(str_rot13($_GET["avatar"])));
    ?> you have found the easter egg!
    </h1>
    <br>
    <h2 style="text-align : center;">Thank you for playing my game.</h2>
    <h3 style="text-align : center; color : black;"><a style="color : black;" href="/oasis/DoNOTopenUntilYourHome.pdf">Claim your prize</a></h3>
</body>
</html>