const buildParkHtml = parkObject => {
    // <article>
    //  <h3>Park Name</h3>
    //  <p>State the park in located in</p>
    // </article>

    const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
    parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
    parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

    if (parkObject.visited !== true) {
        let visitedParkButton = buildElement("button", undefined, "Visited Park")
        parkArticle.appendChild(visitedParkButton);
        visitedParkButton.addEventListener("click", handleVisited)
    }

    let editParkButton = buildElement("button", undefined, "Edit Park")
    parkArticle.appendChild(editParkButton);
    editParkButton.addEventListener("click", handleEdit)

    let deleteParkButton = buildElement("button", undefined, "Delete Park")
    parkArticle.appendChild(deleteParkButton);
    deleteParkButton.addEventListener("click", handleDelete)
    return parkArticle;
};

const parkEditForm = (editPark) => {
    let editFormFrag = document.createDocumentFragment();

    editFormFrag.appendChild(buildElement("label", undefined, "Name: "))
    const nameInput = editFormFrag.appendChild(buildElement("input", `edit-park-name--${editPark.id}`))
    nameInput.value = editPark.name

    editFormFrag.appendChild(buildElement("label", undefined, "State: "))
    const stateInput = editFormFrag.appendChild(buildElement("input", `edit-park-state--${editPark.id}`))
    stateInput.value = editPark.state

    editFormFrag.appendChild(buildElement("label", undefined, "Latitude: "))
    const latitudeInput = editFormFrag.appendChild(buildElement("input", `edit-park-latitude--${editPark.id}`))
    latitudeInput.value = editPark.latitude

    editFormFrag.appendChild(buildElement("label", undefined, "Longitude: "))
    const longitudeInput = editFormFrag.appendChild(buildElement("input", `edit-park-longitude--${editPark.id}`))
    longitudeInput.value = editPark.longitude

    editFormFrag.appendChild(buildElement("label", undefined, "Visited: "))
    const visitedInputTrue = editFormFrag.appendChild(buildElement("input", `edit-park-visited--${editPark.id}`))
    visitedInputTrue.type = "radio"
    visitedInputTrue.name = "visited"


    editFormFrag.appendChild(buildElement("label", undefined, "Not Visited: "))
    const visitedInputFalse = editFormFrag.appendChild(buildElement("input"))
    visitedInputFalse.type = "radio"
    visitedInputFalse.name = "visited"

    if (editPark.visited) {
        visitedInputTrue.checked = true
    } else {
        visitedInputFalse.checked = true
    }


    const updateParkButton = editFormFrag.appendChild(buildElement("button", undefined, "Update"))
    updateParkButton.addEventListener("click", handleUpdate)

    return editFormFrag

}