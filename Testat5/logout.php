<?php 
    require("start.php"); 
    session_unset();
?> 
<html>
    <head>
        <title>Logout</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <img src="images/logout.png" alt="logout image cannot be shown" width="20%" class="imagelogout">
        <h1 id="h1logout">Logged out...</h1>
        <p id="plogout">
            See u!
        </p>
        <div class="logoutdiv">
            <a onclick="Javascript:window.location.href = 'login.php'"  class="alogout">Login again</a>
        </div>
    </body>
</html>