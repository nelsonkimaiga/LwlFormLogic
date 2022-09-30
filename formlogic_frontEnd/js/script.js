$(document).ready(function () {

    // read the form fields:
    const loginFormElement = document.getElementById("login-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const userType = document.getElementById("user-type");

    //Add event listener:
    loginFormElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
        validateLogin();
    });

    // validate login::
    function validateLogin() {
        // super-admin login:
        if (
            email.value == "admin@lwalaformlogic.com" &&
            password.value == "password"
        ) {
            console.log("Logged in as super admin");
            // redirect to register CHA webpage:
            location.href = "register_cha.html";

        } else {
            // Now make an API call to back-end to validate login:

            const data = {
                email: email.value,
                password: password.value,
                userType: userType.value
            };

            let requestBody = JSON.stringify(data);
            console.log('requestBody', requestBody);

            fetch("https://55bc-102-219-208-30.ngrok.io/lwala/login", {
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
                    alert("Logged in Successfuly");

                    // check user who is loggin in:
                    if (result.userType == "CHA") {

                        // Redirect to approvals page:
                        location.href = "https://google.com";

                    } else {
                        //redirect user to request form -> CHW::
                        location.href = "request.html";
                    }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

    }

});

function makeRequest() {

const addRequestFormElement = document.getElementById("request-form");

  const chafacility = document.getElementById("cha_facility");
  const supervising_cha = document.getElementById("supervising_cha");
  const malaria_quantity = document.getElementById("malaria_quantity");
  const fp_quantity = document.getElementById("fp_quantity");
  const zinc_quantity = document.getElementById("zinc_quantity");

  addRequestFormElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
    makeRequest();
  });

  
    const data = {
      healthFacility: chafacility.value,
      supervisingCHA: supervising_cha.value,
      malariaQuantity: malaria_quantity.value,
      familyPlanningQuantity: fp_quantity.value,
      zincTabletsQuantity: zinc_quantity,
    };

    let requestBody = JSON.stringify(data);
    console.log("requestBody", requestBody);

    fetch("https://55bc-102-219-208-30.ngrok.io/lwala/make-request", {
      method: "POST",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("Your Request was made Successfully!");
        document.getElementById("cha-register-form").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }