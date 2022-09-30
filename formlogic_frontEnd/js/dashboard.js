$(document).ready(function () {

    loadRequests();

    function loadRequests() {
        // fetch the JSON Data:
        fetch("https://55bc-102-219-208-30.ngrok.io/lwala/fetch-requests", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);

                var data = result;
                append_json(data);

                //this function appends the json data to the table
                function append_json(data) {
                    var table = document.getElementById('requests_table');
                    data.forEach(function (object) {
                        var tr = document.createElement('tr');
                        tr.innerHTML = '<td>' + object.requestDate + '</td>' +
                            '<td>' + object.supervisingCHA + '</td>' +
                            '<td>' + object.healthFacility + '</td>' +
                            '<td>' + object.malariaQuantity + '</td>' +
                            '<td>' + object.familyPlanningQuantity + '</td>' +
                            '<td>' + object.zincTabletsQuantity + '</td>';
                        table.appendChild(tr);
                    });
                }

                // get number of requests:
                var table = document.getElementById("requests_table");
                var numberofRequests = table.rows.length;
                var number_of_requests = document.getElementById("number_of_requests");
                number_of_requests.innerHTML = numberofRequests;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

});