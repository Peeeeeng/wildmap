const Mapbox = require("mapbox-gl");
const markerBuilder = require("./marker")

Mapbox.accessToken = "pk.eyJ1Ijoia2V2aW5kOTEiLCJhIjoiY2prazRyNTB4MDhzbDNxcGJmMndpcDNnaiJ9.en0sgNW2EZ1mATX1hLe6OA"

const map = new Mapbox.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
        // style: "mapbox://styles/mapbox/satellite-v9"
})

let tripSubj = ["Activity", "Hotel", "Restaurant"];
let coords = [
    [-74.009, 40.705],
    [-87.6354, 41.8885]
]

const marker = markerBuilder(tripSubj[2], coords[1]).addTo(map)