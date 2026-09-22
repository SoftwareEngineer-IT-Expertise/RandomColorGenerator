let button = document.getElementById("btn");

  function changeColor() {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16);
  document.getElementById("container").style.backgroundColor = randomCode;
};
changeColor();
button.addEventListener("click",changeColor)