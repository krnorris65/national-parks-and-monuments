const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article");
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", `visited-park--${parkObject.id}`, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let deleteParkButton = buildElement("button", `delete-park--${parkObject.id}`, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};
