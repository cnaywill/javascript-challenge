var tableData = data;

// YOUR CODE HERE!
/// Create a reference to the table body
var tbody = d3.select("tbody");

/// Use d3 to update each cell's text with UFO report values (date/time, city, state, country, shape, comment){
  data.forEach(function(ufoReport){
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      /// Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

/// Listen for event and match user date/time input
var button = d3.select("Filter Search");

var inputField = d3.select("#input-field");

//  Declare a function to handle the button click
function handleClick() {
  console.log("A button was clicked.");

// show which object handled the function
console.log(d3.event.target);
}
d3.select("#button").on("click",runEnter);
d3.select('form').on('submit',runEnter);
function runEnter() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#Filter Table");

  // Get the value property of the input element
  var inputValue = inputElement.property("values");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
  return false;
}


