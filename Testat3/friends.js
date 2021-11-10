// Collection ID: 870f0156-7cdc-4ce8-885d-b4f05ee6a49e //

// Codevorgaben //

// Macht erstmal keinen Sinn //

window.chatToken = "...";
window.chatCollectionId = "870f0156-7cdc-4ce8-885d-b4f05ee6a49e";
window.chatServer = "https://online-lectures-cs.thi.de/chat";

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    let data = JSON.parse(xmlhttp.responseText);
    console.log(data);
}
};

// Chat Server URL und Collection ID als Teil der URL
xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId +
"/user", true);
// Das Token zur Authentifizierung, wenn notwendig
xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
xmlhttp.send();


// ... //