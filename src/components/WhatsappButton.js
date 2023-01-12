import React from "react";
import "./whatsappButton.css";

function WhatsappButton() {
  return (
    <a
      className="whatsappButton"
      href="https://api.whatsapp.com/send?phone=03314258348"
    >
      <img
        src="https://starpng.com/public/uploads/preview/white-whatsapp-logo-png-11576005920ihsdw57nbe.png"
        alt="whastapp"
      />
    </a>
  );
}

export default WhatsappButton;
