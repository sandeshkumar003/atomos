import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from "../style/Faqs.module.css";
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';


function faqs() {
  return (
    <div className={style.main}>
  <div className={style.section}>
    <h1 className={style.heading}>Frequently Asked Questions</h1>
    <Accordion className={style.accordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={style.accordionHead}>What is ATOMOS?</Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          ATOMOS is Habib University's flagship Science Olympiad that is back with a new twist. ATOMOS covers a wide variety of subjects which are not just limited to the field of science. This event is structured to have individual modules having their background from one or multiple streams which include but are not limited to the Natural Sciences, Mathematics, Arts, Logic, Engineering, and Programming. The 3-day event is planned to take place on February 3rd, 4th and 5th.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={style.accordionHead}>How many team members can be there in a team?</Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          There can be 5 to 7 members in each team
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className={style.bottomLinks}>
        <IconContext.Provider
          value={{ color: 'black', size: '30px' }}
        >
          <div className={style.bottomIcon} >
            <a href='https://www.facebook.com/huatomos/?mibextid=ZbWKwL' target="_blank" rel='noreferrer'>
              <Fb />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '35px' }}
        >
          <div className={style.bottomIcon} >
            <a href='mailto:atomos@habib.edu.pk' target="_blank" rel='noreferrer'>
              <Email />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '35px' }}
        >
          <div className={style.bottomIcon} >
            <a href='https://www.instagram.com/huatomos/?igshid=NDk5N2NlZjQ%3D' target="_blank" rel='noreferrer'>
              <Ig />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '30px' }}
        >
          <div className={style.bottomIcon} >
            <a href='tel:+923222973296' target="_blank" rel='noreferrer'>
              <Phone />
            </a>

          </div>
        </IconContext.Provider>

      </div>

    </div>
  );
}

export default faqs
