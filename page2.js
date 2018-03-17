if (localStorage.tasks) {
  var tasks = JSON.parse(localStorage.tasks);
  for (var count = 0; count < tasks.length; count++) {
    var taskElement = document.createElement('p');
    var task = tasks[count];
    taskElement.textContent = task.title + ' ' + task.startTime + ' ' + task.endTime;
    document.body.appendChild(taskElement);
  }
} else {
  localStorage.tasks = "[]";
}
