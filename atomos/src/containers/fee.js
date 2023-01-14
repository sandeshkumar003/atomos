import React from "react";
// import style from "../style/Contact.module.css";
import Carousel from 'react-bootstrap/Carousel';
import ba from "../assets/reg-fee.png";


function FeeScreen() {
    return (
        <div>
            {/* <h1>BA</h1> */}
            <div className="slider-div">
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ba}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
}

export default FeeScreen;
