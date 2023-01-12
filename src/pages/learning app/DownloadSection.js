import React from "react";
import appCode from "../../assets/appCode.png";

function DownloadSection() {
  return (
    <div
      className="downloadSection"
      style={{ backgroundColor: "rgb(245, 245, 245)" }}
    >
      <div className="textSection">
        <h3>Scan the QR code</h3>
        <h3>Or</h3>
        <h3>Click the download button</h3>
        <div className="downloadButtons">
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=com.mlearning"
          >
            Download {`(IOS)`}
          </a>
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=com.mlearning"
          >
            Download {`(Android)`}
          </a>
        </div>
      </div>
      <div>
        <img className="qrCode" src={appCode} alt="qrcode"></img>
      </div>
    </div>
  );
}

export default DownloadSection;
