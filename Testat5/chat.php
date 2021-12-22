<?php

use Model\User;
use Model\Friend;

require("start.php");



if (isset($_SESSION['user'])) {
} else {
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}

$friendName = $_GET["username"];

if ($partner = "") {
    header("Location: friends.php");
    exit();
}


$friend = new User($friendName); 
$friendAlt = new Friend($friendName);

if(isset($_POST['submit']) && $_POST['submit'] === 'send') {
    $msg = $_POST['message'];
    $service->sendMessage($msg, $friend);
}

//removeFriend
if(isset($_POST['rmv']) && $_POST['rmv'] === 'rmvfriend') {
    $service->friendRemove($friendAlt);
    header("Location: friends.php");
}


?>


<html>
    <head>
        <title>Chat</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div>
            <h1>Chat with <?php echo $friendName ?></h1>
        </div>
        <div>
            <a href="friends.php">Back</a>
            |
            <a href="<?php echo "profile.php". "?friendName=" . $friendName ?>">Profile</a>
            |
            <form method="post" class="rmvform"><button type="submit" class="looklikelink" name="rmv" value="rmvfriend">Remove Friend</button></form>
 
        </div>
        
        <div class="horizontal_dotted_line"></div>
        
        <fieldset  id="msg-form" class="fschat">
            <?php
            foreach ($service->listMessages($friend) as $value) {
                echo $value->from
            ?>
                <span>:</span>
            <?php
                echo $value->msg
            ?>
                <span class="timechat">
            <?php
                $time = $value->time;
                //echo date("m-d H:i:s", $time)
                echo $value->time
            ?>    
                </span>
                <br>
            <?php
            }    
            ?>
            
        </fieldset>

        <div class="horizontal_dotted_line"></div>

        <div>
            <form method="post">
                <input type="text" id="messageLabel" name="message" placeholder="New Message" class="msgchat">
                <button type="submit" class="buttonchat" name="submit" value="send">Send</button>
            </form>
        </div>
        <script>
            window.chatToken = "<?= $_SESSION['chat_token'] ?>";
            window.chatCollectionId = "<?= CHAT_SERVER_ID ?>";
            window.chatServer = "<?= CHAT_SERVER_URL ?>";
        </script>
    </body>
</html>
