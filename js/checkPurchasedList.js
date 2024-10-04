const containerPurchasedList = document.getElementById("container-purchased-list");

export function checkPurchasedList(list) {
    
    if (list.childElementCount === 0){
        containerPurchasedList.style.display = "none";
    } else {
        containerPurchasedList.style.display = "block";
    }
}