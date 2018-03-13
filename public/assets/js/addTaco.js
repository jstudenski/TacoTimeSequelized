


$(".add-taco").on("submit", function(event) {
    event.preventDefault();

    var taco = {
      name: $("#name").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: taco
    }).then(
      function() {
        console.log("added new taco");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatTaco").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      eaten: 1
    };

    // Send the DELETE request.
    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        //console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


 $(".deleteTaco").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/tacos/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted taco", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });