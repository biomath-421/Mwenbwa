import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from "leaflet";
import * as urbanForest from "../data/arbustum.json"
import 'leaflet/dist/leaflet.css';

export default function Rest() {
  return (
    <main>
      <Map center={[50.6456, 5.5736]} zoom={13} zoomAnimation={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          {/* {urbanForest.map(tree =>(
           <Marker key={tree.arbotag}
           position={[tree.geoloc.lat,tree.geoloc.lon]} />
          ))} */}
  </Map>
    </main>
  );
}
console.table(urbanForest);