fetch("../data/projects.json")
  .then((response) => response.json())
  .then((json) => {
    projectsDiv = document.querySelector("div.projects");
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
    experiencesDiv = document.querySelector("div.experiences");
    
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
      ${e.company !== "Producter" ? '<hr>' : ''}`
      );
    }
  });
