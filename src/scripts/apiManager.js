const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})

const putPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})
