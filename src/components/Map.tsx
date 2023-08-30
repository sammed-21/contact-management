import React from "react";
import { MapContainer,  TileLayer } from "react-leaflet";

import { CountryData } from "../lib/types"; // Import the CountryData type if needed
import "leaflet/dist/leaflet.css";
import ShowDataOnMap from "../lib/showDataOnMap";

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
  mapCountryName: string;
  data: CountryData[]; // Pass the data as a prop
}

const Map: React.FC<MapProps> = ({  center, zoom, data }) => {
  return (
    <MapContainer
      style={{ height: "60vh" }}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ShowDataOnMap data={data} casesType="cases" />{" "}
    </MapContainer>
  );
};

export default Map;

 