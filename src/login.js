window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the form values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Perform form validation
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Perform further processing (e.g., send the form data to the server for authentication)
        // ...

        // Reset the form fields
        form.reset();
    });
});
