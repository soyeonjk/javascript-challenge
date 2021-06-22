// Starter Code
var tableData = data;


// creating references
var tbody = d3.select("tbody");
var button = d3.select("#filterbtn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// creating search button - for event
// setting up filter button
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputDate.property("value").trim();
    // console.log(inputDate)
    // trim the inputs 
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // add comment if not sightings
    
        else {
            tbody.append("tr").append("td").text("No sightings here. Try again.");
        }
})