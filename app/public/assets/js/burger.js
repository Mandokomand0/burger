// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("newEaten");

    var newBurger = {
      devoured: 0
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("The burger as listed has been devoured", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".griller").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("grilling a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function() {
        console.log("This burger has been vanquised", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
