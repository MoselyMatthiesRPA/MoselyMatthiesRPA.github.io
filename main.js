let chance = 50;
let chancePercent;
const secret = document.getElementById("secret");

function SecretButtonClick() {
    console.log("Secret Button Clicked");
    showAlert();
}

secret.addEventListener("click", SecretButtonClick)

function showAlert() {
  var randomNumber = Math.floor(Math.random() * chance) + 1;
  chance *= 1.05;
  chancePercent = 100 / chance;
  console.log(chancePercent)
  if (randomNumber === 1) {
    window.location.replace("secretpage.html")
  }
  }

