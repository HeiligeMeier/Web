<?php 
    require("start.php"); 
    // man kann nicht mehr direkt auf die friendlist
    /*if (!isset($_SESSION['user'])) {
        header("Location: login.php");
        exit();
    } 
    if (empty($_POST['user'])) {
        header("Location: login.php");
        exit();
    }
    */
    echo $_SESSION['chat_token'];
?> 
<html>
    <head>
        <title>Friends</title>
      <link rel="stylesheet" type="text/css" href="style.css"> 
    </head>
    <body>
        <h1>Friends</h1>
        <a onclick="Javascript:window.location.href = 'logout.php'" > &lt; Logout</a> |
        <a onclick="Javascript:window.location.href = 'settings.php'" > Settings</a> <br>
        <div class="horizontal_dotted_line"></div> 
        <p>
            <!-- Freundesliste a-->
            <fieldset class="fsfriends">
                <ul class="listfriends">
                    <p class="pfriends" id="p1friends"> <li> <a id="afr" >Tom  
                        <span class="listspanfriend" id="listspan1friend">3</span></a> </li> </p>
                    <p class="pfriends" id="p2friends"> <li> <a id="afr" >Marvin 
                        <span class="listspanfriend" id="listspan2friend">1</span></a> </li> </p>
                    <p class="pfriends" id="p3friends"><li> <a id="afr" href="chat.html">Tick</a> </li></p>
                    <p class="pfriends" id="p4friends"><li> <a id="afr" href="chat.html">Trick</a> </li></p>
                </ul>    
            </fieldset>
        </p>
        <div class="horizontal_dotted_line"></div>
        
        <!-- Freundesanfragen -->
        <h2>New Requests</h2> 
        <ol style="list-style-type:decimal">
            <li><a href="" id="lifriends">Friend request from <span id="spanfriends">Track</span></a></li>
        </ol>    
        <div class="horizontal_dotted_line"></div>

        <!-- Freund hinzufügen -->
        <form action="profile.html" onsubmit="return validateForm();">
            <!-- onkeyup="keyup(this)" --> 
            <input type="text" id="addfriend" list="namen" placeholder="Add friend to List" onkeyup="keyup(this)"> 
            <datalist id="namen"></datalist>
            <Button id="addbutton">Add</Button>
        </form>
    </body>
</html>