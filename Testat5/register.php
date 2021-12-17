<?php
require("start.php");


if(isset($_POST['submit']) && $_POST['submit'] === 'register') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];
    $errors = array();

    if(strlen($username) < 3) {
        $errors[] = "Username is too short";
    }
    
    if(strlen($password) < 8) {
        $errors[] = "Password is too short";
    }
    
    if(strcmp($password, $confirm) !== 0) {
        $errors[] = "Confirmed Password is incorrect.";
    }
    
    if ($service->userExists($username)) {
        $errors[] = "Username is already taken.";
    }

    if(count($errors) > 0) {
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>" . $error . "</li>";
        }
        echo "</ul>";
    } 

    if(count($errors) == 0) {
        $service->register($username, $password);
        $_SESSION['user'] = $username;
        header("Location: friends.php");
        echo "Register successful";
    }
}

?>
<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        
    </head>
    <body>
        <img src="images/user.png" width="150" height="150" class="image">
        <div>
            <h1 class="h1register">Register yourself</h1>
        </div>
        <form id="formsubmit" method="post">
            <fieldset class="fsregister">
                <legend class="legregister">Register</legend>

                <label for="usernameLabel" class="labelregister">Username</label>
                <input type="text" id="usernameLabel" name="username" placeholder="Username" required class="nameregister"><br>

                <label for="passwordLabel" class="labelregister">Password</label>
                <input type="password" id="passwordLabel" name="password" placeholder="Password" required class="pwregister"><br>

                <label for="confirmLabel" class="labelregister">Confirm Password</label>
                <input type="password" id="confirmLabel" name="confirm" placeholder="Confirm Password" required class="pwregister"><br>

            </fieldset>
            <div class=buttondiv>
                <button type="submit" class="button2" id="createButton" name="submit" value="register">create account</button>  
            </div>
        </form>
        <div class="buttondiv">
            <a href="login.php"><button class="button1" formnovalidate>cancel</button></a>
        </div>
        <script>
            window.chatCollectionId = "<?= CHAT_SERVER_ID ?>";
            window.chatServer = "<?= CHAT_SERVER_URL ?>";
        </script>
    </body>
</html>
