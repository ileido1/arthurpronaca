import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
export function MapaDonaciones() {
 
    return (
        <MapContainer
            className="w-full max-h-[300px] h-[300px] md:rounded-[33px]"
            center={[-0.1796597, -78.4755665]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-0.1817244,-78.4803536]} icon={DefaultIcon}>
              <Popup>
              Almacén Pronaca
              </Popup>
            </Marker>
            <Marker position={[-0.2765239,-78.5331563]} icon={DefaultIcon}>
              <Popup>
              CD SUR Pronaca
              </Popup>
            </Marker>
          </MapContainer>
    )
}