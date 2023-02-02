fetch("https://website-api-abdullah-v.vercel.app/bookmarks/get-front")
  .then((response) => response.json())
  .then((json) => {
    let bookmarksDiv = document.querySelector("div.bookmarks");
    for (let b of json.bookmarks) {
      bookmarksDiv.insertAdjacentHTML(
        "beforeend",
        `<a
        href="${b.link}"
        target="_blank"
        class="bookmark"
      >
        <img src="${b.cover}" />
        <div class="right">
          <div class="top">
            <h3 class="title">
              ${b.title}
            </h3>
            <h5 class="description">
              ${b.description}
            </h5>
          </div>
            <span class="domain">${b.domain}</span>
        </div>
      </a>`
      );
    }
  });

fetch("../data/projects.json")
  .then((response) => response.json())
  .then((json) => {
    let projectsDiv = document.querySelector("div.projects");
    for (let p of json.projects) {
      projectsDiv.insertAdjacentHTML(
        "beforeend",
        `<a href="${p.link}" target="_blank" class="project"> \
        <img \
            src="${p.imageURL}" \
            alt="image from project" \
        /> \
        <div class="about"> \
            <h3>${p.name}</h3> \
            <h5> \
            ${p.description} \
            </h5> \
        </div> \
        </a>`
      );
    }
  });

fetch("../data/experiences.json")
  .then((response) => response.json())
  .then((json) => {
    let experiencesDiv = document.querySelector("div.experiences");
    for (let e of json.experiences) {
      experiencesDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="experience">
        <div class="left">
          <img src="./assets/${e.logo}" alt="logo" />
          <div class="info">
            <h1 class="role">${e.title}</h1>
            <h2 class="company">
              ${e.company}
              <span style="font-weight: 200; font-style: italic"
                >- ${e.location}</span
              >
            </h2>
            <h4 class="date">${e.date}</h4>
          </div>
        </div>
        <div class="right">
          ${e.summary}
        </div>
      </div>
      ${e.company !== "Producter" ? "<hr>" : ""}`
      );
    }
  });

fetch("../data/skills.json")
  .then((response) => response.json())
  .then((json) => {
    let skillsDiv = document.querySelector("div.skills");

    for (let s of json.skills) {
      skillsDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="skill" style="--hc: ${s.color};">
        <img src="./assets/icons/${s.fileName}" alt="">
        <span>${s.name}</span>
      </div>`
      );
    }
  });

fetch("../data/links.json")
  .then((response) => response.json())
  .then((json) => {
    let linksDiv = document.querySelector("div.links");

    for (let l of json.links) {
      linksDiv.insertAdjacentHTML(
        "beforeend",
        `<a href="${l.link}" target="_blank" class="link" style="--hc: ${l.color};">
        <div>
          <h3 class="name">${l.name}</h3>
          <h5 class="description">${l.description}</h5>
        </div>
        <img src="./assets/icons/${l.fileName}" alt="">
      </a>`
      );
    }
  });

window.onload = function typewriterEffect() {
  const titles = [
    {
      title: "frontend developer",
      color: "#1E6FD9",
    },
    {
      title: "backend developer",
      color: "#1D7353",
    },
    {
      title: "full-stack developer",
      color: "#1e7196",
    },
    {
      title: "open sourcerer",
      color: "#BF0426",
    },
    {
      title: "mathematics student",
      color: "#815AB4",
    },
    {
      title: "web designer",
      color: "#3FB2BF",
    },
    {
      title: "freelancer",
      color: "#9FC131",
    },
  ];

  let titleElement = document.querySelector("#headline .typewriter .title");
  let typeWriterElement = document.querySelector("#headline .typewriter");
  let typing = true;
  let currentTitleIndex = 0;
  let currentWordLength = titles[currentTitleIndex].title.length;
  typeWriterElement.style.color = titles[currentTitleIndex].color;
  let currentLetterIndex = 0;
  let typingInterval;
  let removingInterval;

  function type() {
    if (typing) {
      if (currentLetterIndex === currentWordLength) {
        typing = false;
      } else {
        // type letter
        titleElement.innerHTML +=
          titles[currentTitleIndex].title[currentLetterIndex];
        currentLetterIndex++;
      }
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        removingInterval = setInterval(remove, 25);
      }, 1500);
    }
  }

  function remove() {
    if (titleElement.innerHTML.length) {
      titleElement.innerHTML = titleElement.innerHTML.slice(0, -1);
    } else {
      if (titles.length === currentTitleIndex + 1) {
        currentTitleIndex = 0;
      } else {
        currentTitleIndex++;
      }
      clearInterval(removingInterval);
      typing = true;
      typingInterval = setInterval(type, 50);
      currentLetterIndex = 0;
      typeWriterElement.style.color = titles[currentTitleIndex].color;
      currentWordLength = titles[currentTitleIndex].title.length;
    }
  }

  typingInterval = setInterval(type, 50);
};
