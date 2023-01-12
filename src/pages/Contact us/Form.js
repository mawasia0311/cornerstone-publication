import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BootstrapForm() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const notify = (message) => toast(message);

  function isValidEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  function isValidNumber() {
    if (phoneNo.length >= 11 && phoneNo.length <= 15) {
      return true;
    } else {
      return false;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (name !== "" && message !== "" && isValidEmail() && isValidNumber()) {
      console.log("contact successfull!");
      emailjs
        .sendForm(
          "service_kknvur6",
          "template_5gt9grr",
          form.current,
          "MH1nUO-6ASSTrUrJP"
        )
        .then(
          (result) => {
            console.log(result);
            notify("Message Sent Successfully");
            e.target.reset();
          },
          (error) => {
            console.log(error);
            notify("Failed! please try again.");
          }
        );
    } else {
      if (!name || !message) {
        notify("please fill the empty boxes!");
      }
      if (!isValidEmail) {
        notify("Invalid Email!");
      }
      if (!isValidNumber) {
        notify("Invalid Phone no!");
      }
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label className="formLabel">Name</label>
        <input
          className="inputArea"
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="formLabel">Email</label>
        <input
          className="inputArea"
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="formLabel">Phone Number</label>
        <input
          className="inputArea"
          type="number"
          name="user_phoneNumber"
          value={phoneNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
        />
        <label className="formLabel">Message</label>
        <textarea
          name="user_message"
          className="inputArea"
          id="messageArea"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input type="submit" value="Send Message" className="formButton" />
        <ToastContainer />
      </form>

      {/* <a
          className="formButton"
          href={`mailto:m.awasia0311@gmail.com?subject='${phoneNo}'&body=Hello my name is ${name}! ${message}`}
        >
          Click to Send an Email
        </a> */}
    </>
  );
}

export default BootstrapForm;
