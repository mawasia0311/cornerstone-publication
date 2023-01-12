import React from "react";
import contactUsImage from "../../assets/contactus.png";
import BootstrapForm from "./Form";

function ContactUs() {
  return (
    <div className="contactUs">
      <section className="upperSection">
        <img className="contactUsImage" src={contactUsImage} alt=""></img>
        <div id="contactUsHeading">
          <h3>Contact Us</h3>
          <p>
            If you have any questions about our products or services, please
            call one of our numbers or send us an email. We welcome your
            suggestions to and feedback.
          </p>
        </div>
      </section>

      <section className="container lowerSection">
        <div className="textSection">
          <div className="contactInformationHeading">Contact Informtion</div>
          <div className="infoSection">
            <h1>Contact Numbers:</h1>
            <p>
              <b>Head Office:</b> 042-37212719
            </p>
            <p>
              <b>Others:</b> +92-331-4258348
            </p>
            <p> +92-300-4039968</p>
          </div>
          <div className="infoSection">
            <h1>Email ID's:</h1>
            <p>
              <b>For Hirings:</b>{" "}
              <a href={`mailto:hirings@cornerstone.pk?`}>
                hirings@cornerstone.pk
              </a>
            </p>
            <p>
              <b>For Informtion:</b>{" "}
              <a href={`mailto:info@cornerstone.pk?`}>info@cornerstone.pk</a>
            </p>
            <p>
              <b>Help center:</b>{" "}
              <a href={`mailto:help@cornerstone.pk?`}>help@cornerstone.pk</a>
            </p>
          </div>
          <div className="infoSection">
            <h1>Office Address:</h1>
            <p>
              <b>Head Office 1:</b> 57-PGECHS near bahria Town Lahore
            </p>
            <p>
              <b>Head Office 2:</b> Mian Market, Ghazni Street Urdu Bazar Lahore
              Lahore, 54000
            </p>
          </div>
        </div>
        <div className="formSection">
          <h3 className="formHeading">Send Us Message</h3>
          <BootstrapForm />
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
