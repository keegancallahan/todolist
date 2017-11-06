$("#new").submit(function() {
  $("#todos").append("<li>" + $("#newItem").val() + "</li>");
  $("#newItem").val("");

  updateTotal();

  return false;
});

$("#todos").on("click", "li", function() {
  $(this).toggleClass("done");

  updateTotal();
});

$("#clearList").click(function() {
  $("#todos").empty();

  updateTotal();
});

$("#clearCompleted").click(function() {
  if($("#todos").hasClass("done")){
    $("#todos").empty("done");
  }
  updateTotal();
});


function updateTotal() {
  var totalTodos = $("#todos li")
    .not(".done").length

  $("#count").html(totalTodos)
}
