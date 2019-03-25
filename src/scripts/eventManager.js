const handleDelete = () => {
    console.log("delete button clicked", event.target.parentNode.id.split("--")[1]);
    let parkId = event.target.parentNode.id.split("--")[1];

    deletePark(parkId)
        .then(() => listNationalParks())
};

const handleVisited = () => {
    console.log("visited button clicked", event.target.parentNode.id.split("--")[1]);
    let parkId = event.target.parentNode.id.split("--")[1];

    let visitedParkObject = {
        visited: true
    }

    patchPark(parkId, visitedParkObject)
        .then(() => listNationalParks())
}

const handleEdit = () => {
    console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
    let parkId = event.target.parentNode.id.split("--")[1];

    const parkArticle = document.querySelector(`#national-park--${parkId}`)
    clearElement(parkArticle)

    getPark(parkId)
        .then(parkToEdit => {
            const editFormPark = parkEditForm(parkToEdit)
            parkArticle.appendChild(editFormPark)
        })


}

const handleUpdate = () => {
    let parkId = event.target.parentNode.id.split("--")[1];

    let editedParkName = document.getElementById(`edit-park-name--${parkId}`).value
    let editedParkState = document.getElementById(`edit-park-state--${parkId}`).value
    let editedParkLatitude = document.getElementById(`edit-park-latitude--${parkId}`).value
    let editedParkLongitude = document.getElementById(`edit-park-longitude--${parkId}`).value
    let editedParkVisited = document.getElementById(`edit-park-visited--${parkId}`).checked

    let editedParkObj = {
        name: editedParkName,
        state: editedParkState,
        latitude: editedParkLatitude,
        longitude: editedParkLongitude,
        visited: editedParkVisited
    }
    putPark(parkId, editedParkObj)
    .then(() => listNationalParks())

}