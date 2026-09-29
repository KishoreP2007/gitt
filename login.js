function login(event) {

    // Stop the form from refreshing the page
    event.preventDefault();


    // Get input values

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    // Check whether fields are filled

    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;
    }


    // Create login session

    sessionStorage.setItem("loggedIn", "true");

    sessionStorage.setItem("username", username);


    // Open home page

    window.location.href = "home_page.html";

}

