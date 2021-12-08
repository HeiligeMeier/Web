<html>
    <head>
        <title>Settings</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Profile Settings</h1>
        <form>
            <fieldset class="field">
                <legend>Base Data</legend>  
           <div>
                <div class="basedata"><label for="name"> First Name</label>  <input class="input" id="name" type="text" placeholder="Your name"></div>
                <div class="basedata"><label for="lastname">Last Name</label> <input class="input" id="lastname" type="text" placeholder="Your surname"></div>
                <div class="basedata">
                Coffee or Tea? 
            <select class="input" id="select">
                <option>Coffee</option>
                <option>Tea</option>
                <option selected>Neither nor</option>
            </select></div>
            </div>
            </fieldset>

            <fieldset class="field" id="tsay">
                <legend>Tell Something About You</legend>
                <div>
                    <textarea id="comment" placeholder="Leave a comment here"></textarea>
                </div>
            </fieldset>
            
            <fieldset class="field">
                <legend>Prefered Chat Layout</legend>
            <div>
                <input type="radio" name="radiobuttons" id="opt1"><label for="opt1">Username and message in one line</label>
                <br>
                <input type="radio" name="radiobuttons" id="opt2"><label for="opt2">Username and message in separated lines</label>
            </div>
            </fieldset>
            <a href="friends.html">
                <button class="cancel" type="button">Cancel</button>
            </a>
            <button class="save" type="submit">Save</button>
        
        </form>

        
    </body>
</html>