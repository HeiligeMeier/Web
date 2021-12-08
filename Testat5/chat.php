<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div>
            <h1>Chat with Tom</h1>
        </div>
        <div>
            <a href="friends.html">&lt Back</a>
            |
            <a href="profile.html">Profile</a>
            |
            <a href="friends.html" class="rmvchat">Remove Friend</a>
 
        </div>
        
        <div class="horizontal_dotted_line"></div>
        
        <fieldset  id="msg-form" class="fschat">
            
            
        </fieldset>

        <div class="horizontal_dotted_line"></div>

        <div>
            <form>
                <input type="text" id="messageLabel" name="message" placeholder="New Message" class="msgchat">
                <button onclick=sendMsg() type="button" class="buttonchat">Send</button>
            </form>
        </div>
        <script>
            window.prevMsgLen = 0;
            window.msgIn= document.getElementById("messageLabel");
            window.msgForm= document.getElementById("msg-form");

            window.chatToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2ODAyNjk5fQ.8AAINKyShLmpNic_zKYaBmmffM3LqDEkaztRVl9L9CQ";
            window.chatCollectionId = "4f52c505-5f3c-4354-8365-b878a83c3896";
            window.baseURL = "https://online-lectures-cs.thi.de/chat";
        </script>
        <script src="chat.js"></script>
    </body>
</html>