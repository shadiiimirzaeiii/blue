import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

interface MapWithCircleProps {
  points: LatLngTuple[];
}

const calculateCenterAndRadius = (
  points: LatLngTuple[]
): { center: LatLngTuple; radius: number } => {
  if (points.length !== 4) {
    throw new Error("Exactly 4 points are required.");
  }

  const center: LatLngTuple = [
    points.reduce((sum, [lat]) => sum + lat, 0) / points.length,
    points.reduce((sum, [, lng]) => sum + lng, 0) / points.length,
  ];

  const radius = Math.max(
    ...points.map(([lat, lng]) => {
      const latDiff = lat - center[0];
      const lngDiff = lng - center[1];
      return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111000;
    })
  );

  return { center, radius };
};

const MapWithCircle: React.FC<MapWithCircleProps> = ({ points }) => {
  const { center, radius } = calculateCenterAndRadius(points);

  return (
    <MapContainer className="w-full h-[616px]" center={center} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle
        center={center}
        radius={radius}
        className="bg-mainblue"
        fillOpacity={0.4}
      >
        <Popup>لوکیشن حدودی تجهیز</Popup>
      </Circle>
    </MapContainer>
  );
};

export default MapWithCircle;
