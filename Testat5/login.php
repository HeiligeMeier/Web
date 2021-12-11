require("start.php");
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="style.css">    
    </head>
    <body>
        <form action="" method="post">

            <!-- Bild und Überschrift -->
            <img src="images/chat.png" alt="Chat Symbol" width="150" height="150" class="imageLogin" >
            <h1 id="h1Login">Please sign in</h1>

            <!-- Login-Formular -->
            <fieldset class="fieldsetLogin">
                <legend>Login</legend>

                <label for="usernameLogin" class="labellogin">Username</label>
                <input type="text" id="usernamelogin" class="usernamelogin"
                    name="Username" placeholder="Username" > <br>
        
                <label for="passwordLogin" class="labellogin">Password</label>
                <input type="password" id="passwordlogin" class="passwordlogin"
                    name="Password" placeholder="Password" >
            
            </fieldset>
                <!-- Buttons mit Links -->
                <div class="divbutlog">
                    <a href="register.html"> <button type="button" class="logbutton" formnovalidate id="logbuttonreg">Register</button> </a>
                    <button type="submit" formaction="friends.html" class="logbutton" id="logbuttonlog">Login</button> 
                </div>
            </form>  
    </body>
</html>