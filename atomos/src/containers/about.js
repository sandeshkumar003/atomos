import atomosLogo from '../assets/atomos.png';
import atomosNameLogo from '../assets/atomos-name.png';
import csecLogo from '../assets/csec.png';
import csecNameLogo from '../assets/csec-name.png';
import nscLogo from '../assets/nsclogo.png';
// import nsclogo1 from '../assets/nsclogo4.png';

import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';
import React from 'react';
import style from "../style/About.module.css";


function AboutScreen() {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <h2 className={style.heading}>About Us</h2>
        <div className={style.subSection}>

          <img src={atomosLogo} className={style.logo} alt="atomos-logo" />
          <img src={atomosNameLogo} className={style.nameLogo} alt="name-atomos" />
          <p className={style.desc}>ATOMOS is Habib University's flagship Science Olympiad that is back with a new twist. ATOMOS covers a wide variety of subjects which are not just limited to the field of science. This event is structured to have individual modules having their background from one or multiple streams which include but are not limited to the Natural Sciences, Mathematics, Arts, Logic, Engineering, and Programming. The 3-day event is planned to take place on February 3rd, 4th and 5th.</p>
        </div>
        
        <div className={style.subSection}>

          <img src={csecLogo} className={style.logo} alt="csec-logo" />
          <img src={csecNameLogo} className={style.nameLogo} alt="name-cses" />
          <p className={style.desc}>Computer Science and Engineering Club (CSEC) Is Habib University’s leading student-led club providing students with a platform to become potent contributors to Pakistan’s Science and Research output by harmonizing scientific research within the university, facilitating the student body in their research, streamlining and synchronizing research content and facilities by disambiguation and reduction of the divide between different branches of science.</p>

        </div>
        

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

export default AboutScreen;
