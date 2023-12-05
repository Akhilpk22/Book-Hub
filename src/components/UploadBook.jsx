import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './UploadBook.css'


function UploadBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        style={{ height: "60vh", width: "100%" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="data-container">
          <h2 style={{ fontSize: "40px", fontWeight: "bolder" }} onClick={handleShow} className="buttons">
            Sell Your Book
          </h2>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="custom-modal" > {/* Add custom class */}
        <Modal.Header className="bg-black " closeButton>
          <Modal.Title className="text-white text-center">Modal heading</Modal.Title>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  );
}

export default UploadBook;
