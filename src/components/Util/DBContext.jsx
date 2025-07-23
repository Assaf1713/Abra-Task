import { useReducer, createContext } from "react";

const DBContext = createContext({
  Places: [],
  AddPlace: () => {}
});

function DataReducer(state, action) {
  if (action.type === "ADD_PLACE") {
    const updatedPlaces = [...state.Places];
    updatedPlaces.push({...action.place} );
    return { ...state, Places: updatedPlaces };
  }
}

export function DBContextProvider({ children }) {
  const [PlacesDB, dispatchCartAction] = useReducer(DataReducer, {
    Places: [],
  });

  function AddPlace(place) {
    dispatchCartAction({ type: "ADD_PLACE", place: place });
  }

  const value = {
    Places: PlacesDB.Places,
    AddPlace: AddPlace,
  };

  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
}

export default DBContext;
