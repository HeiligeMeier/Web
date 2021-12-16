<?php
require("start.php");
if(!(isset($_SESSION['user']))){
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
var_dump($_SESSION['user']);

?>

<html>
    <head>
        <title>Profile</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Profile of Tom</h1>
        <a href="chat.php"> &lt Back to Chat </a>
        <span>|</span>
        <a class="rmvchat" href="friends.php">Remove Friend</a><br>
        <div class="content">
        <img id="pb" src="images/profile.png">
        <p class="aboutTextCss">
                
                
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                
                <br>
                <br>
                <label class="frage">Coffe or Tea?</label><br>
                <label class="antwort">Tea</label><br>
                <label class="frage">Name</label><br>
                <label class="antwort">Thomas</label><br>
            </p>
        </div>    
    </body>
</html>