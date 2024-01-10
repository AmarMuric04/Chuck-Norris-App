const input = document.querySelector("input");
const gen = document.querySelector(".generate");
const form = document.querySelector(".form");
const buttons = document.querySelector(".button-container");
const randomJoke = document.querySelector(".random-joke");
const newRan = document.querySelector(".new-random");

const chuckNorris = async function (input) {
  console.log(input);
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${input}`
  );
  const data = await response.json();

  console.log(data);
  document.querySelector(
    ".joke-container"
  ).innerHTML = `   <span class="random-joke-container"
        ><img src="screw.png" /><span class="random-joke">${input}</span
        ><img src="screw.png"
      /></span>`;
  document.querySelector(".joke-container").innerHTML += data.result
    .map((el) => `<p>${el.value}</p>`)
    .join("\n");
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await chuckNorris(input.value);
});

document.querySelectorAll(".category").forEach((el) =>
  el.addEventListener("click", async function () {
    document.querySelector(
      ".joke-container"
    ).innerHTML = `    <span class="random-joke-container">
      <img src="screw.png" />
      <span class="random-joke">
        ${el.textContent[0].toUpperCase() + el.textContent.slice(1)}
      </span>
      <img src="screw.png" />
    </span>`;

    for (let i = 0; i < 10; i++) {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${el.textContent}`
      );
      const data = await response.json();

      if (
        document
          .querySelector(".joke-container")
          .innerHTML.includes(`${data.value}`)
      )
        continue;

      document.querySelector(
        ".joke-container"
      ).innerHTML += `<p>${data.value}</p>`;
    }
  })
);
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  const navBounding = nav.getBoundingClientRect();
  if (navBounding.bottom <= 50) {
    buttons.classList.add("fixed");
  } else {
    buttons.classList.remove("fixed");
  }
});
const getRandomJoke = async function () {
  const ranRes = await fetch("https://api.chucknorris.io/jokes/random");
  const ranData = await ranRes.json();
  randomJoke.textContent = ranData.value;
};
getRandomJoke();

const getSpinner = function () {
  newRan.innerHTML = `<img class="rotate" src="reload.png" />`;
};

newRan.addEventListener("click", function () {
  getSpinner();

  setTimeout(async () => {
    await getRandomJoke();
    newRan.innerHTML = "NEW";
  }, Math.random() * 1000);
});
