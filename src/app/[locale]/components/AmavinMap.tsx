//react
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//libraries
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function VineyardsMap() {
  const myIcon = L.icon({
    iconUrl: "/icons/grapes.svg",
    iconSize: [38, 38],
    iconAnchor: [0, 38],
    popupAnchor: [0, 0],
  });

  return (
    <MapContainer
      center={{ lat: 35.7755202, lng: 138.4674056 }}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[35vh] mb-2"
    >
      <TileLayer
        attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker position={{ lat: 35.7755202, lng: 138.4674056 }} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
