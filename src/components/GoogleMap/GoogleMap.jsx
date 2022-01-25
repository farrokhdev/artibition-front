import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/style/leaflet.scss'

function GoogleMap({ lat, long }) {
  const [point, setPoint] = useState({})
  const [zoom, setZoom] = useState(11)


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>

      <Map
        center={(point?.latitude && point?.longitude) ?
          [point?.latitude, point?.longitude] :
          [lat, long]}

        zoom={zoom}
        onzoomend={e => setZoom(e.target._zoom)}
        style={{ width: "100%", height: "500px" }}

        onclick={e => {
          setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng })
        }}

      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={(point?.latitude && point?.longitude) ?
            [point?.latitude, point?.longitude] :
            [lat, long]}
        >
        </Marker>


      </Map>
    </div>
  );
}
export default GoogleMap;