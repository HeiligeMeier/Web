<?php
use Model\Friend;
require("start.php");
if(!(isset($_SESSION['user']))){
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}


//$friends= $service->loadFriends($_SESSION['user']);
//var_dump($friends);

if((!($friendName = $_GET["friendName"])=="")){
    $data = $service->loadUser($friendName);
    $user = Model\User::fromJson($data);
    $friendAlt = new Friend($friendName);
}else{
    header("Location: friends.php");
}

//removeFriend
if(isset($_POST['rmv']) && $_POST['rmv'] === 'rmvfriend') {
    $service->friendRemove($friendAlt);
    header("Location: friends.php");
}

?>

<html>
    <head>
        <title>Profile</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Profile of <?php echo $user->getUsername();?></h1>
        <a href="<?php echo "chat.php" . "?username=" . $friendName ?>"> &lt Back to Chat </a>
        <span>|</span>
        <form method="post" class="rmvform"><button type="submit" class="looklikelink" name="rmv" value="rmvfriend">Remove Friend</button></form>><br>
        <div class="content">
        <img id="pb" src="images/profile.png">
        <p class="aboutTextCss">
                <?php echo $user->getAbout();?>
                
                <br>
                <br>
                <label class="frage">Coffee or Tea?</label><br>
                <label class="antwort">
                    <?php 
                        $CoT = $user->getCoffeeOrTea();
                        if($CoT=="1"){
                            echo "Coffee";
                        }else if($CoT=="2"){
                            echo "Tea";
                        }else{
                            echo "Neither nor";
                        }
                    ?>
                </label><br>
                <label class="frage">Name</label><br>
                <label class="antwort"><?php echo $user->getFirstname() ." ". $user->getLastname();?></label><br>
            </p>
        </div>    
    </body>
</html>