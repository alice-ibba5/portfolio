import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import photo from "../../assets/gdlove.png";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./styles.css";

function Portfolio() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Portfolio</h1>
        <Row className="mt-5 mb-5">
          <Col lg={3} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={photo} />
              <Card.Body>
                <Card.Title>Graduation Project</Card.Title>
                <Card.Text>
                  Web app che gestisce gruppi di lettura online.
                </Card.Text>
                <Button variant="primary" className="bottone">
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={photo} />
              <Card.Body>
                <Card.Title>Netflix Clone</Card.Title>
                <Card.Text>
                  Web app che gestisce gruppi di lettura online.
                </Card.Text>
                <Button variant="primary" className="bottone">
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={photo} />
              <Card.Body>
                <Card.Title>Graduation Project</Card.Title>
                <Card.Text>
                  Web app che gestisce gruppi di lettura online.
                </Card.Text>
                <Button variant="primary" className="bottone">
                  Visita
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={photo} />
              <Card.Body>
                <Card.Title>Graduation Project</Card.Title>
                <Card.Text>
                  Web app che gestisce gruppi di lettura online.
                </Card.Text>
                <Button variant="primary" className="bottone">
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
