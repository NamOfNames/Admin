const input_RewriteName = document.getElementById("Change_UserName");
const input_RewriteAge = document.getElementById("Change_UserAge");
const input_RewritePhoneNum = document.getElementById("Change_UserPhoneNum");
const input_RewriteEmail = document.getElementById("Change_UserEmail");

const input_RewriteBookName = document.getElementById("Change_BookName");
const input_RewriteDescription = document.getElementById("Change_Description");
const input_RewriteAmount = document.getElementById("Change_Amount");
const input_RewritePrice = document.getElementById("Change_Price");
const input_RewriteRating = document.getElementById("Change_Rating");
const input_RewriteAuthor = document.getElementById("Change_Author");
const input_RewritePages = document.getElementById("Change_Pages");
const input_RewriteYear = document.getElementById("Change_Year");
const input_RewriteGenre = document.getElementById("Change_Genre");

const input_AddID = document.getElementById("Add_ID");
const input_AddBookName = document.getElementById("Add_BookName");
const input_AddAuthor = document.getElementById("Add_Author");
const input_AddPages = document.getElementById("Add_Pages");
const input_AddGenre = document.getElementById("Add_Genre");
const input_AddPubYear = document.getElementById("Add_Year");
const input_AddDescription = document.getElementById("Add_Description");
const input_AddAmount = document.getElementById("Add_Amount");
const input_AddPrice = document.getElementById("Add_Price");
const input_AddRating = document.getElementById("Add_Rating");

const btn_SubmitEditUser = document.querySelector(".btn_submit_EditUser");
const btn_SubmitEditBook = document.querySelector(".btn_submit_EditBook");
const btn_SubmitAddBook = document.querySelector(".btn_submit_AddBook");
const btn_AddUser = document.querySelector(".btn_AddUser");
const btn_AddBook = document.querySelector(".btn_AddBook");

const table = document.querySelector(".table");
var AddUser_modal = document.getElementById("AddUser_Modal");
var AddBook_modal = document.getElementById("AddBook_Modal");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var span_1 = document.getElementsByClassName("close")[1];
const Search = document.getElementById("Search");

export {
  input_RewriteAge,
  input_RewriteName,
  input_RewritePhoneNum,
  input_RewriteEmail,
  input_RewriteAmount,
  input_RewriteBookName,
  input_RewriteDescription,
  input_RewritePrice,
  input_RewriteRating,
  input_RewriteAuthor,
  input_RewriteGenre,
  input_RewritePages,
  input_RewriteYear,
  input_AddAmount,
  input_AddAuthor,
  input_AddBookName,
  input_AddDescription,
  input_AddID,
  input_AddPages,
  input_AddPrice,
  input_AddRating,
  input_AddGenre,
  input_AddPubYear,
  table,
  btn_SubmitEditUser,
  btn_SubmitEditBook,
  btn_SubmitAddBook,
  btn_AddUser,
  btn_AddBook,
  Search,
  AddUser_modal,
  AddBook_modal,
  modal,
  span,
  span_1,
};
