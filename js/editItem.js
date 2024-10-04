import { generateDate } from "./generateDate";

export const editItem = (element) => {
    let newItem = prompt("Digite o novo nome do item:");

    const textItemUpdated = element.querySelector("#item-title");
    const alreadyBought = element.querySelector(".checkbox-input").checked;
    const editDate = element.querySelector(".list-item-date");

    if (newItem !== null && newItem.trim() !== ""){
        textItemUpdated.textContent = newItem;

        if (alreadyBought) {
            element.querySelector(".checkbox-input").checked = true;
            element.querySelector(".checkbox-customized").classList.add("checked");
            textItemUpdated.style.textDecoration = "line-through";
        }

        editDate.textContent = generateDate();
    }
}