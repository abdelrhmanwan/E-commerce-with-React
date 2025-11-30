import { Mail, Phone } from "lucide-react";
import FloatingPageAddress from "../../component/floatingPageAddress/floatingPageAddress";
import "./Contact.css";
import { useRef, useState } from "react";
const Contact = () => {
  const msgRef = useRef(null);
  const [contactMsg, setContactMsg] = useState({
    contactUserName: "",
    contactUserEmail: "",
    contactUserPhone: "",
    contactUserMessage: "",
    errorMsg: "",
  });
  const handleContactUserName = (event) => {
    setContactMsg({ ...contactMsg, contactUserName: event.target.value });
  };
  const handleContactUserEmail = (event) => {
    setContactMsg({ ...contactMsg, contactUserEmail: event.target.value });
  };
  const handleContactUserPhone = (event) => {
    setContactMsg({ ...contactMsg, contactUserPhone: event.target.value });
  };
  const handleContactUserMessage = (event) => {
    setContactMsg({
      ...contactMsg,
      contactUserMessage: event.target.innerText,
    });
  };
  const handleSubValidation = (e) => {
    e.preventDefault();
    setContactMsg({ ...contactMsg, errorMsg: "" });
    if (
      contactMsg.contactUserEmail === "" ||
      contactMsg.contactUserName === "" ||
      contactMsg.contactUserPhone === ""
    ) {
      setContactMsg({ ...contactMsg, errorMsg: "Please fill all fields" });
      return;
    }
    if (contactMsg.contactUserPhone.length !== 11) {
      setContactMsg({ ...contactMsg, errorMsg: "Phone Number isn't correct" });
      return;
    }
    console.log(contactMsg);
    setContactMsg({
      contactUserName: "",
      contactUserEmail: "",
      contactUserPhone: "",
      contactUserMessage: "",
      errorMsg: "",
    });
    if (msgRef.current) {
      msgRef.current.innerText = "";
    }
  };
  return (
    <>
      <FloatingPageAddress hideSource={"Home /"} currentSource={" Contact"} />
      <div className="ContactPageLayout">
        <div className="floatingContentLayout">
          <div className="ContentDisplayLayout">
            <div className="OurDetailsUnitLayout ">
              <div className="IconAndHeadingDetailsStyle">
                <div className="AroundIconDetailsLayout">
                  <Phone className="IconInDetailsStyle" />
                </div>
                <span>Call To Us</span>
              </div>
              <span className="ContactText">
                We are available 24/7, 7 days a week.
              </span>
              <span className="ContactText">Phone: +8801611112222</span>
            </div>
            <div className="SeperatorBtwDetails"></div>
            <div className="OurDetailsUnitLayout">
              <div className="IconAndHeadingDetailsStyle">
                <div className="AroundIconDetailsLayout">
                  <Mail className="IconInDetailsStyle" />
                </div>
                <span>Write To US</span>
              </div>
              <span className="ContactText">
                Fill out our form and we will contact you within 24 hours.
              </span>
              <span className="ContactText">Emails: customer@pescart.com</span>
              <span className="ContactText">Emails: support@pescart.com</span>
            </div>
          </div>

          <form
            className="FieldsInputLayout"
            onSubmit={(e) => {
              handleSubValidation(e);
            }}
          >
            <div className="firstContactInputsField">
              <input
                className="contactInput"
                type="text"
                placeholder={"Your Name"}
                name="contactUserName"
                id="userName"
                value={contactMsg.contactUserName}
                onChange={(e) => {
                  handleContactUserName(e);
                }}
              />
              <input
                className="contactInput"
                placeholder="Your Email"
                type="email"
                name="contactUserEmail"
                id="userName"
                value={contactMsg.contactUserEmail}
                onChange={(e) => {
                  handleContactUserEmail(e);
                }}
              />
              <input
                className="contactInput"
                type="text"
                placeholder="Your Phone"
                name="contactUserPhone"
                id="userName"
                value={contactMsg.contactUserPhone}
                onChange={(e) => {
                  handleContactUserPhone(e);
                }}
              />
            </div>
            <div
              type="text"
              ref={msgRef}
              // placeholder="Your Message"
              name="contactUserMessage"
              className="secondContactInputsField"
              contentEditable="true"
              value={contactMsg.contactUserMessage}
              onInput={(e) => {
                handleContactUserMessage(e);
              }}
            ></div>
            <div className="errorHandleAndSubmitLayout">
              <p className="errorParagraph">{contactMsg.errorMsg}</p>
              <button className="btnForInputsField">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
