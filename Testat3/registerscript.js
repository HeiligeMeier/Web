//Collection ID: fa24bd8a-3ece-4cff-be18-c0c3575d5507//
//Tom - 4c255aec - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM2NTU5MDY1fQ.0uN-Suoee-NGroElHCvj_TFsm07IX8YFwLeEgh2R5_0
//Jerry - 8fa58cf7 - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSmVycnkiLCJpYXQiOjE2MzY1NTkwNjV9.3jRxfLu7uO-NqN0520abF9Ey-wJSAmHnRl7WRQpYBTE

/*User exists
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 204) {
            console.log("Exists");
        } else if(xmlhttp.status == 404) {
            console.log("Does not exist");
        }
    }
};
xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/fa24bd8a-3ece-4cff-be18-c0c3575d5507/user/Tom", true);
xmlhttp.send();
*/

var username = document.getElementById("usernameLabel");
var password = document.getElementById("passwordLabel");
var confirmpw = document.getElementById("confirmLabel");
document.getElementById("createButton").addEventListener("submit", validateForm)


function validateForm(event) {
    //Check Username
    if(!validateUsername) {
        username.classList.remove("nameregister1");
        username.classList.add("nameregister2");
    } else {
        username.classList.remove("nameregister2");
        username.classList.add("nameregister1");
    }
    //Check Password
    if (!validatePassword) {
        password.classList.remove("pwregister1");
        password.classList.add("pwregister2");
    } else {
        password.classList.remove("pwregister2");
        password.classList.add("pwregister1");
    }
    //Check Confirm Password
    if (!validateConfirm()) {
        confirmpw.classList.remove("pwregister1");
        confirmpw.classList.add("pwregister2");
    } else {
        confirmpw.classList.remove("pwregister2");
        confirmpw.classList.add("pwregister1");
    }
    //Check if Username is taken
    if (!validateIsUsed()) {
        username.classList.remove("nameregister1");
        username.classList.add("nameregister2");
    }
    
    if(!validateUsername || !validatePassword || !validateConfirm || !validateIsUsed) {
        event.preventDefault();
        alert('Something went wrong, check your inputs.');
        return false;
    }
    return true;
}


function validateUsername() {
    var val = username.value;
    if(val.length < 3) {
        return false;
    } else {
        return true;
    }
}

function validatePassword() {
    var val = password.value;
    if(val.length < 8) {
        return false;
    } else {
        return true;
    }
}

function validateConfirm() {
    if (password.value !== confirm.value) {
        return false;
    } else {
        return true;
    }
}

function validateIsUsed() {
    var xmlhttp = new XMLHttpRequest();
    var state = false;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
          if(xmlhttp.status == 204) {
            console.log("Exists");
            state = false;
            } else if(xmlhttp.status == 404) {
            console.log("Does not exist");
            state = true;
            }
        }
    };
    xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/fa24bd8a-3ece-4cff-be18-c0c3575d5507/user/Tom", true);
    xmlhttp.send();
    return state;
}

//Element.classList
