function fun() {
  document.getElementById("add").onclick = function () {
    var node = document.createElement("Li");
    var text = document.getElementById("newTask").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
  };
}
