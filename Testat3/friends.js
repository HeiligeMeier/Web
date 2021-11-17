window.chatCollectionId = '245e5db0-d33f-41e8-8aef-33e5d1caf9d1';
        window.chatServer = "https://online-lectures-cs.thi.de/chat";
        window.chatToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MDkxNzY4fQ.s68jjWZCECuv9MxYqHDinIPxv10jmNtb_h1ZYh78U_A';
/*     
function getUsernames(names) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function readyState() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        var usernames = [];
        let data = JSON.parse(xmlhttp.responseText);
        names = data;
        arrayString = JSON.stringify(data);
        splitArray = arrayString.split('"');
        for (var i = 1; i < splitArray.length; i += 2) {
            usernames.push(splitArray[i]);
        }
        console.log(usernames);
        return usernames;
    }
};
    xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId + "/user", true);
    // Add token, e. g., from Tom
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
    xmlhttp.send();
    alert("Warten");
    return ["Tom", "Jerry"];
}
*/
function getUsernames() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function readyState() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // callback(xmlhttp.responseText);
        }
    };         
    xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId + "/user", true);
    // Add token, e. g., from Tom
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
    xmlhttp.send();
    return ["Tom", "Jerry"]; 
}

const list = document.getElementById('namen');
var nameList = getUsernames();
getUsernames((text) => {
    var usernames = [];
    let data = JSON.parse(text);
    arrayString = JSON.stringify(data);
    splitArray = arrayString.split('"');
    for (var i = 1; i < splitArray.length; i += 2) {
        usernames.push(splitArray[i]);
    }
    nameList = data;
    console.log(nameList);

});

console.log(nameList);

// Deklaration
const eingabe = document.getElementById('addfriend');

// ListeAktualisierung
function initNames(prefix) {
    if (nameList.length != getUsernames().length) {
        for (var i = getUsernames().length; i > nameList.length; i--) {
            var option = document.createElement('option');
            // geht das?
            option.value = getUsernames()[i];
            list.appendChild(option);
        }
    } else { 
        nameList.forEach(function(name) {
            if (prefix === ' ' || name.startsWith(prefix)) {
                var option = document.createElement('option');
                option.value = name;
                list.appendChild(option);
            }
        });   
    }
}

// Aktualisierungskontrolle
function keyup(input) {
    const prefix = input.value; 
    if (nameList.length != getUsernames().length) {
        initNames(prefix);
    }
}

// Kontrolle ob Username vorhanden ist
function validateForm() {
    var i = 0;
    while(i < nameList.length) {
        if (eingabe.value == nameList[i]) {
            return true;
        }
        i++;
    } 
    alert("Username invalid!");
    return false;
}

initNames('');