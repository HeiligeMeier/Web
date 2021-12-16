<?php

use Model\User;
use Model\Friend;

require(start.php);



if (isset($_SESSION['user'])) {
} else {
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}

$friendName = $_GET["friend"];

if ($partner = "") {
    header("Location: friends.php");
    exit()
}

$msg = $_POST['message'];
$friend = new User($friendName); 

if(isset($_POST['submit']) && $_POST['submit'] === 'send')) {
    $service->sendMessage($msg, $friend);
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
            <a href="profile.php">Profile</a>
            |
            <a href="friends.php" class="rmvchat">Remove Friend</a>
 
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
