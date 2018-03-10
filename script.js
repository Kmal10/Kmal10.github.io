// When user clicks + button
document.querySelector('.plusButton').addEventListener('click', function() {
  document.querySelector('.taskFormDiv').style.display = "block";
});

// When user clicks "This is a break"

document.querySelector('.checkBox').addEventListener('click', function() {
  document.querySelector('.title').style.display = 'none';
  document.querySelector('.description').style.display = 'none';
  document.getElementById("raiseInput").style.marginTop = "-80px";
  document.querySelector('.plusButton').style.display = 'none';
  document.querySelector('.checkbox').style.display = 'none';
  document.querySelector('.break').style.display = 'none';

    var taskElement = document.createElement('div');
    (taskElement).classList.add("task");
    document.querySelector('.tasks').appendChild(taskElement);




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
  (taskElement).appendChild(endTimeElementForBreak);

  var breakText = document.createElement('p');
  (breakText).classList.add("breakText");
    (breakText).textContent = 'Break';
    (taskElement).appendChild(breakText);


});

// When user clicks "Create Task"
document.querySelector('.createTaskButton').addEventListener('click', function() {

  var taskElement = document.createElement('div');
    (taskElement).classList.add("task");
    document.querySelector('.tasks').appendChild(taskElement);


    var checkbox = document.createElement('input');
    (checkbox).setAttribute("type", "checkbox");
    (checkbox).classList.add("checkbox");
    (taskElement).appendChild(checkbox);



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

});
