const randomJoke = document.querySelector(".random-joke");
const generateBtn = document.querySelector(".generate");
const joke = document.querySelector(".joke");
const input = document.querySelector(".input");

let value = "";

const ranJoke = async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  randomJoke.innerHTML = '"' + data.value + '"';
};

ranJoke();

generateBtn.addEventListener("click", function () {
  generateBtn.innerHTML = `<i class="fa-solid fa-rotate-right load-icon" ></i>`;

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
    document.querySelector(
      ".joke-container"
    ).innerHTML = `  <div class="joke-container">
        <div class="show-joke">
          <p class="joke">${data.value}</p>
          <p class="category-show">${el.textContent}</p>
        </div>`;
  })
);

const getJokeBySearch = async function (input, page = 0) {
  try {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${input}`
    );
    const data = await response.json();
    if (!data.result || data.result.length === 0)
      throw new Error("Could not find any results for the given word.");

    console.log(data);

    const numPages = Math.ceil(data.result.length / 5);
    const start = page * 5;
    const end = start + 5;
    let curPage = +page;

    document.querySelector(".joke-container").innerHTML = `
       <div class="card-container"> </div>`;

    for (let i = start; i < end; i++) {
      if (!data.result[i]) break;
      document.querySelector(
        ".card-container"
      ).innerHTML += `  <div class="card">
            <p>
         ${data.result[i].value}
            </p>
          </div>`;
    }

    document.querySelector(".joke-container").innerHTML += `
       <div class="pagination"> </div>`;

    //first page with more pages
    if (curPage + 1 === 1 && numPages > 1) {
      document.querySelector(".pagination").innerHTML = `   
    <p class="pages"> <span>page</span> ${curPage + 1} of ${numPages} </p>
      <button class="go-right" data-page="${curPage + 1}">
        Page ${curPage + 2} <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
`;
      const rightPag = document.querySelector(".go-right");

      rightPag.addEventListener("click", function () {
        const nextPage = rightPag.dataset.page;
        getJokeBySearch(value, nextPage);
      });
    }
    //other page
    else if (
      curPage + 1 !== 1 &&
      curPage + 1 !== numPages &&
      numPages > curPage
    ) {
      document.querySelector(".pagination").innerHTML += `   
        <button class="go-left" data-page="${curPage - 1}">
      <i class="fa-solid fa-arrow-left"></i> Page ${curPage} 
        </button>
       <p class="pages"> <span>page</span> ${curPage + 1} of ${numPages} </p>
        <button class="go-right" data-page="${curPage + 1}">
          Page ${curPage + 2} <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
  `;

      const rightPag = document.querySelector(".go-right");

      rightPag.addEventListener("click", function () {
        const nextPage = rightPag.dataset.page;
        getJokeBySearch(value, nextPage);
      });
      const leftPag = document.querySelector(".go-left");
      leftPag.addEventListener("click", function () {
        const prevPage = leftPag.dataset.page;
        getJokeBySearch(value, prevPage);
      });
    } else if (curPage + 1 === numPages && numPages !== 1) {
      document.querySelector(".pagination").innerHTML += ` 
        <button class="go-left" data-page="${curPage - 1}">
        <i class="fa-solid fa-arrow-left"></i>  Page ${curPage} 
        </button>
        <p class="pages"> <span>page</span> ${curPage + 1} of ${numPages} </p>
        `;
      const leftPag = document.querySelector(".go-left");
      leftPag.addEventListener("click", function () {
        const prevPage = leftPag.dataset.page;
        getJokeBySearch(value, prevPage);
      });
    }
    //first page with no other pages
    else
      document.querySelector(
        ".pagination"
      ).innerHTML = `<p class="pages"> <span>page</span> ${
        curPage + 1
      } of ${numPages} </p>`;
  } catch (err) {
    document.querySelector(
      ".joke-container"
    ).innerHTML = `<p class="error-message"> <i class="fa-solid fa-triangle-exclamation"></i> ${err.message}</p>`;
  }
};

document.querySelector(".form").addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!input) return;
  value = input.value;

  getJokeBySearch(input.value);
  input.value = "";
});

document.querySelector(".category-button").addEventListener("click", (e) => {
  document.querySelector(".category-container").classList.toggle("hidden");
});
