import { checkEmptyList } from "./checkEmptyList.js";
import { checkPurchasedList } from "./checkPurchasedList.js";

const shoppingList = document.getElementById("shopping-list");
const purchasedList = document.getElementById("purchased-list");

const deleteItem = (element) => {
    let confirmation = confirm("Tem certeza que deseja excluir este item?");

    if (confirmation) {
        element.remove();

        checkEmptyList(shoppingList);
        checkPurchasedList(purchasedList);
    } else {

    }
}

export { deleteItem };