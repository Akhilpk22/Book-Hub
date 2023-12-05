import React from "react";
import { useState } from "react";
import { Card, Col, Container, Offcanvas, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function OnlyUserBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editModalShow, setEditModalShow] = useState(false);
  
  const [open, setOpen] = useState(false);

  const handleEditModalShow = () => setEditModalShow(true);
  const handleEditModalClose = () => setEditModalShow(false);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <h2>All user Books </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          className="mt-4"
          style={{
            width: "100%", // Adjust the width for larger screens
            maxWidth: "300px", // Set a maximum width for smaller screens
            backgroundColor: "white",
            color: "black",
            padding: "20px", // Add padding for better spacing
            boxSizing: "border-box", // Include padding and border in the total width
          }}
        >
                      <label  className='bg-white '>
                    <input style={{display:'none'}} type="file"  />
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU" className='rounded-circle ' alt="Upload" />      
              </label>
          <p className="text-center fw-bolder shadow-lg mt-3">Akhil pk </p>
          <div className="d-flex justify-content-around  align-items-center ">
            <p>follow up</p>
            <p>like</p>
          </div>
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          <Container>
            <Row className="mt-2">
              <Col className="mt-3" sm={12} md={6}>
                {/* Adjust column sizes based on your design */}
                <Card>
                  <Card.Img
                    onClick={handleShow}
                    style={{ height: "250px" }}
                    className="img-fluid w-100"
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                  />
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-center fw-bolder "
                  >
                    title
                  </p>
                </Card>
              </Col>
              <Col className="mt-3" sm={12} md={6}>
                {/* Adjust column sizes based on your design */}
                <Card>
                  <Card.Img
                    onClick={handleShow}
                    style={{ height: "250px" }}
                    className="img-fluid w-100"
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                  />
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-center fw-bolder "
                  >
                    title
                  </p>
                </Card>
              </Col>
              <Col className="mt-3" sm={12} md={6}>
                {/* Adjust column sizes based on your design */}
                <Card>
                  <Card.Img
                    onClick={handleShow}
                    style={{ height: "250px" }}
                    className="img-fluid w-100"
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                  />
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-center fw-bolder "
                  >
                    title
                  </p>
                </Card>
              </Col>
              <Col className="mt-3" sm={12} md={6}>
                {/* Adjust column sizes based on your design */}
                <Card>
                  <Card.Img
                    onClick={handleShow}
                    style={{ height: "250px" }}
                    className="img-fluid w-100"
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                  />
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-center fw-bolder "
                  >
                    title
                  </p>
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
            <div className="d-flex justify-content-between align-items-center  m-1 ">
              <div></div>
              <div onClick={() => setOpen(!open)} className="me-5 btn">
                <i
                  className={`fa-solid fa-ellipsis-vertical fa-xl "
                  }`}
                ></i>
              </div>
            </div>
            {open ? (
              <div className="d-flex justify-content-end align-items-center me-5">
                <Fade in={open}>
                  <div className="d-flex justify-content-start align-items-center m-2 mt-4">
                  <button className="btn btn-info me-3" onClick={handleEditModalShow}>
                    edit
                  </button>
                    <button className="btn btn-danger">delete</button>
                  </div>
                </Fade>
              </div>
            ) : null}

 {/* Edit Modal */}
          <Modal show={editModalShow} onHide={handleEditModalClose} className="custom-modal">
            <Modal.Header className="bg-black" closeButton>
              <Modal.Title className="text-white text-center">Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-black">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white fw-bolder  ">Book Title: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Title:"
                autoFocus
              />
              <Form.Label className="text-white fw-bolder ">Author Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Author Name:"
                autoFocus
              />
              <Form.Label className="text-white fw-bolder ">Book Category: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Category:"
                autoFocus
              />
              <Form.Label className="text-white fw-bolder ">Book Description: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Description:"
                autoFocus
              />
              
              <Form.Label className="text-white fw-bolder ">Link to Book: </Form.Label>
              <Form.Control
                type="url"
                placeholder="Link to Book:"
                autoFocus
              />
            </Form.Group>
            <div className="border rounded-4" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh', // Adjust this based on your layout requirements
      }}>
            <label  className='bg-white '>
                    <input style={{display:'none'}} type="file"  />
                    <img  src="" className='rounded-circle ' alt="Upload" />      
              </label>
              </div>
          </Form>
            </Modal.Body>
            <Modal.Footer className="bg-black">
              <Button variant="secondary" onClick={handleEditModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEditModalClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>


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
      </div>
    </>
  );
}

export default OnlyUserBook;
