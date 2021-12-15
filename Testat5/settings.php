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
    $user->setAbout($_POST['eingDescription']);
    //$service->saveUser($user);
}
if(isset($_POST['coffeeOrTea'])){  
    $user->setCoffeeOrTea($_POST['coffeeOrTea']);
    //$service->saveUser($user);
}
if(isset($_POST['radiobuttons'])){  
    $user->setChatLayout($_POST['radiobuttons']);
    //$service->saveUser($user);
}
$service->saveUser($user);
var_dump($user);

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
            <select name="coffeeOrTea" class="input" id="select">
                <option value="1">Coffee</option>
                <option value="2">Tea</option>
                <option selected value="3">Neither nor</option>
            </select></div>
            </div>
            </fieldset>

            <fieldset class="field" id="tsay">
                <legend>Tell Something About You</legend>
                <div>
                    <textarea name="eingDescription" id="comment">
                    <?php if(isset($_SESSION['user'])){echo $user->getAbout();} ?>
                    </textarea>
                </div>
            </fieldset>
            
            <fieldset class="field">
                <legend>Prefered Chat Layout</legend>
            <div>
                <input type="radio" name="radiobuttons" <?php if(isset($radiobuttons)&&$radiobuttons=="opt1")echo "checked"; ?> value="opt1" id="opt1"><label for="opt1">Username and message in one line</label>
                <br>
                <input type="radio" name="radiobuttons" <?php if(isset($radiobuttons)&&$radiobuttons=="opt2")echo "checked"; ?> value="opt2" id="opt2"><label for="opt2">Username and message in separated lines</label>
            </div>
            </fieldset>
            <a href="friends.html">
                <button class="cancel" type="button">Cancel</button>
            </a>
            <button class="save" type="submit">Save</button>
        
        </form>

        
    </body>
</html>