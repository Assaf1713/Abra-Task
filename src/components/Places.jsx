import { useContext, useState } from "react";
import DBContext from "./Util/DBContext";
import Button from "./Button";

export default function Places() {
  const DBCTX = useContext(DBContext);
  const [selected, setSelected] = useState(-1);

  return (
    <>
    <div className="selectedPlace">
        {selected < 0 ? <p> select a place from the list </p> : (
            <h2> You have selected {selected.name} </h2>
        )}

    </div>

     {DBCTX.Places.length===0 ? <p> Start by entering New Places to the form above </p> :
         <div className="Places">
         {DBCTX.Places.map((place) => (
        <button
          className="place"
          key={place.name}
          onClick={() => setSelected(place)}
        >
          {place.name}
        </button>
      ))}
    </div>

     }   




    </>
  );
}
