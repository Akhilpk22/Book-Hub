import React from "react";
import "./BookView.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";



function BookView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h2>All Books </h2>
        </div>

        <Container>
          <Row className="mt-5">
            <Col className="mt-3" sm={6} md={4} lg={3}>
              {/* Adjust column sizes based on your design */}
              <Card>
                <Card.Img
                  onClick={handleShow}
                  style={{ height: "250px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                />
              </Card>
            </Col>
            <Col className="mt-3" sm={6} md={4} lg={3}>
              {/* Adjust column sizes based on your design */}
              <Card>
                <Card.Img
                  onClick={handleShow}
                  style={{ height: "250px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                />
              </Card>
            </Col>
            <Col className="mt-3" sm={6} md={4} lg={3}>
              {/* Adjust column sizes based on your design */}
              <Card>
                <Card.Img
                  onClick={handleShow}
                  style={{ height: "250px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                />
              </Card>
            </Col>
            <Col className="mt-3" sm={6} md={4} lg={3}>
              {/* Adjust column sizes based on your design */}
              <Card>
                <Card.Img
                  onClick={handleShow}
                  style={{ height: "250px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                />
              </Card>
            </Col>
          </Row>
        </Container>
        <Offcanvas
          style={{ width: "600px" }}
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Welcome User</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Card>
              <Card.Img
                onClick={handleShow}
                style={{ height: "250px" }}
                className="img-fluid w-100"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
              />
            </Card>
            <h4 className="mt-4">Author Name:</h4>
            <h4>Book Category:</h4>
            <h4>
              Book Description:
              <span className="clamp-lines">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus tempora asperiores labore accusamus porro laborum
                dolorum illo assumenda sint accusantium, iusto hic rerum minus
                nam fugit provident, dolor culpa adipisci.
              </span>
            </h4>
            <h4>
              Link to
              Book:"https://www.freepik.com/free-photos-vectors/pdf-book"
            </h4>
            
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default BookView;
