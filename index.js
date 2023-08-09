function addItem(){
  var itemList = document.getElementById("myList");
  var newItemText = document.getElementById("newItemText").value;
  var newItemTime = document.getElementById("newItemTime").value;



  var newItem = document.createElement("li");
  var itemText = document.createElement("span");

  itemText.textContent = newItemText + " at " +newItemTime + " ";


  var rmButton = document.createElement("button");
  rmButton.textContent = "X";
  rmButton.onclick = function () {
    itemList.removeChild(newItem);
  };

  newItem.appendChild(itemText);
  newItem.appendChild(rmButton);

  itemList.appendChild(newItem);

  document.getElementById("newItemText").value = '';
  document.getElementById("newItemTime").value = '';
}

