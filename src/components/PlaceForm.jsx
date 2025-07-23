/* eslint-disable no-unused-vars */
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

  async function geocodeAddress(address) {
    const apiKey = "AIzaSyDYi_m08ygj-eh212kMpMpnTFTnTyU-AuE";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "OK") {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error("Geocoding failed");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const PlaceData = Object.fromEntries(fd.entries());
    try {
      const coords = await geocodeAddress(PlaceData.address);
      const NewPlace = {
        name: PlaceData.name,
        type: PlaceData.type,
        address: PlaceData.address,
        lat: coords.lat,
        lng: coords.lng
      };
      SetSubmit(true);
      DBCTX.AddPlace(NewPlace);
      console.log(PlaceData.name);
      console.log(DBCTX.Places);
      event.target.reset();
    } catch (err) {
      alert("Could not find location. Please enter a valid address.");
    }
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
              <option value="Resturant">Resturant</option>
              <option value="Park">Park</option>
              <option value="Hotel">Hotel</option>
            </select>
            <Input label=" Adress" type="text" id="address" />
          </div>
          <Button className="btn"> Send </Button>
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
