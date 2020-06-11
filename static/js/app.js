// from data.js
var tableData = data;

//selecting "tbody" tag 
const tbody = d3.select("tbody");

//when the website loads I'd like the user to see the data entries as it's
//probably not immediately understood that all of this data is from 2010  
tableData.forEach((element) => {

    var row = tbody.append("tr");

    Object.entries(element).forEach(([key, entry]) => {

        var cell = row.append("td");

        cell.text(entry);

    });
    
});

//selecting the button on the webpage
var filterButton = d3.select("#filter-btn");

//selecting the search box
const input = d3.select("#datetime");



//MatchSearch(), searches for matches in the data
function MatchSearch() {
  
  //clearing the table on button click
  tbody.html('');

  //getting the text value of the user's input 
  var value = input.property("value");

  console.log(value);

  //finding a match in the data to the user's input based on Datetime objects in the data
  var match = tableData.filter(match => match.datetime === value);
  
  //console.log(matches);

  //printing matches to the screen
  match.forEach((match) => {

    var row = tbody.append("tr");

    Object.entries(match).forEach(([key, entry]) => {

        var cell = row.append("td");

        cell.text(entry);

    }); 
  });
};

filterButton.on("click", MatchSearch)

