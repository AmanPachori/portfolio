import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="Home">
      <Container className="container  my-5">
        <Row>
          <Col className="p-5 my-2 text-start">
            <p className="fs-1 fw-bold">Hello</p>
            <p className="fs-3 fw-bolder">
              {" "}
              My Name is Aman <br /> I'm a student at IIIT Gwalior and a{" "}
              <span
                className="fs-3 fw-bolder"
                style={{ color: "var(--primaryColor)" }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: [
                      "Full Stack Developer",
                      "Open Source Contributor",
                      "Blockchain enthusiast",
                    ],
                  }}
                ></Typewriter>{" "}
                <a
                  href="https://drive.google.com/file/d/17G_49OWRe8CEeNHoAUT1lf1KNpMCRGiY/view"
                  target="_blank"
                >
                  <button className="border-0 resumeButton rounded p-2 fs-5 my-2">
                    Resume{" "}
                  </button>
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
