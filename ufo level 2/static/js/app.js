// from data.js
var tableData = data;

// creating references
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
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


//create button for event listener
button.on("click", () => {

  d3.event.preventDefault();
  var inputDate = inputDate.property("value").trim();
  // console.log(inputDate)
  var inputCity = inputCity.property("value").toLowerCase().trim();
  // console.log(inputCity)
  var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
  // console.log(filterDate)
  var filterCity = tableData.filter(tableData => tableData.city === inputCity);
  // console.log(filterCity)
  var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
  // console.log(filterCombinedData)
  tbody.html("");
    let response = {
        filterDate, filterCity, filterCombinedData
    }
    if(response.filterCombinedData.length !== 0) {
      addData(filterCombinedData);
  }
  else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
    addData(filterDate) || addData(filterCity);
}
else {
  tbody.append("tr").append("td").text("No sightings here. Try again.");
}
})