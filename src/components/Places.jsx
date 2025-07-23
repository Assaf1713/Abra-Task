import { useContext, useState } from "react";
import DBContext from "./Util/DBContext";
import TypeSelector from "./TypeSelector";
import Place from "./Place";
import GoogleMapComponent from "./GoogleMapComponent";

export default function Places() {
  const DBCTX = useContext(DBContext);
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [TypeFilter, setSelectedType] = useState(0);
  const options = ["All Places", "Resturant", "Park", "Hotel"];
  console.log(DBCTX.Places)
  let UserPlaces = [...DBCTX.Places];
  if(TypeFilter!==0){
    console.log(TypeFilter)
     UserPlaces=UserPlaces.filter(place => place.type === options[TypeFilter])
  }
  

  function handleTypeSelect(type) {
    setSelectedType(type);
  }

  function handlePlaceSelect(place) {
    setSelectedPlace(place);
  }

  return (
    <>
      <div className="selectedPlace">
        {selectedPlace === undefined ? (
          <p> select a place from the list </p>
        ) : (
          <h2> You have selected {selectedPlace.name} </h2>
        )}
      </div>

      {DBCTX.Places.length === 0 ? (
        <p> Start by entering New Places to the form above </p>
      ) : (
        <section className="Places">
          <GoogleMapComponent places={UserPlaces} />
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
