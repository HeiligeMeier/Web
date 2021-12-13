<?php

require("start.php");
if (isset($_SESSION['user'])) {
    header("Location: friends.php");
    exit();
}
$error = "";
if (isset($_POST['submit']) && $_POST['submit'] === 'login') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($service->login($username, $password)) {
        $_SESSION['user'] = $username;
        
        header("Location: friends.php");
    } else {
        $error = "Authentification failed!";
    }
}
?>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <!-- Bild und Überschrift -->
        <img src="images/chat.png" alt="Chat Symbol" width="150" height="150" class="imageLogin">
        <h1 id="h1Login">Please sign in</h1>
        <?php if (!empty($error)) { ?>
            <div class="fehlerlogin">
                <?= $error ?>
            </div>
        <?php } ?>
        <!-- Login-Formular -->
        <form method="post">
        <fieldset class="fieldsetLogin">
                <legend>Login</legend>

                <label for="usernameLogin" class="labellogin">Username</label>
                <input type="text" id="usernamelogin" class="usernamelogin" name="username" placeholder="Username"> <br>

                <label for="passwordLogin" class="labellogin">Password</label>
                <input type="password" id="passwordlogin" class="passwordlogin" name="password" placeholder="Password">

            </fieldset>
            <!-- Buttons mit Links -->
            <div class="divbutlog">
                <a onclick="Javascript:window.location.href = 'register.php'"> <button type="button" class="logbutton" id="logbuttonreg">Register</button> </a>
                <button type="submit" class="logbutton" id="logbuttonlog" name="submit" value="login">Login</button>
            </div>
        </form>
    </body>
</html>