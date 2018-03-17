//When user clicks on the "Home" Button






// When user clicks + button
document.querySelector('.plusButton').addEventListener('click', function() {
  document.querySelector('.taskFormDiv').style.display = "block";
});

// When user clicks "This is a break"

document.querySelector('.checkBox').addEventListener('click', function() {
  if(document.querySelector('.checkBox').checked == true) {

    document.querySelector('.checkBoxForm').style.display = "block";
    document.querySelector('.plusButton').style.display = 'none';
    document.getElementById("raiseInput").style.marginTop = "-80px";
    document.querySelector('.hidingTaskWhenBreak').style.display = 'none';
    document.querySelector('.checkBoxForm').style.display = 'block';
    document.querySelector('.createBreak').style.display = 'block';
  } else {
    document.querySelector('.checkBoxForm').style.display = "none";
    document.querySelector('.plusButton').style.display = 'block';
    document.getElementById("raiseInput").style.marginTop = "-80px";
    document.querySelector('.hidingTaskWhenBreak').style.display = 'block';
    document.querySelector('.checkBoxForm').style.display = 'none';
    document.querySelector('.createBreak').style.display = 'none';
  }






});
document.querySelector('.createBreak').addEventListener('click', function() {
  var taskElementBreak = document.createElement('div');
    (taskElementBreak).classList.add("taskForBreak");
    document.querySelector('.tasks').appendChild(taskElementBreak);

    var titleOfBreak = document.createElement('p');
    (titleOfBreak).textContent = 'Break';
    (taskElementBreak).appendChild(titleOfBreak);


    var startBreak = document.querySelector('.startTimeForBreak').value;
    var startTimeElementForBreak = document.createElement('p');
    (startTimeElementForBreak).classList.add("startTimeElementBreak");
    (startTimeElementForBreak).style.fontFamily = 'monaco';
    (startTimeElementForBreak).style.fontWeight = 'bold';
    (startTimeElementForBreak).style.paddingRight = '100px';
    (startTimeElementForBreak).textContent = (startBreak);
    (taskElementBreak).appendChild(startTimeElementForBreak);


    var colon = document.createElement('p');
    (colon).classList.add("colon");
    (colon).textContent = '--';
    (colon).style.fontFamily = 'monaco';
    (colon).style.fontWeight = 'bold';
    (taskElementBreak).appendChild(colon);



    var endBreak = document.querySelector('.endTimeForBreak').value;
    var endTimeElementForBreak = document.createElement('p');
    (endTimeElementForBreak).classList.add("endTimeElementBreak");
    (endTimeElementForBreak).style.fontFamily = 'monaco';
    (endTimeElementForBreak).style.fontWeight = 'bold';
    (endTimeElementForBreak).style.paddingRight = '25px';
    (endTimeElementForBreak).textContent = (endBreak);
    (taskElementBreak).appendChild(endTimeElementForBreak);

    document.querySelector('.startTimeForBreak').value ='';
    document.querySelector('.endTimeForBreak').value ='';




  });



// When user clicks "Create Task"
document.querySelector('.createTaskButton').addEventListener('click', function() {



  var taskElement = document.createElement('div');
    (taskElement).classList.add("task");
    document.querySelector('.tasks').appendChild(taskElement);


    var checkbox = document.createElement('input');
    (checkbox).setAttribute("type", "checkbox");
    (checkbox).classList.add("markAsDoneCheckBox");
    (taskElement).appendChild(checkbox);

    checkbox.addEventListener('click', function(event) {
       var checkboxClicked = event.currentTarget;
       var task = checkboxClicked.closest('.task');
       task.style.background = 'lightGreen';
     });



  var titleValue = document.querySelector('.title').value;
  var titleElement = document.createElement('p');
  (titleElement).classList.add("titleElement");
  (titleElement).style.fontFamily = 'monaco';
  (titleElement).style.fontWeight = 'bold';
  (titleElement).style.paddingRight = '600px';
  (titleElement).textContent = titleValue;
  (taskElement).appendChild(titleElement);




  var descriptionValue = document.querySelector('.description').value;
  var descriptionElement = document.createElement('p');
  (descriptionElement).textContent = descriptionValue;



  var startValue = document.querySelector('.start').value;
  var startElement = document.createElement('p');
  (startElement).classList.add("startTime");
  (startElement).style.fontFamily = 'monaco';
  (startElement).style.fontWeight = 'bold';
  (startElement).style.paddingLeft = "100px";
  (startElement).textContent = startValue;
  (taskElement).appendChild(startElement);


  var colon = document.createElement('p');
  (colon).classList.add("colon");
  (colon).textContent = '--';
  (colon).style.fontFamily = 'monaco';
  (colon).style.fontWeight = 'bold';
  (taskElement).appendChild(colon);



  var endValue = document.querySelector('.end').value;
  var endElement = document.createElement('p');
  (endElement).classList.add("endTime");
  (endElement).style.fontFamily = 'monaco';
  (endElement).style.fontWeight = 'bold';
  (endElement).style.paddingLeft = "25px";
  (endElement).textContent = endValue;
  (taskElement).appendChild(endElement);

  document.querySelector('.title').value ='';
  document.querySelector('.description').value ='';
  document.querySelector('.start').value ='';
  document.querySelector('.end').value ='';


  var taskObject = {
   title: titleValue,
   startTime: startValue,
   endTime: endValue
  };

  if (localStorage.tasks) {
    var tasks = JSON.parse(localStorage.tasks);
    for (var count = 0; count < tasks.length; count++) {
      var taskElement = document.createElement('p');
      var checkboxForLocalStorage = document.createElement('input');
      (checkboxForLocalStorage).setAttribute('type', 'checkbox');
      (checkboxForLocalStorage).classList.add("checkboxForLocalStorage");
      document.body.appendChild(checkboxForLocalStorage);
      var task = tasks[count];
      taskElement.textContent = task.title + ' ' + task.startTime + ' ' + task.endTime;
      document.body.appendChild(taskElement);
    }
  } else {
    localStorage.tasks = "[]";
  }

  var tasksPushedToLocalStorage = JSON.parse(localStorage.tasks);
  tasks.push(taskObject);
  localStorage.tasks= JSON.stringify(tasks);
});



  // Create taskObject
   // titleValue
   // startValue
   // endValue
// Add taskObject to localStorage.tasks




// Check localStorage to see if localStorage.tasks exists
// if it exists
// for each task in localStorage.tasks, append it to the Page
// if it doesn't exist
// create localStorage.tasks = "[]"


/*
var startTimeForBreak = document.querySelector('.start').value;
var startTimeElementForBreak = document.createElement('p');
(startTimeElementForBreak).classList.add("startTimeElementForBreak");
(startTimeElementForBreak).style.fontFamily = 'monaco';
(startTimeElementForBreak).style.fontWeight = 'bold';
(startTimeElementForBreak).textContent = (startTimeForBreak);
(taskElement).appendChild(startTimeElementForBreak);

var endTimeForBreak = document.querySelector('.end').value;
var endTimeElementForBreak = document.createElement('p');
(endTimeElementForBreak).classList.add("endTimeElementForBreak");
(endTimeElementForBreak).style.fontFamily = 'monaco';
(endTimeElementForBreak).style.fontWeight = 'bold';
(endTimeElementForBreak).textContent = (endTimeForBreak);
(taskElement).appendChild(endTimeElementForBreak); */

/* var taskElement = document.createElement('div');
(taskElement).classList.add("task");
document.querySelector('.tasks').appendChild(taskElement); */
// document.querySelector('.checkBox').style.display = 'none';
