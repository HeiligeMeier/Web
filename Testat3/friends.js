
function getUsernames(names) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            // console.log(data);
            arrayString = JSON.stringify(data);
            splitArray = arrayString.split('"');
            var usernames = [];
            for (var i = 1; i < splitArray.length; i += 2) {
                usernames.push(splitArray[i]);    
            }
            names = usernames;   
            console.log(names);
        }
    };
    // Collection id und Bearer muss angepasst werden 
    xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/870f0156-7cdc-4ce8-885d-b4f05ee6a49e/user", true);
    // Add token, e. g., from Tom
    xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTM4MDQyfQ.qg4H3u18X2wuExSWQ_U1DkmVZnqswj9Z4plNbn5GXlg');
    xmlhttp.send();
    // return ["Tom", "Jerry"];
    return names;
}

// Konsanten
const nameList = getUsernames();
console.log(nameList);
const list = document.getElementById('namen');
const eingabe = document.getElementById('addfriend');

console.log();

// ListeAktualisierung
function initNames(prefix) {
    nameList.forEach(function(name) {
        if (prefix === ' ' || name.startsWith(prefix)) {
            var option = document.createElement('option');
            option.value = name;
            list.appendChild(option);
        }
    });
}

// Aktualisierungskontrolle
function keyup(input) {
    const prefix = input.value; 
    if (nameList.length != getUsernames().length) {
        initNames(prefix);
    }
}

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