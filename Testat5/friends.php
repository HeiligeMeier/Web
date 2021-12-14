<?php

use Model\Friend;

require("start.php");
$friendsCount = 0;

// man kann nicht mehr direkt auf die friendlist
if (isset($_SESSION['user'])) {
} else {
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
$userExists;
$addError = "";
$addedCor = "";
if (isset($_POST['action']) && $_POST['action'] === 'add-friend') {
    $addError = "";
    foreach ($service->loadFriends($_SESSION['user']) as $name) {
        if ($name->username == $_POST['addFriend']) {
            $userExists = true;
        }
    }
    if ($userExists == true) {
        $newFriend = new Friend($name->username, "requested");
        $service->friendRequest($newFriend);
        // var_dump($newFriend);
        $addedCor = "Added Successfully";
    } else {
        $addError = "User does not exist";
    }
}


// ist standartmäßig 1, sollte aber token rein
// echo $_SESSION['chat_token'];
?>
<html>

<head>
    <title>Friends</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <h1> <?php echo $_SESSION['user'] ?>'s Friends</h1>
    <a onclick="Javascript:window.location.href = 'logout.php'"> &lt; Logout</a> |
    <a onclick="Javascript:window.location.href = 'settings.php'"> Settings</a> <br>
    <div class="horizontal_dotted_line"></div>
    <p>
        <!-- Freundesliste a-->
    <fieldset class="fsfriends">
        <ul class="listfriends">
            <?php
            foreach ($service->loadFriends($_SESSION['user']) as $value) {
                // var_dump($value->status);

                if ($value->status == "accepted") {
                    $friendName = $value->username;
                    $friendsCount += 1;
            ?>
                    <p class="pfriends" id="p1friends">
                        <?php // Query Manipulation
                        $chatQuery = 'chat.php?username=' . $friendName;
                        //echo $chatQuery // href="chat.php" <?php $_GET['username'] = $friendName ? 
                        ?>
                        <li> <a id="afr" href="<?php echo "chat.php" . "?username=" . $friendName ?>">
                                <?php echo $friendName; ?>
                                <span class="listspanfriend" id="listspan1friend"> 0
                                    <?php // Unread Messages 
                                    ?> </span></a> </li>
                    </p>
            <?php }
            }
            ?>
            <div>
                <?php
                if ($friendsCount < 1) {
                    echo "Friendlist is empty!";
                }
                ?>
            </div>
        </ul>
    </fieldset>
    </p>
    <div class="horizontal_dotted_line"></div>

    <!-- Freundesanfragen -->
    <h2>New Requests</h2>
    <ol style="list-style-type:decimal">
        <?php
        foreach ($service->loadFriends($_SESSION['user']) as $value) {

            // Buttonhandler
            if (isset($_POST['accept']) && $_POST['accept'] === 'acceptButton') {
                $newFriend = new Friend($value->username, "accepted");
                $service->friendAccept($newFriend);
            }
            if (isset($_POST['dismiss']) && $_POST['dismiss'] === 'dismissButton') {
                $newFriend = new Friend($value->username, "");
                $service->friendAccept($newFriend);
            }

            if ($value->status == "requested") {
        ?>
                <li><a href="" id="lifriends">Friend request from <span id="spanfriends">
                            <?php echo $value->username; ?> </span></a>
                    <button name="accept" value="acceptButton">Accept</button>
                    <button name="dismiss" value="dismissButton">Dismiss</button>
                </li>
        <?php }
        }
        ?>
    </ol>
    <div class="horizontal_dotted_line"></div>

    <div style="color: red; padding-bottom: 2px;" id="fehlerDiv">
        <?= $addError . "<br>" . $addedCor ?>
    </div>
    
    <!-- Freund hinzufügen -->
    <form action="friends.php" method="post">
        <input type="text" id="addfriend" name="addFriend" list="namen" placeholder="Add friend to List">
        <datalist id="namen"></datalist>
        <Button type="submit" id="addbutton" name="action" value="add-friend">Add</Button>
    </form>
    <script>
        window.chatToken = "<?= $_SESSION['chat_token'] ?>";
        window.chatCollectionId = "<?= CHAT_SERVER_ID ?>";
        window.chatServer = "<?= CHAT_SERVER_URL ?>";
    </script>
</body>

</html>