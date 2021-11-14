
function getUsernames(names) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            // console.log(data);
            names = data;
        }
    };
    // Collection id und Bearer muss angepasst werden 
    xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/870f0156-7cdc-4ce8-885d-b4f05ee6a49e/user", true);
    // Add token, e. g., from Tom
    xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTM4MDQyfQ.qg4H3u18X2wuExSWQ_U1DkmVZnqswj9Z4plNbn5GXlg');
    xmlhttp.send();
    return ["Tom", "Jerry"];
}

// Konsanten
const nameList = getUsernames();
const list = document.getElementById('namen');
const eingabe = document.getElementById('addfriend');


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
        if (eingabe.value == names[i]) {
            // alert("User added!");
            return true;
        }
        i++;
    } 
    alert("Username invalid!");
    return false;
}

initNames('');