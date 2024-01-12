const randomJoke = document.querySelector(".random-joke");
const generateBtn = document.querySelector(".generate");
const joke = document.querySelector(".joke");
const input = document.querySelector(".input");

const ranJoke = async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  randomJoke.innerHTML = '"' + data.value + '"';
};

ranJoke();

generateBtn.addEventListener("click", function () {
  generateBtn.innerHTML = `<img src="load.png" class="load-icon" />`;

  setTimeout(() => {
    ranJoke();
    generateBtn.innerHTML = "GENERATE NEW";
  }, 500);
});

document.querySelectorAll(".category").forEach((el) =>
  el.addEventListener("click", async () => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${el.textContent.toLowerCase()}`
    );
    const data = await response.json();
    console.log(data, el.textContent);
    document.querySelector(
      ".joke-container"
    ).innerHTML = `  <div class="joke-container">
        <p class="information">
          Click on a category or search up a word to get a fact.
        </p>
        <div class="show-joke">
          <p class="joke">${data.value}</p>
          <p class="category-show">${el.textContent}</p>
        </div>`;
  })
);

const getJokeBySearch = async function (input) {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${input}`
  );
  const data = await response.json();

  console.log(data);

  document.querySelector(".joke-container").innerHTML = `
        <div class="card-container">
          <p class="information">
            Click on a category or search up a word to get a fact.
          </p>
          <div class="card">
            <p>
          ${data.result[0].value}
            </p>
          </div>
          <div class="card">
            <p>
          ${data.result[1].value}
           
            </p>
          </div>
          <div class="card">
            <p>         
           ${data.result[2].value}
            </p>
          </div>
          <div class="card">
            <p>
             ${data.result[3].value}
            </p>
          </div>
          <div class="card">
            <p>
             ${data.result[4].value}
            </p>
          </div>
        </div>`;
};

document.querySelector(".form").addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!input) return;

  getJokeBySearch(input.value);
});
