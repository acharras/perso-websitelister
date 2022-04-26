import React, { useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./Contact.css"

function Alert(props:any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact(props:any)  {
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event:any, reason:any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [Open, setOpen] = useState<boolean>(false);
  
  const sendEmail = (e:any) => {
    e.preventDefault();
    if (Name && Email) {
      emailjs
        .send(
          "service_hd4087m",
          "template_ub6u6mm",
          {
            Email: Email,
            Subject: Subject,
            Message: Message,
            Name: Name
          },
          "m5NwFX5P-uswMsyZ5"
        )
        .then(
          (result) => {
            handleClick();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("Please fill in the contact form before submitting");
    }
  };

    return (
      <div className="contact-form">
        <div className="container">
              <div className="form-wrapper">
                <form className="label-wrapper" onSubmit={sendEmail}>
                <div id="NameEmailLabel">
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="NameItem"
                      value={Name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Your Name *"
                    />
                  </label>
                  <label htmlFor="item02">
                    <input
                      type="email"
                      name="email"
                      id="EmailItem"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Your email *"
                    />
                  </label>
                  </div>
                  <div  id="SubjectDiv">
                  <label  htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="SubjectItem"
                      value={Subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      placeholder="Write a Subject *"
                    />
                  </label>
                  </div>
                  <div id="MessageDiv">
                  <label  htmlFor="item04">
                    <textarea
                      name="message"
                      id="MessageItem"
                      value={Message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      placeholder="Your Message *"
                    />
                  </label>
                  </div>
                  <button
                    className="SubmitBtn"
                    type="submit"
                    value="submit"
                    name="submit"
                  >
                    Submit
                  </button>
                </form>
            </div>
        </div>
        <Snackbar
          open={Open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Email sent!
          </Alert>
        </Snackbar>
      </div>
    );
}

export default Contact;