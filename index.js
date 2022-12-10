//add new task as span elements
function newTask() {
  document.getElementById("add").onclick = function () {
    var node = document.createElement("span");
    var text = document.getElementById("newTask").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
  };
}

//delete all elements in div element with class "tasklist"
function deleteTaskList() {
  const tasks = document.querySelectorAll(".taskList");

  tasks.forEach((task) => {
    task.remove();
  });

  //refresh page
  location.reload();
}
