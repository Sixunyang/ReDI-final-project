/* burger-menu functionality */
const burgerMenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
burgerMenu.addEventListener("click", () => {
  burger.style.right = "0";
});
close.addEventListener("click", () => {
  burger.style.right = "-3rem";
});

/* Select Popular or Latest */
const popular = document.querySelector(".popular");
const popularLatest = document.querySelector(".popular-latest");

popular.addEventListener("click", () => {
  popularLatest.classList.toggle("show");
});

const popular1 = document.querySelector(".popular1");
popular1.addEventListener("click", function () {
  popularLatest.classList.toggle("show");
  popular.innerHTML = "Popular <i class='bi bi-caret-down-fill'></i>";
  content.innerHTML = "";
  mergedDatabase.sort((a, b) => b.heartNumber - a.heartNumber);
  renderProfileFromDatabase(mergedDatabase);
});
const latest1 = document.querySelector(".latest1");
latest1.addEventListener("click", function () {
  popularLatest.classList.toggle("show");
  popular.innerHTML = "Latest <i class='bi bi-caret-down-fill'></i>";
  content.innerHTML = "";
  mergedDatabase.sort((a, b) => a.time - b.time);
  renderProfileFromDatabase(mergedDatabase);
});

/* Select relevant project  */

const frontend = document.querySelector(".frontend");
function addFrontendContent() {
  content.innerHTML = "";
  const frontendDatabase = mergedDatabase.filter(
    (ele) => ele.category === "frontend"
  );
  renderProfileFromDatabase(frontendDatabase);
}

frontend.addEventListener("click", addFrontendContent);

/* Search functionality */
const input = document.querySelector("#search");
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    if (input.value === "frontend") {
      scrollTo(0, 600);
      addFrontendContent();
    }
  }
});
