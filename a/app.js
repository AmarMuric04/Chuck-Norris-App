const randomJoke = document.querySelector(".random-joke");
const generateBtn = document.querySelector(".generate");

const ranJoke = async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  randomJoke.innerHTML = '"' + data.value + '"';
};

ranJoke();

generateBtn.addEventListener("click", ranJoke);
