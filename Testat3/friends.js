function getUsernames() {
    var usernames = [];
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
 
        
            arrayString = JSON.stringify(data);
            splitArray = arrayString.split('"');
            for (var i = 1; i < splitArray.length; i += 2) {
                usernames.push(splitArray[i]);
            }
            
            
            
            console.log(usernames);
        }
    };
    xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/870f0156-7cdc-4ce8-885d-b4f05ee6a49e/user", true);
    // Add token, e. g., from Tom
    xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTM4MDQyfQ.qg4H3u18X2wuExSWQ_U1DkmVZnqswj9Z4plNbn5GXlg');
    xmlhttp.send();

    // return usernames gibt undefined? wieso (äußere Function kennt )
    // in Zeile 15 gibt es ein Array zurück
    // return["Tom", "Jerry"] ;

    console.log(usernames);
    return usernames;
}

// Deklaration
const nameList = getUsernames();
const list = document.getElementById('namen');
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