import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import photo from "../../assets/gdlove.png";
import photo2 from "../../assets/netflix.png";
import photo3 from "../../assets/Prodotti.png";
import photo4 from "../../assets/Biblioteca.png";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./styles.css";

function Portfolio() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Portfolio</h1>
        <Row className="mt-5 mb-5">
          <Col lg={3} xs={12} className="p-3 d-flex flex-column">
            <Card style={{ width: "18rem", height: "21rem" }} className="card">
              <Card.Img variant="top" src={photo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Graduation Project</Card.Title>
                <Card.Text>
                  Web app che gestisce gruppi di lettura online sviluppata con
                  React, Node.js e Three.js.
                </Card.Text>
                <Button
                  variant="primary"
                  className="bottone"
                  href="https://gdlove.netlify.app/"
                >
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12} className="p-3">
            <Card style={{ width: "18rem", height: "21rem" }}>
              <Card.Img variant="top" src={photo2} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Netflix Clone</Card.Title>
                <Card.Text>
                  Interfaccia clone di Netflix sviluppato con html, css e
                  javascript.
                </Card.Text>
                <Button
                  variant="primary"
                  className="bottone"
                  href="https://netflix-clone-m3-d7.onrender.com/"
                >
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12} className="p-3">
            <Card style={{ width: "18rem", height: "21rem" }}>
              <Card.Img variant="top" src={photo3} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Store Prodotti</Card.Title>
                <Card.Text>
                  Programma che gestisce uno store di prodotti sviluppato con
                  Java e MySQL.
                </Card.Text>
                <Button variant="primary" className="bottone" href="">
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12} className="p-3">
            <Card style={{ width: "18rem", height: "21rem" }}>
              <Card.Img variant="top" src={photo4} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Biblioteca</Card.Title>
                <Card.Text>
                  Programma che gestisce una biblioteca sviluppato con Java e
                  MySQL.
                </Card.Text>
                <Button variant="primary" className="bottone" href="">
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Portfolio;
