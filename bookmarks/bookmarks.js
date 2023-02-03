let nextBookmarksPage = 0;
let bookmarksPagesEnd = false;

async function getBookmarksPage() {
  let loadMoreButton = document.querySelector("button.more");
  loadMoreButton.onclick = null;
  loadMoreButton.classList.add("disabled");
  if (bookmarksPagesEnd) {
    return;
  }
  loadMoreButton.innerHTML = "Loading...";
  await fetch(
    `https://website-api-abdullah-v.vercel.app/bookmarks/get-page/${nextBookmarksPage}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.bookmarks.length === 0) {
        bookmarksPagesEnd = true;
        loadMoreButton.innerHTML = "That is All";
        loadMoreButton.style.cursor = "default";
      } else {
        nextBookmarksPage++;
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
        loadMoreButton.classList.remove("disabled");
        loadMoreButton.onclick = getBookmarksPage;
        loadMoreButton.innerHTML = "Load More";
      }
    });
}

window.addEventListener("load", getBookmarksPage);
