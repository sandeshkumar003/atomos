import React from 'react';
import style from "../style/Register.module.css";
import Instructions from '../components/instructions';
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import ba from "../assets/reg-fee.png";
import { Button } from 'react-bootstrap';
import fee1 from "../assets/fee1.png";
import fee2 from "../assets/fee2.png";


function RegisterScreen() {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   // script.async = true;
  //   script.src = "../form.js";
  //   script.onload = () => this.scriptLoaded();
  //   document.body.appendChild(script);
  // });

  // useEffect(() => {
  //   alert("If the form doesn't load by itself. Reload the page.");
  // });

  return (
    <div className={style.main}>
      {/* <h1>Register</h1> */}

      {/* <div className={style.form}> */}
      <div>


        {/* <iframe data-tally-src="https://tally.so/embed/wM1M4E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager" width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0"
          title="Registration form"></iframe> */}
        <div className="slider-div">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fee2}
                alt="First slide"
              />
              <Carousel.Caption>
                <Button variant="dark" size='lg' onClick={() => window.open("./registration.html", "_blank")}>Launch Registeration</Button>
                <br />
                <Instructions />

              </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fee1}
                alt="First slide"
              />
              <Carousel.Caption>
                <Button variant="dark" size='lg' onClick={() => window.open("./registration.html", "_blank")}>Launch Registeration</Button>
                <br />
                <Instructions />

              </Carousel.Caption>

            </Carousel.Item>

          </Carousel>
        </div>

      </div>



      {/* <div className={style.registerbuttons}>
        <Instructions />
        <Button variant="dark" size='lg' onClick={() => window.open("./registration.html", "_blank")}>Launch Registeration</Button>



      </div> */}

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

export default RegisterScreen;
