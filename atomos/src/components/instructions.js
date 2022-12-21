import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Instructions() {
    // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {/* {values.map((v, idx) => ( */}
            <Button className="me-2 mb-2" onClick={() => handleShow('sm-down')}>
                INSTRUCTIONS
                {/* Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
            </Button>

            {/* <Button variant="dark" size='lg' onClick={registerUser}>Register</Button> */}


            {/* ))} */}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>Instructions body content

                    <ol style={{ fontSize: 14 }}>

                        <li>A team can be of 5 to 7 members including the team lead.</li>
                        <li>A team will have participate in 5 modules.</li>
                        <li>From the 5 modules the team has to choose, they must choose at least one module from each of the following
                            categories.
                            <br />
                            <ul type="disc">
                                <li>Category 1: Sciences (any 1 of 4)
                                    <ul type="circle">
                                        <li>Kashish-e-Khla</li>
                                        <li>Reyaziat</li>
                                        <li>Elixir Vitae</li>
                                        <li>Theodosius Apoptosis</li>
                                    </ul>
                                </li>

                                <li>Category 2: Engineering (any 1 of 4)
                                    <ul type="circle">
                                        <li>Autobot</li>
                                        <li>TronCity</li>
                                        <li>Trojan Construe</li>
                                        <li>Codedash</li>
                                    </ul>
                                </li>

                                <li>Category 3: General (any 1 of 4)
                                    <ul type="circle">
                                        <li>Kryptos Chamber</li>
                                        <li>Six Feet Under</li>
                                        <li>Multiverse</li>
                                        <li>Eco-lution</li>
                                    </ul>
                                </li>
                            </ul>
                            The remaining 2 can be chosen from any of modules left.
                        </li>

                        <li>The team lead must check their email for payment details soon after they fill the registration form.</li>
                        <li>The registration will be finalized once the team uploads their paymet confirmation receipt on the account
                            portal/ emails the receipt at <i>atomos@habib.edu.pk</i></li>
                        <li>The form entries will be saved to complete it later on, hence the team must fill the form at once.</li>
                    </ol>

                </Modal.Body>
            </Modal>
        </>
    );
}

// render(<Instructions />);

export default Instructions;