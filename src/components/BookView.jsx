import React, { useEffect } from "react";
import "./BookView.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert, Button, Container, Modal } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { homeBookAPI } from "../Services/allAPI";
import { BASE_URL } from "../Services/baseurl";
import "animate.css";
import { FaStar } from "react-icons/fa";

function BookView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // there is a state that value will be store in old map argument is book
  const [selectedBook, setSelectedBook] = useState(null);

  const [allBooks, setAllBooks] = useState([]);
  // api call with function
  const getAllBooks = async () => {
    const result = await homeBookAPI();
    if (result.status === 200) {
      setAllBooks(result.data);
    } else {
      console.log(result);
      console.log(result.response.data);
    }
  };

  console.log(allBooks);

  useEffect(() => {
    getAllBooks();
  }, []);
  // open function will be call in the handlecardlick this argumenet book is passed
  const handleCardClick = (book) => {
    setSelectedBook(book);
    setQuantity(0);
    handleShow();
  };

  // buy
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setQuantity(0);
    setShowModal(false);
    alert("Are you sure you want to cancel the book purchase?");
  };

  const handleBuyBook = () => {
    if (quantity === 0) {
      alert("Please select at least 1 book to purchase section?.");
      return;
    }

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 6000);

    setQuantity(quantity);

    setShowModal(false);
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center ">
          <h2 className="fw-bolder textshow">All Books </h2>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          
          {showAlert && (
            <Alert
              className="m-4 shadow-lg"
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Book Purchased Successfully!</Alert.Heading>
              <p>
                Your book, "{selectedBook?.bookTitle}", has been quantity for $
                {quantity}.
              </p>
            </Alert>
            
          )}
          
        </div>

        <Container>
          <Row className="mt-5">
            {allBooks?.length > 0
              ? allBooks.map((book) => (
                  <Col className="mt-2" sm={6} md={4} lg={3}>
                    <Card className="border-black border-3 ">
                      <Card.Img
                        onClick={() => handleCardClick(book)}
                        style={{ height: "350px" }}
                        className="img-fluid w-100"
                        variant="top"
                        src={
                          book
                            ? `${BASE_URL}/uploads/${book?.bookImage}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                        }
                      />
                      <p className="text-center fs-6  mt-2 fw-bolder ">
                        {book.bookTitle}
                      </p>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </Container>

        <Offcanvas
          style={{ width: "600px" }}
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Card className="border-black border-5 animate__animated animate__bounceInRight">
              <Card.Img
                onClick={handleShow}
                style={{ height: "440px" }}
                className="img-fluid w-100"
                variant="top"
                src={
                  selectedBook
                    ? `${BASE_URL}/uploads/${selectedBook?.bookImage}`
                    : "https://encrypted-tbn0.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                }
              />
              {/* <div className="mb-3 d-flex justify-content-center align-items-center">
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return(
                          <label >
                            <input type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={()=> setRating(currentRating)}
                             />
                            <FaStar 
                            className="star" 
                              
                            size={20} 
                            color={currentRating <= (hover || rating)?"#ffc107":"#e4e5e9"}
                            onMouseEnter={()=>setHover(currentRating)}
                            onMouseLeave={()=>setHover (null)}

                            />

                          </label>
                        );
                      })}
                  </div> */}
            </Card>
            <h4 className="mt-4 text-info">
              Book Title:{" "}
              <span className="text-success ">{selectedBook?.bookTitle}</span>
            </h4>
            <h4 className="text-info">
              Author Name:
              <span className="text-success"> {selectedBook?.autorName}</span>
            </h4>
            <h4 className="text-info">
              Book Category:
              <span className="text-success">
                {" "}
                {selectedBook?.bookCategory}
              </span>
            </h4>
            <h4 className="text-info">
              Book Description:
              <span className="clamp-lines ">
                <span className="text-success">
                  {selectedBook?.bookDescription}
                </span>
              </span>
            </h4>
            <h4 className="mt-1">
              <div className="d-flex justify-content-center mb-4">
                <a
                  href={selectedBook?.bookLink}
                  target="_blank"
                  className="me-3 btn border-0 "
                >
                  <p className="fw-bolder me-5 border-0 more">
                    more details click here
                  </p>
                </a>
              </div>
            </h4>
            <div>
              <div className="d-flex justify-content-center m-4">
                <button
                  className="btn w-75 bg-success me-3 bounce-button"
                  onClick={handleBuyClick}
                >
                  BUY
                </button>
              </div>

              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title>
                    {" "}
                    <span>
                      Book Name:
                      <span className="text-info">
                        {" "}
                        {selectedBook?.bookTitle}
                      </span>
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* Add your book purchase content here */}
                  <div className="fw-bolder "></div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="mx-2 mt-3  text-success">
                    {selectedBook?.bookTitle} book :{" "}
                    <span className="text-dark fw-bolder ">{quantity}</span>
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleModalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleBuyBook}>
                    Buy
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default BookView;
