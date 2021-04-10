import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./MapView.scss";
import { useSelector } from "react-redux";
import markerIconPng from "../../static/icon-location.svg";
export default function MapView() {
  const geolocation = useSelector((state) => state.geolocation);
  return (
    <>
      {geolocation?.location !== undefined ? (
        <MapContainer
          center={[geolocation?.location?.lat, geolocation?.location?.lng]}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[geolocation?.location?.lat, geolocation?.location?.lng]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [50, 60],
                iconAnchor: [25, 60],
              })
            }
          >
            <Popup>Aproximate location</Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </>
  );
}
