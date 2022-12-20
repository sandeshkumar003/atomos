import React from "react";
import style from "../style/Contact.module.css";
import { IconContext } from "react-icons";
import { MdEmail as Email } from "react-icons/md";
import { BsFacebook as Fb } from "react-icons/bs";
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'



function ContactScreen() {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <h1 className={style.heading}>Contact Us</h1>
        <div className={style.addressDetails}>
        <div className={style.mapouter}>
          <div className={style.gmap_canvas}>
            <iframe
              className={style.gmap_iframe}
              width="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              alt="Habib University Google Map"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Habib University&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div>
        <h3 className={style.addressHeading}><FontAwesomeIcon icon={faMapPin} /> &nbsp;Address Details</h3>
        <p className={style.desc}>Block 18, Gulistan-e-Jauhar, University Avenue، Off Shahrah-e-Faisal Rd, Faisal Cantonment, Karachi, Karachi City, Sindh</p>
        <div className="address-details">
          <h3 className={style.addressHeading}>
          <FontAwesomeIcon icon={faPhone} />
 &nbsp; Phone
          </h3>
         
          
          <p className={style.desc}>0322-2973296</p>
          
          <h3 className={style.addressHeading}><FontAwesomeIcon icon={faSquareEnvelope} />
             &nbsp; Email
          </h3>
          <p className={style.desc}>atomos@habib.edu.pk</p>
        </div>
        </div>
        
        </div>
        
      </div>
      
      <div className={style.bottomLinks}>
        <IconContext.Provider value={{ color: "black", size: "30px" }}>
          <div className={style.bottomIcon}>
            <a
              href="https://www.facebook.com/huatomos/?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <Fb />
            </a>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "black", size: "35px" }}>
          <div className={style.bottomIcon}>
            <a
              href="mailto:atomos@habib.edu.pk"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </a>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "black", size: "35px" }}>
          <div className={style.bottomIcon}>
            <a
              href="https://www.instagram.com/huatomos/?igshid=NDk5N2NlZjQ%3D"
              target="_blank"
              rel="noreferrer"
            >
              <Ig />
            </a>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "black", size: "30px" }}>
          <div className={style.bottomIcon}>
            <a href="tel:+923222973296" target="_blank" rel="noreferrer">
              <Phone />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ContactScreen;
