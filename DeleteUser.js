// export const deleteUser = (id) => {
//   remove(ref(dbrt, `user/${id}`))
//     .then(() => {
//       console.log("Remove succeeded.");
//       window.location.reload();
//     })
//     .catch((error) => {
//       console.log("Remove failed: " + error.message);
//     });
// };

import {
  ref,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { dbrt } from "./firebase.js";

export function deleteUser(id) {
  remove(ref(dbrt, `user/${id}`))
    .then(() => {
      console.log("Remove succeeded.");
      window.location.reload();
    })
    .catch((error) => {
      console.log("Remove failed: " + error.message);
    });
}
