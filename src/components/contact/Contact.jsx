import { useState } from "react";
import "./Contact.scss";

function Contact(props) {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form>
          <input placeholder="Email" type="text" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
          {message && <span>Thanks, I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
