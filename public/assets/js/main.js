$(".add-taco").on("submit", function(event) {
  event.preventDefault();
  // Send the POST request.
  $.ajax("/api/tacos", {
    type: "POST",
    data: { name: $("#name").val().trim() }
  }).then(
    function() {
      location.reload();
    }
  );
});

$(".eatTaco").on("click", function(event) {
  var id = $(this).data("id");
  // Send the DELETE request.
  $.ajax("/api/tacos/" + id, {
    type: "PUT",
    data: { eaten: 1 }
  }).then(
    function() {
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
      location.reload();
    }
  );
});