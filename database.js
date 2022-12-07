/* My own data */
const projectDatabase = [
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/Snipaste_2022-11-22_00-16-44.jpg",
    category: "frontend",
  },
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/tik.jpg",
  },
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/redi.jpg",
  },
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/coffee.jpg",
  },
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/cv-web.png",
  },
  {
    login: "sixun",
    avatar_url: "./imgs/Sixun_0409-.jpg",
    projectImg: "./imgs/slider.jpg",
  },
];

/* fake data from github user API */
let fetchResults = [];
let mergedDatabase = [];

/* Function to encapsulate rendering data */
function renderProfileFromDatabase(database) {
  database.forEach((profile) => {
    //filter popular project based on heart numbers
    const item = document.createElement("div");
    item.classList.add("item");
    const smallContent = document.createElement("div");
    smallContent.classList.add("small-content");
    const img1 = document.createElement("img");
    img1.src = profile.projectImg;
    const info = document.createElement("div");
    info.classList.add("info");
    const portrait = document.createElement("div");
    portrait.classList.add("portrait");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const head = document.createElement("div");
    head.classList.add("head");
    const img2 = document.createElement("img");
    img2.src = profile.avatar_url;
    const nickName = document.createElement("div");
    nickName.classList.add("nick-name");
    nickName.innerHTML = profile.login;
    /*  const i = document.createElement("i");
    i.classList.add("bi bi-heart-fill"); */
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerHTML = profile.heartNumber;
    heart.innerHTML = '<i class="bi bi-heart-fill"></i>';
    heart.appendChild(number);

    portrait.appendChild(head);
    portrait.appendChild(nickName);
    head.appendChild(img2);

    info.appendChild(portrait);
    info.appendChild(heart);

    smallContent.appendChild(img1);
    item.appendChild(smallContent);
    item.appendChild(info);
    content.appendChild(item);
    /* Read More Part */

    const readMore = document.querySelector(".read-more");
    const body = document.querySelector("body");
    smallContent.addEventListener("click", () => {
      readMore.style.display = "block";
      body.style.overflow = "hidden";
    });

    const back = document.querySelector(".back");
    back.addEventListener("click", () => {
      readMore.style.display = "none";
      body.style.overflow = "auto";
    });

    /*  Heart functionality */

    let flag = true;
    heart.addEventListener("click", () => {
      if (flag) {
        heart.style.color = "#f15a22";
        const num = parseInt(number.innerHTML) + 1;
        number.innerHTML = num;
        flag = false;
      } else {
        heart.style.color = "#767676";
        const num = parseInt(number.innerHTML) - 1;
        number.innerHTML = num;
        flag = true;
      }
    });
  });
}

const content = document.querySelector(".content");
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((profile) => {
      profile.projectImg =
        "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
    });
    fetchResults = data;
    mergedDatabase = [...projectDatabase, ...fetchResults];
    mergedDatabase.forEach((profile, index) => {
      profile.heartNumber = Math.floor(Math.random() * 100 + 1);
      profile.time = index;
    });
    renderProfileFromDatabase(mergedDatabase);
  });
