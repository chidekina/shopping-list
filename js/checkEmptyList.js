const msgEmptyList = document.getElementById("msg-empty-list");

export function checkEmptyList(list){
    if (list.querySelectorAll("li").length === 0) {
        msgEmptyList.style.display = "block";
    } else {
        msgEmptyList.style.display = "none";
    }
}