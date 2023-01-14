import React from "react";
// import style from "../style/Contact.module.css";
import Carousel from 'react-bootstrap/Carousel';
import ba from "../assets/ba.png";
import ba1 from "../assets/ba1.png";
import ba2 from "../assets/ba2.png";
import Button from 'react-bootstrap/Button';
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';
import style from "../style/Register.module.css";


function BrandScreen() {
    return (
        <div>
            {/* <h1>BA</h1> */}
            <div className="slider-div">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ba}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

                            <Button variant="dark" size='lg' onClick={() => {
                                window.open('https://forms.gle/cgTrMo743EFQ9Udk6', "_blank");


                            }}>Register</Button>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ba1}
                            alt="Second slide"
                        />
                        {/* 
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ba2}
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}

                    </Carousel.Item>
                </Carousel>
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

export default BrandScreen;
