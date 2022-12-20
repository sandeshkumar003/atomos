import React from "react";
import { IconContext } from "react-icons";
import { MdEmail as Email } from "react-icons/md";
import { BsFacebook as Fb } from "react-icons/bs";
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import style from "../style/Modules.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Chemistry from "../assets/Modules/Chemistry.png";
import Biology from "../assets/Modules/Biology.png";
import Robotics from "../assets/Modules/Robotics.png";
import Sustainibility from "../assets/Modules/Sustainibility.png";
import Electricity from "../assets/Modules/Electricity.png";
import Astronomy from "../assets/Modules/Astronomy.png";
import Construction from "../assets/Modules/Construction.png";
import CS from "../assets/Modules/CS.png";
import CSI from "../assets/Modules/CSI.png";
import EscapeRoom from "../assets/Modules/EscapeRoom.png";
import Maths from "../assets/Modules/Maths.png";
import Multiverse from "../assets/Modules/Multiverse.png";

function modules() {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <div>
          <h1 className={style.heading}>Modules</h1>
        </div>
        <div>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Astronomy} className={style.logo} style={{ backgroundColor: "#FFBE64" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>KASHISH-E-KHLA</Card.Title>
              <Card.Text className={style.desc}>
                Do you marvel at the moon and stars in the night sky? Were you
                ever taken aback by the beauty of the universe, when you first
                saw the photographs from the James Webb Space Telescope? If so,
                then hang in there. From exploring the cosmos, to uncovering the
                missing parts in the universe, to pondering the significance of
                our existence, you're up for a challenge. Through this journey
                you're existing knowledge of astronomy and space would be
                tested. If you're a wanderer with a knack for constellation,
                then this is the module for you! Join us, for an intriguing
                excursion to the sky, universe and beyond.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Chemistry} className={style.logo} style={{ backgroundColor: "#97426A" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>ELIXIR VITAE</Card.Title>
              <Card.Text className={style.desc}>
                There is a new disease in town, and people are dying! To help
                save lives, you need to use your knowledge, come up with a plan,
                and develop an antidote. If you're someone who enjoys
                experimenting with various chemical substances or electronic
                devices, has a liking for technical details and is brave enough
                to take the immediate measures then register for Elixir Vitae.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Biology} className={style.logo} style={{ backgroundColor: "#35503B" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>THEODOSIUS APOPTOSIS</Card.Title>
              <Card.Text className={style.desc}>
                Prepare to dive into the mysterious biological realm to discover
                your inner biophilia gene and the secrets of life imprinted
                within your body's cells like never before! Get ready to embark
                on an adventure developed specifically for you to conquer
                objectives using your imagination, experimentation, and research
                skills! This module will allow you to spend a day pretending to
                be a doctor, geneticist, researcher, or even a nutrionist! Are
                you up for the challenge? Brace yourselves so you don't
                apoptosis off this biollercoaster! Register now and don't let
                your spines hold you back!
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={CSI} className={style.logo} style={{ backgroundColor: "#CDA693" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>SIX FEET UNDER</Card.Title>
              <Card.Text className={style.desc}>
                In this classic who dunnit,' seek for the proper clues and cues
                to solve the murder of a wealthy oldie! On the 'night of his
                78th birthday, he collapses under mysterious circumstances in
                the presence of his entire family. You get to interrogate the
                suspects, examine the crime scene, and analyze the murderer's
                motive. Get caught up in the red herrings and you’ll be
                deviously misled in this exquisite instance of betrayal.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Multiverse} className={style.logo} style={{ backgroundColor: "#16356D" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>MULTIVERSE</Card.Title>
              <Card.Text className={style.desc}>
                The nights are filled with demons and ghouls, and gigantic
                titans lurk outside our town's walls. What would you do in a
                scenario like this? Do you have the skills to meet such a
                challenge? If you are someone who's capable of doing so, brush
                up on your skills and prepare yourself for war, because only the
                best have what it takes to fight; heroes! At midnight, we take
                them all on!
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={EscapeRoom} className={style.logo} style={{ backgroundColor: "#965473" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>KRYPTOS CHAMBER</Card.Title>
              <Card.Text className={style.desc}>
                Put your logical problem solving skills to test, let this module
                leave you impressed. You will be required to solve various
                cyphers and riddles, while you may also face some hurdles in the
                middle. Prepare to solve conceptual challenges, which will be
                combined with your intuitions to solve the mysteries. With us,
                be prepared to be riddled!
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Electricity} className={style.logo} style={{ backgroundColor: "#52C1C1" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>TRONCITY</Card.Title>
              <Card.Text className={style.desc}>
                Built to bring together design and electrical engineering
                enthusiasts to cooperate on a project focused on real-world
                concerns. Collaborate to develop prototypes and tackle all
                potential facets of the situations. Use the ’spark’ in you,
                present electrifying solutions and fret not, the world of
                circuits awaits!
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Robotics} className={style.logo} style={{ backgroundColor: "#19687A" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>AUTOBOT</Card.Title>
              <Card.Text className={style.desc}>
                Do you enjoy experimenting with how machines operate? Are you a
                circuit genius or someone who is pleased to call yourself a
                programmer? Don't worry; Autobot is here to satiate your
                creativity. As the clock ticks, our module will help you uncover
                your skills through a remarkable adventure of critical thinking.
                We believe in the power of robotics to transform our lives and
                the future of our planet.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Maths} className={style.logo} style={{ backgroundColor: "#89878A" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>Reyaziat</Card.Title>
              <Card.Text className={style.desc}>
                The human knowledge of mathematics has evolved tremendously from
                the early days of geometric intuition to modern algebraic
                formalism, from naïve set theory to ZFC. Though this art form of
                pure reasoning is more undervalued by the modern human, Reyaziat
                seeks to reestablish the link. It allows participants to explore
                the beauty of mathematics and will encourage you to reason
                rigorously. If mathematics fascinates you, then this is the
                module for you.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={Construction} className={style.logo} style={{ backgroundColor: "#9458A4" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>TROJAN CONSTRUE</Card.Title>
              <Card.Text className={style.desc}>
                If you have an aptitude for construction and are creative in
                your own manner, now is your chance to craft anything out of
                building blocks as time runs out. With a limited set of items,
                are you up for the challenge? A chance to bring your idea to
                life!
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img
              variant="top"
              src={Sustainibility}
              className={style.logo} style={{ backgroundColor: "#437955" }}
            />
            <Card.Body className={style.cardElements}>
              <Card.Title>ECO-LUTION</Card.Title>
              <Card.Text className={style.desc}>
                Plunge into your creativity and design something for your
                planet. Use your analytical talents to build the best
                sustainable, yet cost-effective solution, for yourself and your
                home, Earth! Bringing into play the three E's (economy, ecology,
                and equity) of sustainability, this module not only checks your
                reasoning ability but also allows you to expand your policy
                knowledge.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className={style.cardStyles}>
            <Card.Img variant="top" src={CS} className={style.logo} style={{ backgroundColor: "#8391C8" }} />
            <Card.Body className={style.cardElements}>
              <Card.Title>CODEDASH</Card.Title>
              <Card.Text className={style.desc}>
                The clock is ticking, and you must code to beat it even as you
                break into a sweat. A stimulus incorporating computer science
                competitiveness. Carefully curated to give you the ultimate
                experience you need for speed programming, which fosters
                creativity and pushes you out of your comfort zone.
              </Card.Text>

            </Card.Body>
          </Card>
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

export default modules;
