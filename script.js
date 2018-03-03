document.querySelector('.button').addEventListener('click', function() {
  var task = document.createElement('input');
  (task).style.color = "gray";
  (task).style.fontStyle = "italic";
  (task).setAttribute("type", "text");
  (task).setAttribute("placeholder", "First Task!");
  var taskUserInput = (task).value;
  document.querySelector('.div').appendChild(task);

  var description = document.createElement('input');
  (description).style.color = "gray";
  (description).style.fontStyle = "italic";
  (description).setAttribute("type", "text");
  (description).setAttribute("placeholder", "Description");
  var descriptionUserInput = document.getElementById(description);
  descriptionUserInput = (description).value;
  document.querySelector('.secondDiv').appendChild(description);

  var fromWhatTime = document.createElement('input');
  (fromWhatTime).style.fontStyle = "italic";
  (fromWhatTime).style.color = "gray";
  (fromWhatTime).setAttribute("type", "text");
  (fromWhatTime).setAttribute("placeholder", "From what time");
  var fromWhatTimeUserInput = (fromWhatTime).value;
  document.querySelector('.thirdDiv').appendChild(fromWhatTime);

  var toWhatTime = document.createElement('input');
  (toWhatTime).style.fontStyle = "italic";
  (toWhatTime).style.color = "gray";
  (toWhatTime).setAttribute("type", "text");
  (toWhatTime).setAttribute("placeholder", "To what time");
  var toWhatTimeUserInput = (toWhatTime).value;
  document.querySelector('.fourthDiv').appendChild(toWhatTime);


  var submitButton = document.createElement('button');
  (submitButton).textContent = "Submit!";
  (submitButton).style.backgroundColor = "blue";
  (submitButton).style.color = "white";
  document.querySelector('.fifthDiv').appendChild(submitButton);



  (submitButton).addEventListener('click', function() {

  (task).style.display = "none";
  (description).style.display = "none";
  (fromWhatTime).style.display = "none";
  (toWhatTime).style.display = "none";
  (submitButton).style.display = "none";

  var alertTask = (task).value;

  if((alertTask).value = "none") {
    var alertNoTask = document.createElement('p');
    (alertNoTask).textContent = 'Please enter the name of your task!';
    document.querySelector('.div').appendChild(alertNoTask);
    (submitButton).style.display = "";
  } else if((alertTask).value = "") {
    var alertTaskTwo = document.createElement('p');
    (alertTaskTwo).textContent = 'Thanks!';
    document.querySelector('.div').appendChild(alertTaskTwo);
}
var alertDescription = (description).value;

if((alertDescription).value = "none") {
  var alertNoDescription = document.createElement('p');
  (alertNoDescription).textContent = 'Please enter a description!';
  document.querySelector('.secondDiv').appendChild(alertNoDescription);
  (submitButton).style.display = "";
} else if((alertDescription).value = "") {
  var alertDescriptionTwo = document.createElement('p');
  (alertDescriptionTwo).textContent = 'Thanks!';
  document.querySelector('.secondDiv').appendChild(alertDescriptionTwo);
}
var 
});
});
