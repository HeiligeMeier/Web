//Collection ID: 3d1a2d71-3f08-492f-8cf3-e40eed2b1d03
/*var previousMessageLength=0;
//var abc="";
//getEingabe();
var abc = function(){
    var eingtext = document.getElementById("messageLabel");
    let message= eingtext.innerText;
    return message;
};
*/
function appendMsg(sender, msg, time){
    const ts = new Date(time);
    window.msgForm.innerHTML += `<p> ${sender}:
    ${msg} <span style="float:right">${ts.toLocaleTimeString()}</span></p>`
}

setInterval(() => {
    const xmlhttp = new XMLHttpRequest();
//console.log(TEST1.responseText);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const res = JSON.parse(xmlhttp.responseText);
        //console.log(res);
        const msgLen = res.length;
        for(var i=window.prevMsgLen;i <msgLen;i++){
        
        if(msgLen > window.prevMsgLen){
        var sender = res[i].from;
        var msg = res[i].msg;
        var time = res[i].time;
            appendMsg(sender, msg,time);

        }  
         
    }
    window.prevMsgLen=msgLen;
   /*
        
        //for-schleife über result startet bei window.msglenth bis reslength
        //messLength = res.length  
        console.log(data);*/
    }
};
xmlhttp.open("GET", window.baseURL + "/" + chatCollectionId +"/message/Jerry",true);
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
xmlhttp.send();
},1000);

//------------------------------------------------------------------------//

function sendMsg(){
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 204) {
        console.log("done...");
    }
};
xmlhttp.open("POST", window.baseURL + "/" + chatCollectionId +"/message", true);
xmlhttp.setRequestHeader('Content-type', 'application/json');
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2ODAyNjk5fQ.8AAINKyShLmpNic_zKYaBmmffM3LqDEkaztRVl9L9CQ');
// Create request data with message and receiver
let data = {
   "message": window.msgIn.value,
    "to": "Jerry"
};
let jsonString = JSON.stringify(data); // Serialize as JSON
xmlhttp.send(jsonString); // Send JSON-data to server
console.log(jsonString);
window.msgIn.value="";

//document.getElementById("1").innerText = data.message;

}
