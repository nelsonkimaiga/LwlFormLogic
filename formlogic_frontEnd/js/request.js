$(document).ready(function () {
    const select = document.querySelector("#cha_facility");
    const cha_facility = document.getElementById("cha_facility");

    select.addEventListener("change", (e) => {
        e.preventDefault();
        console.log(select.value);
        fetchChaByFacility();
    });

    //  fetchChaByFacility

    //make-request

    function fetchChaByFacility() {
        const data = {
            facility: cha_facility.value,
        };

        let requestBody = JSON.stringify(data);
        console.log("requestBody", requestBody);

        fetch("https://55bc-102-219-208-30.ngrok.io/lwala/fetchChaByFacility", {
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

                //populate the input field with the supervising CHA:

                //  var supervsingCha = document.getElementById("supervising_cha");

                document.getElementById("supervising_cha").value = result.name;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
});

// make request for commodities
function makeRequest() {

    const addRequestFormElement = document.getElementById("request-form");

    const chafacility = document.getElementById("cha_facility");
    const supervising_cha = document.getElementById("supervising_cha");
    const malaria_quantity = document.getElementById("malaria_quantity");
    const fp_quantity = document.getElementById("fp_quantity");
    const zinc_quantity = document.getElementById("zinc_quantity");

    addRequestFormElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
    });

    //validation rules::
    // check if total amount of items ordered is less than 100:

    // sum up the commodities:
    const totalAmount = parseInt(malaria_quantity.value) + parseInt(fp_quantity.value) + parseInt(zinc_quantity.value);

    // log the the sum
    console.log(`The sum is ${totalAmount}`);

    // validate:
    if (chafacility.value == null || chafacility == "") {
        alert("Facility must be selected");
        return false;
    }
    if (supervising_cha.value == null || cha_email.value == "") {
        alert("supervisor must be filled out");
        return false;
    }
    if (malaria_quantity.value == null || supervising_cha.value == "") {
        alert("Malaria quantity must be filled out");
        return false;
    }
    if (fp_quantity.value == null || fp_quantity.value == "") {
        alert("Family planning quanity must be selected");
        return false;
    }
    if (zinc_quantity.value == null || zinc_quantity.value == "") {
        alert("Zinc quantity must be selected");
        return false;
    } else {

        // now validate the total amount

        if (totalAmount > 100) {
            alert("Total amount of commodities requested exceeds 100");
            return false;
        } else {
            const data = {
                healthFacility: chafacility.value,
                supervisingCHA: supervising_cha.value,
                malariaQuantity: malaria_quantity.value,
                familyPlanningQuantity: fp_quantity.value,
                zincTabletsQuantity: zinc_quantity.value
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
                    document.getElementById("request-form").reset();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }
}