const addButton = document.getElementById("add-btn");
const titleInput = document.getElementById("title-input");
const discInput = document.getElementById("disc-input");

function update() {
    console.log("Updating List...");
    
    const titleValue = titleInput.value.trim();
    const discValue = discInput.value.trim();
    console.log("Title Value: ", titleValue);
    console.log("Description Value: ", discValue);
    if (titleValue === "" || discValue === "") {
        console.log("Update Aborted...");
      return; // exit the function if either input field is empty
    }

    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        itemJsonArray.push([titleInput.value, discInput.value]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      } else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([titleInput.value, discInput.value]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      }
    
    
    const tableBody = document.getElementById("tableBody");
    let str = "";  
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <td scope="row">${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary">Delete</button></td>
        </tr>`;
        });
        tableBody.innerHTML = str; 
}

addButton.addEventListener("click", update);
update();
