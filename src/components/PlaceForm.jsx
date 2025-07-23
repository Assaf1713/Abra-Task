import Button from "./Button.jsx";
import Input from "./Input.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";
import { useContext } from "react";
import DBContext from "./Util/DBContext.jsx";

export default function PlaceForm() {
  const [isSubmitted, SetSubmit] = useState(false);
  const DBCTX = useContext(DBContext);

  function handleClose() {
    SetSubmit(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const PlaceData = Object.fromEntries(fd.entries());
    const NewPlace = {
      name: PlaceData.name,
      type: PlaceData.type,
      adress: PlaceData.adress,
    };
    SetSubmit(true);
    DBCTX.AddPlace(NewPlace);
    console.log(PlaceData.name);
    console.log(DBCTX.Places);
    event.target.reset();
  }

  return (
    <>
      <div className="control">
        <form onSubmit={handleSubmit}>
          <h2>Enter a New Place</h2>
          <div className="input-fields">
            <Input label="Place's Name" type="text" id="name" />
            <label htmlFor="type">Type</label>
            <select id="type" name="type" required>
              <option value="">-- Select a type --</option>
              <option value="Resturant">Restaurant</option>
              <option value="Park">Park</option>
              <option value="Hotel">Hotel</option>
            </select>
            <Input label=" Adress" type="text" id="adress" />
          </div>
          <Button> Send </Button>
        </form>
      </div>
      <Modal open={isSubmitted} onClose={handleClose} className="news-letter">
        <div className="modal-actions">
          <h2> Place Added Successfully ! </h2>
          <Button className="btn" onClick={handleClose}>
            close
          </Button>
        </div>
      </Modal>
    </>
  );
}
