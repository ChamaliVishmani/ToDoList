function fun() {
  document.getElementById("add").onclick = function () {
    var node = document.createElement("span");
    var text = document.getElementById("newTask").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
  };
}

$(function () {
  var $curParent, Content;
  $(document).on("li", "click", function () {
    if ($(this).closest("s").length) {
      Content = $(this).parent("s").html();
      $curParent = $(this).closest("s");
      $(Content).insertAfter($curParent);
      $(this).closest("s").remove();
    } else {
      $(this).wrapAll("<s />");
    }
  });
});
