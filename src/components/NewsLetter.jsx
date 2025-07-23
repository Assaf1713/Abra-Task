import Button from "./Button";
import Input from "./Input.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";
import { useContext } from "react";
import AnalyticsContext from "./Util/AnalyticsContext.jsx";


export default function NewsLetter() {
  const [isSubmitted, SetSubmit] = useState(false);
  const AnalyticsCTX = useContext(AnalyticsContext)

  function handleClose() {
    SetSubmit(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const CustomerData = Object.fromEntries(fd.entries());
    SetSubmit(true);
    AnalyticsCTX.incrementFormAttempts();
    console.log(CustomerData);
    event.target.reset();
  }

  return (
    <>
      <div className="control">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up for Our NewsLetter</h2>
          <div className="input-fields">
            <Input label="Your Name" type="text" id="name" />
            <Input label=" Email" type="email" id="email" />
          </div>
          <Button> Send </Button>
        </form>
      </div>
      <Modal open={isSubmitted} onClose={handleClose} className="news-letter">
        <div className="modal-actions">
          <h2> Signed Successfully ! </h2>
          <Button className="btn" onClick={handleClose}>
            close
          </Button>
        </div>
      </Modal>
      <div className="debug">
  <p>📈 Form attempts: {AnalyticsCTX.formAttempts}</p>
</div>
    </>
  );
}
