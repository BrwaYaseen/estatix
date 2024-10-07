import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ latitude, longitude }) => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 14,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker longitude={longitude} latitude={latitude} color="red" />
    </Map>
  );
};

export default PropertyMap;
