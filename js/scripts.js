function Todolist(description, date, time) {
  this.description = description;
  this.date = date;
  this.time = time;
}



$(document).ready(function() {
  $("form#new-Todolist").submit(function(event) {

  event.preventDefault();

  var inputtedDescription = $("input#new-description").val();

  var inputtedDate = $("input#new-date").val();

  var inputtedTime = $("input#new-time").val();

  var newTodolist = new Todolist(inputtedDescription, inputtedDate, inputtedTime);

  $("ul#Todolist").append("<li><span id='Todolist'>" +newTodolist.description +" " +newTodolist.date +" "+ newTodolist.time +"</span></li>");
  // $("input#new-description").val("");
  // $("input#new-date").val("");
  // $("input#new-time").val("");
  //
  //
  $("#Todolist").last().click(function() {

  $("#show-todolist").show();
  // $("p.dd").text(newTodolist.description);
  $(".description").text(newTodolist.description);
  $(".time").text(newTodolist.time);
  $(".date").text(newTodolist.date);
  });

  });
});
