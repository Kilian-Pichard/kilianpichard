import L from 'leaflet';

var map = L.map('map', {tap:false, scrollWheelZoom:false}).setView([46.15978240966797, -1.151965856552124], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([46.15978240966797, -1.151965856552124]).addTo(map)