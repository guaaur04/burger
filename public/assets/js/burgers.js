// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      isdevoured: $("[name=Devoured]:checked").val().trim()
    };



 // Send the POST request.
 $.ajax("/api/burgers", {
  type: "POST",
  data: newBurger,
}).then(
  function() {
    console.log("Created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("isdevoured");
    var newDevouredState = {
      isdevoured: newDevoured 
    };


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(
      function() {
        console.log("changed devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  //DELETE

  $(".delete").on("click", function(event) {
    let id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
