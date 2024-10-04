import { checkEmptyList } from "./checkEmptyList.js";
import { createItemList } from "./createItemList.js";

const item = document.getElementById("input-item");
const shoppingList = document.getElementById("shopping-list");


export function addItem(event){
    event.preventDefault();
    
    if(item.value !== undefined && item.value.trim() !== ""){
        const listItem = createItemList(item.value);
        shoppingList.appendChild(listItem);
        checkEmptyList(shoppingList);
        item.value = "";
    } else alert("Digite um item válido.");
}