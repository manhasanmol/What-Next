window.addEventListener("load",() => {
  loadTasks();
});

function addItem(){
  var newItemText = document.getElementById("newItemText").value;
  var newItemTime = document.getElementById("newItemTime").value;

  var item = {text: newItemText,time:newItemTime};
  saveTask(item);


  document.getElementById("newItemText").value = '';
  document.getElementById("newItemTime").value = '';
  loadTasks();
}

function saveTask(item){
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(item);
  localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){
  var itemList = document.getElementById("myList");
  itemList.innerHTML = '';

  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    var newItem = document.createElement("li");
    var itemText = document.createElement("span");
    itemText.textContent = task.text + " at " +task.time + " ";

    var rmButton = document.createElement("button");
    rmButton.textContent = "X";
    rmButton.onclick = function(){
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    };
    
  newItem.appendChild(itemText);
  newItem.appendChild(rmButton);

  itemList.appendChild(newItem);
  });
}

