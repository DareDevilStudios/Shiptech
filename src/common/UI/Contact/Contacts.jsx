import React from "react";
import Navbar from "../../Components/Navbar.jsx";
import Mtop from "../../Components/Mtop.jsx";
import Banner from "../../Components/Banner.jsx";
import Contact from "./Components/Contact.jsx";
import Form from "./Components/Form.jsx";
import map from "../../../../public/assets/images/contact_icons/google_map.png";
import phone from "../../../../public/assets/images/contact_icons/phone.png";
import email from "../../../../public/assets/images/contact_icons/mail.png";
import clock from "../../../../public/assets/images/contact_icons/clock.png";

const Contacts = () => {
  return (
    <div className=" ">
      <Navbar />
      <Mtop />
      <Banner title="GET IN TOUCH" />
      <div className="flex  w-full items-center justify-center gap-7 my-24">
      <Contact
        image={map}
        title="Address"
        subtitle="FOR VISIT OUR OFFICE"
        subtitle2="CUSAT, Kochi, Kerala 682022"
        button="FIND ON MAP"
      />
      <Contact
        image={phone}
        title="PHONE"
        subtitle="FOR MOBILE FANS"
        subtitle2="Call Us On: 87148 04425"
        button="GET CALL BACK"
      />
      <Contact
        image={email}
        title="EMAIL"
        subtitle="FOR ASK ANYTHING"
        subtitle2="info@shiptech-icon.com"
        button="LIVE CHAT"
      />
      <Contact
        image={clock}
        title="OP. HRS"
        subtitle="FOR COMFORTABLE VISIT"
        subtitle2="Mon - Sat: 9.00am to 6.00pm"
        button="APPOINTMENT"
      />
      </div>
      <Form/>
    </div>
  );
};

export default Contacts;