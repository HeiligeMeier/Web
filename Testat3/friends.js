// Collection ID: 870f0156-7cdc-4ce8-885d-b4f05ee6a49e

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let data = JSON.parse(xmlhttp.responseText);
        console.log(data);
    }
};
// Collection id und Bearer muss angepasst werden 
xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/870f0156-7cdc-4ce8-885d-b4f05ee6a49e/user", true);
// Add token, e. g., from Tom
xmlhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTM4MDQyfQ.qg4H3u18X2wuExSWQ_U1DkmVZnqswj9Z4plNbn5GXlg');
xmlhttp.send();


/*
click.onclick('click', function(){
    let datalist = document.createElement("datalist")
    document.body.appendChild(datalist);
});
*/

addfriend.setAttrbute('onclick', 'myFunction()');
myFunction() {
    datalist = ' ';
    let datalist = document.createElement("datalist")
    document.body.appendChild(datalist);
}
// addfriend.setAttrbute('onclick', myFunction);

// Laden aller Nuzernamen 
addfriend.addEventListener('keyup', function() {
    consolge.log(addfriend.value);
});

// onclick handler evtl. für autovervollständigung

// für registrieren roter kasten

// .eingabe:focus-visible {
//      outline: 1px solid;
//  }

// Friendlist:

// startsWith hilfreich
// for(input)
// for(eingabe.value.startsWith())
// <input type"text" placeholder="Präfix eingeben" list="namen" onkeyup="keyup(this)">
// <datalist id="namen"><datalist>