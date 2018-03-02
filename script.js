document.querySelector('.button').addEventListener('click', function() {
  var task = document.createElement('input');
  (task).height = "10px";
  (task).width = "30px";
  (task).style.color = "gray";
  (task).style.fontStyle = "italic";
  (task).setAttribute("type", "text");
  (task).setAttribute("placeholder", "First Task!");
  var taskUserInput = (task).value;
  document.querySelector('.div').appendChild(task);

  var description = document.createElement('input');
  (description).height = "10px";
  (description).width = "30px";
  (description).style.color = "gray";
  (description).style.fontStyle = "italic";
  (description).setAttribute("type", "text");
  (description).setAttribute("placeholder", "Description");
  var descriptionUserInput = document.getElementById(description);
  descriptionUserInput = (description).value;
  document.querySelector('.secondDiv').appendChild(description);

  var fromWhatTime = document.createElement('input');
  (fromWhatTime).height = "10px";
  (fromWhatTime).width = "30px";
  (fromWhatTime).style.fontStyle = "italic";
  (fromWhatTime).style.color = "gray";
  (fromWhatTime).setAttribute("type", "text");
  (fromWhatTime).setAttribute("placeholder", "From what time");
  var fromWhatTimeUserInput = (fromWhatTime).value;
  document.querySelector('.thirdDiv').appendChild(fromWhatTime);

  var toWhatTime = document.createElement('input');
  (toWhatTime).height = "10px";
  (toWhatTime).width = "30px";
  (toWhatTime).style.fontStyle = "italic";
  (toWhatTime).style.color = "gray";
  (toWhatTime).setAttribute("type", "text");
  (toWhatTime).setAttribute("placeholder", "To what time");
  var toWhatTimeUserInput = (toWhatTime).value;
  document.querySelector('.fourthDiv').appendChild(toWhatTime);


  var submitButton = document.createElement('button');
  (submitButton).textContent = "Submit!";
  (submitButton).height = "20px";
  (submitButton).width = "40px";
  (submitButton).style.backgroundColor = "blue";
  (submitButton).style.color = "white";
  document.querySelector('.fifthDiv').appendChild(submitButton);



  (submitButton).addEventListener('click', function() {

  (task).style.display = "none";
  (description).style.display = "none";
  (fromWhatTime).style.display = "none";
  (toWhatTime).style.display = "none";

});
});
