import "./styles.css";

let addtodobutton = document.getElementById("add");
let toDoContainer = document.getElementById("toDocontainer");
let inputField = document.getElementById("inputField");
addtodobutton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = " ";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
