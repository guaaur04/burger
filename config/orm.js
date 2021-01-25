// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

// Helper function to convert object key/value pairs to SQL syntax

function objToSql(ob) {
    var arr = [];
  
    // loop through keys and push key/value as a string int arr

    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();

// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database

//selectAll()


// insertOne()


// updateOne()

// Export the orm object for the model (burger.js).
module.exports = orm;
