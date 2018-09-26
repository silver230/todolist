function Todolist(description, date, time) {
  this.description = description;
  this.date = date;
  this.time = time;
}



$(document).ready(function()) {
  $("form#new-todolist").submit(function(event) {

  event.preventDefault();

  var inputtedDescription = $("input#new-description").val();

  var inputtedDate = $("input#new-date").val();

  var inputtedTime = $("input#new-time").val();

  var newTodolist = new Todolist(inputtedDescription, inputtedDate, inputtedTime);

  $("ul#Todolist").append("<li><span class='Todolist'>" +newTodolist.description + newTodolist.date + newTodolist.time +"</span></li>");
  $("input#new-description").val("");
  $("input#new-date").val("");
  $("input#new-time").val("");


  $(".Todolist").last().click(function() {

  $("#show-todolist").show();
  $("#show-todolist h2").text(newContact.description);
  $(".description").text(newTodolist.description);
  $(".time").text(newTodolist.time);
  $(".date").text(newTodolist.date);
  });

  });
});
