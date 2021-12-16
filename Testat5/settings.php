<?php 
//Use Model\User;
require("start.php");
if(!(isset($_SESSION['user']))){
    header("Location: login.php");
    exit();
}
if (empty($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
$username = $_SESSION['user'];
$data = $service->loadUser($username);
$user = Model\User::fromJson($data);
//var_dump($user);
//var_dump($user->jsonSerialize());




//$name="";
//$firstname="";
if(isset($_POST['eingName'])){  
    //$name = $_POST['eingName'];
    $user->setFirstname($_POST['eingName']);
    //$service->saveUser($user);
}
if(isset($_POST['eingLastName'])){  
    $user->setLastname($_POST['eingLastName']);
    //$service->saveUser($user);
}
if(isset($_POST['eingDescription'])){  
    $user->setAbout(trim($_POST['eingDescription']));
    //$service->saveUser($user);
}
if(isset($_POST['coffeeOrTea'])){  
    $user->setCoffeeOrTea($_POST['coffeeOrTea']);
    //$service->saveUser($user);
}
if(isset($_POST['radiobuttons'])){  
    $user->setChatLayout($_POST['radiobuttons']);
    $service->saveUser($user);
    header("location: friends.php");
}

$text = trim($user->getAbout());
$text=trim($text);
$auswahl=$user->getCoffeeOrTea();
//var_dump($user);


?>
<html>
    <head>
        <title>Settings</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Profile Settings</h1>
        <form method="post" action="settings.php">
            <fieldset class="field">
                <legend>Base Data</legend>  
           <div>
                <div class="basedata"><label for="name"> First Name</label>  <input name="eingName" class="input" id="name" type="text" placeholder="Your name" value="<?php if(isset($_SESSION['user'])){echo $user->getFirstname();} ?>"></div>
                <div class="basedata"><label for="lastname">Last Name</label> <input name="eingLastName" class="input" id="lastname" type="text" placeholder="Your surname" value="<?php if(isset($_SESSION['user'])){echo $user->getLastname();} ?>"></div>
                <div class="basedata">
                Coffee or Tea? 
            <select name="coffeeOrTea" class="input" id="select" <?php if(isset($_SESSION['user'])){echo $user->getCoffeeOrTea();}  ?>>
                <option value="1" <?php if('1'==$auswahl){echo 'selected="selected"';}?>>Coffee</option>
                <option value="2" <?php if('2'==$auswahl){echo 'selected="selected"';}?>>Tea</option>
                <option value="3" <?php if('3'==$auswahl){echo 'selected="selected"';}?>>Neither nor</option>
            </select></div>
            </div>
            </fieldset>

            <fieldset class="field" id="tsay">
                <legend>Tell Something About You</legend>
                <div>
                    <textarea name="eingDescription" id="comment" placeholder="Write something here..."><?php if(isset($_SESSION['user'])){echo trim($user->getAbout());} ?>
                    </textarea>
                </div>
            </fieldset>
            
            <fieldset class="field">
                <legend>Prefered Chat Layout</legend>
            <div>
                <input type="radio" name="radiobuttons" <?php if('opt1' == $user->getChatLayout()){echo 'checked="checked"';} ?> value="opt1" id="opt1"><label for="opt1">Username and message in one line</label>
                <br>
                <input type="radio" name="radiobuttons" <?php if('opt2' == $user->getChatLayout()){echo 'checked="checked"';} ?> value="opt2" id="opt2"><label for="opt2">Username and message in separated lines</label>
            </div>
            </fieldset>
            <a href="friends.php">
                <button class="cancel" type="button">Cancel</button>
            </a>
            <a href="friends.php">
                <button class="save" type="submit">Save</button>
            </a>
        </form>

        
    </body>
</html>