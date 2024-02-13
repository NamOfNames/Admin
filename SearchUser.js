import { table } from "./constant.js";

export function Search_User() {
  for (let i = 3; i < table.childElementCount + 2; i++) {
    var txtValue = table.childNodes[i].firstChild.childNodes[3].innerHTML;
    if (txtValue.toUpperCase().indexOf(Search.value.toUpperCase()) > -1) {
      table.childNodes[i].style.display = "";
    } else {
      table.childNodes[i].style.display = "none";
    }
  }
}
