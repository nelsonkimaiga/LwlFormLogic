$(document).ready(function () {

    // register CHA::
    const registerChaFormElement = document.getElementById("cha-register-form");
    const cha_name = document.getElementById("cha_name");
    const cha_email = document.getElementById("cha_email");
    const cha_password = document.getElementById("cha_password");
    const cha_facility = document.getElementById("cha_facility");


    //Add event listener:
    registerChaFormElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
        validateChaRegistration();
    });

    function validateChaRegistration() {

        //some form validation
        if (cha_name.value == null || cha_name == "") {
            alert("Name must be filled out");
            return false;
        }
        if (cha_email.value == null || cha_email.value == "") {
            alert("email must be filled out");
            return false;
        }
        if (cha_password.value == null || cha_password.value == "") {
            alert("password must be filled out");
            return false;
        } 
        if (cha_facility.value == null || cha_facility.value == "") {
            alert("Facility must be selected");
            return false;
        } else {

            // make an API call to back-end to validate registration:

            const data = {
                name: cha_name.value,
                email: cha_email.value,
                password: cha_password.value,
                facility: cha_facility.value,
                userType: "CHA"
            };

            let requestBody = JSON.stringify(data);
            console.log('requestBody', requestBody);

            fetch("https://55bc-102-219-208-30.ngrok.io/lwala/add-cha/", {
                    method: 'POST',
                    body: requestBody,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: 'cors'
                })
                .then((response) => response.json())
                .then((result) => {
                    console.log("Success:", result);
                    alert("CHA Saved Successfuly");
                    document.getElementById("cha-register-form").reset();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        }
    }

});