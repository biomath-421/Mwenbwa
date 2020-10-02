import React from 'react';
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import treepng from "../img/tree.png";
import Trees from "../data/arbustum.json";
import 'leaflet/dist/leaflet.css';

const position=[50.6456, 5.5736];
const icon = L.icon({
  iconUrl: treepng,
  iconSize: [100, 100],
});
function Rest() {
  return (
    <main>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          <Marker
          icon={icon}
          key={1770}
          position={position}
          >
          <Popup>
            <h2>{"Platanus x acerifolia"}</h2>
          </Popup>
          </Marker>
  </Map>
    </main>
  );
}
export default Rest;