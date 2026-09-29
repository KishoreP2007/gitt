// Check login session

if (sessionStorage.getItem("loggedIn") !== "true") {

    window.location.href = "index.html";

}


// Display username

const username =
    sessionStorage.getItem("username");

if (username) {

    document.getElementById("username").textContent =
        username;

}


// Logout

function logout() {

    // Remove session

    sessionStorage.removeItem("loggedIn");

    sessionStorage.removeItem("username");


    // Return to login

    window.location.href = "index.html";

}


// Cloud selection

function selectCloud(cloud) {

    alert("You selected " + cloud);

}