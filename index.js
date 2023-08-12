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


document.addEventListener('DOMContentLoaded', () => {
// Get the h1 element with the "typewriter" class
const typewriterElement = document.querySelector('.typewriter');

// Set the initial text and index
const text = typewriterElement.textContent;
let index = 0;

// Function to update the text content
function updateText() {
  if (index <= text.length) {
    typewriterElement.textContent = text.substring(0, index);
    index++;
    setTimeout(updateText, 100); // Delay between characters (adjust as needed)
  } else {
    // Animation complete, reset index and restart animation after 1 second
    index = 0;
    setTimeout(updateText, 1000); // Delay before restarting animation
  }
}

// Start the typing animation
updateText();
});


