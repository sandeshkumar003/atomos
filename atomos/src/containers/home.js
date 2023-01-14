import logo from '../assets/main-logo.png';
import React from 'react';
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import style from "../style/Home.module.css";



function HomeScreen() {
  const navigate = useNavigate();
  const registerUser = () => {
    navigate("/register");
  }

  return (
    <div className={style.main}>
      {/* <h1>Home</h1> */}
      <img src={logo} className={style.logo} alt="atomos-logo" />
      {/* <img src={nameLogo} className={style.nameLogo} alt="name-logo" /> */}
      {/* <div className="button-wrapper">
            <Button style={{ boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.5)" }}>
              Button with shadow
            </Button>
          </div> */}
      <Button variant="dark" size='lg' onClick={registerUser}>Register</Button>

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

export default HomeScreen;
