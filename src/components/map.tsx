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
      center={[-0.2494058, -79.1709238]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-0.2494058, -79.1709238]} icon={DefaultIcon}>
        <Popup>
          <a href=" https://maps.app.goo.gl/5DQdD3Rg2PQGjBFw5">
            Almacén Pronaca Santo Domingo. Dirección: Av. Tsáchila 569 y Río
            Baba frente al monumento a Julio Jaramillo
          </a>
        </Popup>
      </Marker>
      <Marker position={[-0.2764505,-78.5332278]} icon={DefaultIcon}>
        <Popup>
          <a href="https://maps.app.goo.gl/sGKiAYmPFAwpeDceA">
            Almacén Pronaca Quito Sur. Dirección: Ayapamba Oe1-225 Entre Manglar
            Alto y Maldonado
          </a>
        </Popup>
      </Marker>
      <Marker position={[-0.1817244, -78.4803536]} icon={DefaultIcon}>
        <Popup>
          <a href="https://maps.app.goo.gl/Gbm56itQrNiZN5PY7">
          Almacén Pronaca Quito Norte.
Dirección: República del Salvador N35-11 y Portugal Esquina
          </a>
        </Popup>
      </Marker>
      <Marker position={[-2.0619713, -79.9462243]} icon={DefaultIcon}>
        <Popup>
          <a href="https://maps.app.goo.gl/KLf6GMFTvRcUUdoEA">
          Almacén Pronaca Guayaquil
Dirección: km 16 ½ vía Daule referencia frente a la gasolinera PDV
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
