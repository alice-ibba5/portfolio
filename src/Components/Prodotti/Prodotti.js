import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import video from "../../assets/Prodotti.mp4";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Prodotti() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Store prodotti</h1>
        <Row className="mt-5 mb-5">
          <Col lg={12} xs={12} className="">
            <video
              controls
              className="video-container"
              style={{ width: "45rem" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Prodotti;
