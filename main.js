let chance = 50;
let chancePercent;
const secretButton = document.getElementById("secret");

function SecretButtonClick() {
    console.log("Secret Button Clicked");
    showAlert();
}

secretButton.addEventListener("click", SecretButtonClick)

function showAlert() {
  var randomNumber = Math.floor(Math.random() * chance) + 1;
  chance = 1;
  chancePercent = 100 / chance;
  console.log(chancePercent)
  if (randomNumber === 1) {
    window.location.replace("secretpage.html")
  }
  }
