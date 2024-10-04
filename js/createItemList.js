import { checkPurchasedList } from "./checkPurchasedList.js";
import { deleteItem } from "./deleteItem.js";
import { editItem } from "./editItem.js";
import { generateDate } from "./generateDate.js";

const purchasedList = document.getElementById("purchased-list");
const shoppingList = document.getElementById("shopping-list");
let contador = 0;

export function createItemList(item){

    const listItem = document.createElement("li");
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const itemContainerBuy = document.createElement("div");
    itemContainerBuy.classList.add("item-container-buy");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-item-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox"
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for", checkboxInput.id);

    labelCheckbox.addEventListener("click", function(event) {
        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomized = event.currentTarget.querySelector(".checkbox-customized");
        const titleItem = itemsName.closest("li").querySelector("#item-title");

        if( checkboxInput.checked) {
            checkboxCustomized.classList.add("checked");
            titleItem.style.textDecoration = "line-through";
            purchasedList.appendChild(listItem);
        }
        else {
            checkboxCustomized.classList.remove("checked");
            titleItem.style.textDecoration = "none";
            shoppingList.appendChild(listItem);
        }

        checkPurchasedList(purchasedList);
    })

    const checkboxCustomized = document.createElement("div");
    checkboxCustomized.classList.add("checkbox-customized");

    labelCheckbox.appendChild(checkboxInput);
    labelCheckbox.appendChild(checkboxCustomized);

    containerCheckbox.appendChild(labelCheckbox);
    itemContainerBuy.appendChild(containerCheckbox);

    const itemsName = document.createElement("p");
    itemsName.innerText = item;
    itemsName.id = "item-title";
    itemContainerBuy.appendChild(itemsName);

    const containerButtons = document.createElement("div");

    const removeButton = document.createElement("button");
    removeButton.classList.add("action-button");

    const removeImage = document.createElement("img");
    removeImage.src = "img/delete.svg";
    removeImage.alt = "delet";

    removeButton.addEventListener("click", function() {
        deleteItem(listItem);
    })

    removeButton.appendChild(removeImage);
    containerButtons.appendChild(removeButton);

    const editButton = document.createElement("button");
    editButton.classList.add("action-button"); 

    const editImage = document.createElement("img");
    editImage.src = "img/edit.svg";
    editImage.alt = "edit";

    editButton.addEventListener("click", function() {
        editItem(listItem);
    })
    editButton.appendChild(editImage);
    containerButtons.appendChild(editButton);

    const itemDate = document.createElement("p");
    itemDate.innerText = generateDate();
    itemDate.classList.add("list-item-date");

    itemContainer.appendChild(itemContainerBuy);
    itemContainer.appendChild(containerButtons);
    listItem.appendChild(itemContainer);
    listItem.appendChild(itemDate);

    return listItem;
}