$(document).ready(function () {

    // login logic::

    // read the form fields:
    const loginFormElement = document.getElementById("login-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    //Add event listener:

    loginFormElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
        fillArray();
        validateLogin();
    });

    // print values to console:
    function fillArray() {
        console.log("do something with " + email.value);
    }

    // validate login::
    function validateLogin() {
        if (email.value == "admin@lwalaformlogic.com" && password.value == "password") {

            console.log("Logged in as super admin");

            // redirect to register CHA webpage:
            location.href = "register_cha.html";

        } else{

            // Now make an API call to back-end to validate login:

            const formData = new FormData();

            const loginEmail = email.value;
            const loginPassword = password.value;

            formData.append('email', loginEmail);
            formData.append('password', loginPassword);

            for (const value of formData.values()) {
                console.log(value);
            }

            fetch('http://localhost:8080/api/login/', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

    }


});