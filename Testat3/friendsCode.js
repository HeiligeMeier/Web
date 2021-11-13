// Collection ID: 870f0156-7cdc-4ce8-885d-b4f05ee6a49e

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        console.log(data);
    }
};
// Collection id und Bearer muss angepasst werden 
xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/870f0156-7cdc-4ce8-885d-b4f05ee6a49e/user", true);
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTM4MDQyfQ.qg4H3u18X2wuExSWQ_U1DkmVZnqswj9Z4plNbn5GXlg');
xmlhttp.send();

const test = ['Tom', 'Jerry'];
datalist.innerHTML = ' ';

function initNames(prefix) {
    const datalist = document.getElementsByClassName('');

    for (let name of test) {
        if (prefix === ' ' || name.startsWith(prefix)) {
            const option = document.createElement('option');
            option.value = name;
            datalist.appendChild(option);
        }
    }
}

function keyup(inp) {
    const prefix = inp.value;
    initNames(prefix);
}


// Laden aller Nuzernamen 
/*
addfriend.addEventListener('keyup', function() {
    consolge.log(addfriend.value);
});
*/

// Friendlist:

// startsWith hilfreich
// for(input)
// for(eingabe.value.startsWith())
// <input type"text" placeholder="Präfix eingeben" list="namen" onkeyup="keyup(this)">
// <datalist id="namen"><datalist>