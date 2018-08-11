const Mapbox = require('mapbox-gl')

const tripSubj = {
    Activity: "url(http://i.imgur.com/WbMOfMl.png)",
    Hotel: "url(http://i.imgur.com/D9574Cu.png)",
    Restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
}

const markerBuilder = (subj, coords) => {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = tripSubj[subj];
    console.log(tripSubj["Restaurant"])

    return new Mapbox.Marker(markerDomEl).setLngLat(coords)
}


module.exports = markerBuilder