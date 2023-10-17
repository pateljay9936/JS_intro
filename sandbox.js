const addButton = document.getElementById("add-btn");
const titleInput = document.getElementById("title-input");
const discInput = document.getElementById("disc-input");

function update(flag) {
  console.log("Updating List...");

  const titleValue = titleInput.value.trim();
  const discValue = discInput.value.trim();
  console.log("Title Value: ", titleValue);
  console.log("Description Value: ", discValue);
 
 
  
  
  if ((titleValue === "" || discValue === "") && flag=='1'){
    
    console.log("Update Aborted...");
    return; // exit the function if either input field is empty
  }
 itemJsonArray = [];

  if (localStorage.getItem("itemsJson") == null) {
   
    itemJsonArray.push([titleInput.value, discInput.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
   else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    if (flag=='1')
    {
    itemJsonArray.push([titleInput.value, discInput.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
  }

  
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
        <td scope="row">${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleteItem(${index +1})"  class="btn btn-sm btn-primary">Delete</button></td>
      </tr>`;
  });
  tableBody.innerHTML = str;
}

function handleAddButtonClick() {
  update("1");    //flag 1 for add button, where it will add the data to local storage and print table
}
addButton.addEventListener("click", handleAddButtonClick);

update("0");  //flag 0 for page load, where it will not add the data to local storage just print table
              // On page load, retrieve data from local storage and populate the table

function deleteItem(index) {
  console.log("Delete", index);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // Delete itemIndex element from the array
  itemJsonArray.splice(index-1, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update("0");
}

function handleAddButtonClick() {
  update("1");
  titleInput.value = "";
  discInput.value = "";
}

addButton.addEventListener("click", handleAddButtonClick);