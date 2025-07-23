import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const style = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 32.0853,
  lng: 34.7818,
};

export default function GoogleMapComponent({ places }) {
  const apiKey = "AIzaSyDYi_m08ygj-eh212kMpMpnTFTnTyU-AuE"; 

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={style} center={center} zoom={10}>
        {places.map((place) => (
          <Marker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
