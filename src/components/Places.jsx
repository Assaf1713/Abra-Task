import { useContext, useEffect, useState } from "react";
import DBContext from "./Util/DBContext";
import TypeSelector from "./TypeSelector";
import Place from "./Place";
import GoogleMapComponent from "./API/GoogleMapComponent";
import Modal from "./UI/Modal";
import CurrentWeather from "./API/CurrentWeather";
import Button from "./UI/Button";

export default function Places() {
  const DBCTX = useContext(DBContext);
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [center, setCenter] = useState();
  const [TypeFilter, setSelectedType] = useState(0);
  const options = ["All Places", "Resturant", "Park", "Hotel"];
  console.log(DBCTX.Places);
  let UserPlaces = [...DBCTX.Places];
  if (TypeFilter !== 0) {
    console.log(TypeFilter);
    UserPlaces = UserPlaces.filter(
      (place) => place.type === options[TypeFilter]
    );
  }

  function getLastAddedPlaceCenter(places) {
    if (!places || places.length === 0) {
      return { lat: 32.0853, lng: 34.7818 };
    }
    const lastPlace = places[places.length - 1];
    return { lat: lastPlace.lat, lng: lastPlace.lng };
  }

  useEffect(() => {
    const center = getLastAddedPlaceCenter(DBCTX.Places);
    console.log("Last Added Center:", center);
    setCenter(center);
  }, [DBCTX.Places]);

  function handleTypeSelect(type) {
    setSelectedType(type);
  }

  function handlePlaceSelect(place) {
    setSelectedPlace(place);
    setCenter({lat : place.lat, lng : place.lng})
  }

  function handleWeatherModalClose() {
    setSelectedPlace(undefined);
  }

  return (
    <>
      <div className="selectedPlace">
        {selectedPlace === undefined ? (
          <p> select a place from the list </p>
        ) : (
          <div>
            <h2> You have selected {selectedPlace.name} </h2>
            <Modal
              open={selectedPlace !== undefined}
              className="weather"
              onClose={handleWeatherModalClose}
            >
              <CurrentWeather lat={selectedPlace.lat} lng={selectedPlace.lng} />
              <Button className="btn" onClick={handleWeatherModalClose}>
                close
              </Button>
            </Modal>
          </div>
        )}
      </div>

      {DBCTX.Places.length === 0 ? (
        <p> Start by entering New Places to the form above </p>
      ) : (
        <section className="Places">
          <GoogleMapComponent places={UserPlaces} center={center} />
          <TypeSelector
            options={options}
            selected={TypeFilter}
            setTypeSelect={handleTypeSelect}
          />
          <div className="places-list">
            <ul>
              {UserPlaces.map((place) => (
                <Place
                  key={place.id}
                  place={place}
                  handlePlaceClick={handlePlaceSelect}
                />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
