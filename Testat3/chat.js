//Collection ID: 3d1a2d71-3f08-492f-8cf3-e40eed2b1d03
var TEST1 = new XMLHttpRequest();
TEST1.onreadystatechange = function () {
    if (TEST1.readyState == 4 && TEST1.status == 200) {
        let data = JSON.parse(TEST1.responseText);
        console.log(data);
    }
};
TEST1.open("GET", window.chatServer + "/" + window.chatCollectionId + "/user", true);
// Add token, e. g., from Tom
TEST1.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
TEST1.send();

window.setInterval(function(){
    console.log("Hallo Welt!");
   
},1000);
//------------------------------------------------------------------------//
/*
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 204) {
        console.log("done...");
    }
};
xmlhttp.open("POST", "https://online-lectures-cs.thi.de/chat/3d1a2d71-3f08-492f-8cf3-e40eed2b1d03/message", true);
xmlhttp.setRequestHeader('Content-type', 'application/json');
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2ODAxNjczfQ.U_QyqR3_1oZs2V-STfbF13aH7GFST8GePdYlyZRM3MA');
// Create request data with message and receiver
let data = {
    message: "Hello?!",
    to: "Jerry"
};
let jsonString = JSON.stringify(data); // Serialize as JSON
xmlhttp.send(jsonString); // Send JSON-data to server
*/