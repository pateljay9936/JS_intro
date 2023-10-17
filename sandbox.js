const addButton = document.getElementById("add-btn");
const titleInput = document.getElementById("title-input");
const discInput = document.getElementById("disc-input");
const clrbutton = document.getElementById("clr-btn");

function update() {
  console.log("Updating List...");

  itemJsonArray = [];

  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
        <td scope="row">${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleteItem(${
          index + 1
        })"  class="btn btn-sm btn-primary">Delete</button></td>
      </tr>`;
  });
  tableBody.innerHTML = str;
}

function updateItem() {
  console.log("Updating List with new values...");

  itemJsonArray = [];

  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray.push([titleInput.value, discInput.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.push([titleInput.value, discInput.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }

  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
        <td scope="row">${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleteItem(${
          index + 1
        })"  class="btn btn-sm btn-primary">Delete</button></td>
      </tr>`;
  });
  tableBody.innerHTML = str;
}

function handleAddButtonClick() {
  const titleValue = titleInput.value.trim();
  const discValue = discInput.value.trim();
  console.log("Title Value: ", titleValue);
  console.log("Description Value: ", discValue);

  if (titleValue == "" || discValue == "") {
    console.log("Update Aborted...");           //add button click event handler
    return;
  }
  updateItem();
  titleInput.value = "";
  discInput.value = "";
}
addButton.addEventListener("click", handleAddButtonClick);    //add buton click event

clrbutton.addEventListener("click", () => {                            
  localStorage.clear();                            //clear button click event
  itemJsonArray = [];
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
});

function deleteItem(index) {
  console.log("Delete", index);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);           //delete button click event handler
  // Delete itemIndex element from the array
  itemJsonArray.splice(index - 1, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}

update(); //update the table on page load
