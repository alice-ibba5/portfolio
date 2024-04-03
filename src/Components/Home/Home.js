import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import photo from "../../assets/photo.jpg";
import { Container, Row, Col, Image, Button, Stack } from "react-bootstrap";
import "./styles.css";

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col
            lg={6}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            id="polaroid"
          >
            <Col
              id="quadrato"
              className="d-flex flex-column align-content-center"
            >
              <Image
                src={photo}
                id="photo"
                className="align-self-center mt-4"
              />
              <h5 className="ms-5 mt-3">Contatti:</h5>
              <h6 className="ms-5">• alice.ibba5@gmail.com</h6>
              <h6 className="ms-5">• +39 346 2405424</h6>
            </Col>
          </Col>

          <Col lg={5} xs={12}>
            <h1>Ciao, mi chiamo Alice Ibba</h1>
            <h4>💻 Developer per passione.</h4>

            <Container className="d-flex flex-column align-items-center">
              <Stack gap={2}>
                <div>
                  <Button
                    variant="light"
                    href="https://www.linkedin.com/in/alice-ibba-developer/"
                    className="w-100"
                  >
                    LinkedIn
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    href="https://github.com/alice-ibba5"
                    className="w-100"
                  >
                    GitHub
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    href="https://drive.google.com/file/d/1NbWBq9QyzbD4uk41Qg3X9qmlqxOAShy9/view?usp=sharing"
                    className="w-100"
                  >
                    CV
                  </Button>
                </div>
                <div>
                  <Button
                    variant="light"
                    href="/portfolio"
                    className="w-100 mb-5"
                  >
                    Portfolio
                  </Button>
                </div>
              </Stack>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col lg={12} xs={12}>
            <div className="">
              <p>
                👩‍💻 Sono una sviluppatrice web full-stack con un background
                altrettanto diversificato quanto i miei interessi! 🎨
              </p>

              <p>
                🚀 Recentemente, alimentata dalla mia passione per la tecnologia
                e lo sviluppo web, mi sono lanciata in un percorso di 6 mesi per
                diventare una sviluppatrice web full-stack.
              </p>
              <p>
                📖 Le mie competenze spaziano dallo sviluppo frontend a quello
                backend, includendo HTML, CSS, JavaScript, React, Node.js,
                Bootstrap, MongoDB, Java, Springboot e MySQL.
              </p>

              <p>
                💡 Mi piace pensarmi come una multipotenziale, con una miriade
                di interessi e passioni creative. Oltre alla tecnologia, sono
                profondamente affascinata dalla psicologia, dalla sostenibilità,
                dal benessere e dal design.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
