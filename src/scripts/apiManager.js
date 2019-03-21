const apiUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiUrl}/parks`).then(response => response.json())
