fetch("../data/uses.json")
  .then((response) => response.json())
  .then((json) => {
    let appsDiv = document.querySelector("div.apps");
    for (let u of json.uses) {
      appsDiv.insertAdjacentHTML(
        "beforeend",
        `<a href=${u.link} target="_blank" class="app">
        <img src="${u.icon}" />
        <span>${u.name}</span>
      </a>`
      );
    }
  });
