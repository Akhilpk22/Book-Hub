import React, { useEffect } from "react";
import "./BookView.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { homeBookAPI } from "../Services/allAPI";
import { BASE_URL } from "../Services/baseurl";

function BookView() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // there is a state that value will be store in old map argument is book 
  const [selectedBook, setSelectedBook] = useState(null);


  const [allBooks,setAllBooks] = useState([])
  // api call with function
  const getAllBooks = async()=>{
    const result = await homeBookAPI()
    if(result.status===200){
      setAllBooks(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }

console.log(allBooks);

  useEffect(()=>{
    getAllBooks()

  },[])
  // open function will be call in the handlecardlick this argumenet book is passed 
  const handleCardClick = (book) => {
    setSelectedBook(book);
    handleShow();
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h2>All Books </h2>
        </div>
        <Container>
          <Row className="mt-5">
            { allBooks?.length>0?allBooks.map(book=>(
              <Col className="mt-3" sm={6} md={4} lg={3}>
              
              <Card className="border-black border-3 ">
                <Card.Img
                  onClick={()=>handleCardClick(book)}
                  style={{ height: "350px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src={book?`${BASE_URL}/uploads/${book?.bookImage}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"}
                />
                 <p className="text-center fw-bolder ">{book.bookTitle}</p>
              </Card>
            </Col>
            )):null
              }
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
            <Card className="border-black border-5">
              <Card.Img
                onClick={handleShow}
                style={{ height: "440px" }}
                className="img-fluid w-100"
                variant="top"
                src={selectedBook?`${BASE_URL}/uploads/${selectedBook?.bookImage}`:"https://encrypted-tbn0.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"}
              />
             
            </Card>
            <h4  className="mt-4 text-info">Book Title: <span className="text-success " >{selectedBook?.bookTitle}</span ></h4>
            <h4 className="text-info">Author Name:<span className="text-success"> {selectedBook?.autorName}</span></h4>
            <h4 className="text-info">Book Category:<span  className="text-success"> {selectedBook?.bookCategory}</span></h4>
            <h4 className="text-info">
              Book Description:
              <span className="clamp-lines "><span  className="text-success">{selectedBook?.bookDescription}</span></span>
            </h4>
            <h4 className="mt-1">
            <a  href={selectedBook?.bookLink} target='_blank' className="me-3 btn border-0 "><p className="fw-bolder me-5 border-0 more">more details click here</p></a>

            </h4>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default BookView;
