<?php

require("start.php");
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
            ?>
                    <p class="pfriends" id="p1friends">
                        <?php // Query Manipulation
                        $chatQuery = 'chat.php?username=' . $friendName;
                        //echo $chatQuery // href="chat.php" <?php $_GET['username'] = $friendName ? ?> 
                        <li> <a id="afr" href="<?php "chat.php" . "?username=" . $friendName ?>">
                                <?php echo $friendName; ?>
                                <span class="listspanfriend" id="listspan1friend"> 0
                                    <?php // Unread Messages 
                                    ?> </span></a> </li>
                    </p>
            <?php }
            }
            ?>
        </ul>
    </fieldset>
    </p>
    <div class="horizontal_dotted_line"></div>

    <!-- Freundesanfragen -->
    <h2>New Requests</h2>
    <ol style="list-style-type:decimal">
        <?php
        foreach ($service->loadFriends($_SESSION['user']) as $value) {
            if ($value->status == "requested") {
        ?>
                <li><a href="" id="lifriends">Friend request from <span id="spanfriends">
                            <?php echo $value->username; ?> </span></a></li>
        <?php }
        }
        ?>
    </ol>
    <div class="horizontal_dotted_line"></div>


    <!-- Freund hinzufügen -->
    <form action="">
        <!-- onkeyup="keyup(this)" -->
        <input type="text" id="addfriend" name="addFriend" list="namen" placeholder="Add friend to List" onkeyup="keyup(this)">
        <datalist id="namen"></datalist>
        <Button id="addbutton" name="submit" value="Add">Add</Button>
    </form>
</body>

</html>