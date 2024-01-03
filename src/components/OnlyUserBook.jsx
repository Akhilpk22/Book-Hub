import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Offcanvas, Row } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import { deleteAPI, edituserAPI, userBookAPI } from "../Services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../Services/baseurl";
import {
  bookDateResponseContext,
  editBookResponseContext,
} from "../Context/ContextShare";
import { Alert } from "react-bootstrap";
import EditBooks from "./EditBooks";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "animate.css";

function OnlyUserBook() {
  // another  one context call
  const { editBookResponse, seteditBookResponse } = useContext(
    editBookResponseContext
  );

  // context call
  const { bookdateResponse, setBookdateResponse } = useContext(
    bookDateResponseContext
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);

  //  to lo hold the user name we want to state create
  const [username, setUsername] = useState("");

  // to load the name of the user
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username);
    }
  }, []);

  // there is a state that value will be store in old map argument is book
  const [selectedBooks, setSelectedBooks] = useState(null);

  // user book hold  state
  const [userBooks, setuserBooks] = useState([]);

  const getUserBooks = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await userBookAPI(reqHeader);
      if (result.status === 200) {
        setuserBooks(result.data);
      } else {
        toast.warning(result.response.data);
      }
    }
  };

  // open function will be call in the handlecardlick this argumenet book is passed
  const handleCardClick = (book) => {
    setSelectedBooks(book);
    handleShow();
  };

  // handledelete function define

  const handledelete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await deleteAPI(id, reqHeader);
    if (result.status === 200) {
      // page reload mongo bd call
      getUserBooks();
      alert(
        "Deleting this item will remove it permanently. Do you wish to proceed "
      );
    } else {
      toast.error(result.response.data);
    }
  };



  // update code

  const [userprofile, setUserProfile] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
  });
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");


  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    setUserProfile({
      ...userprofile,
      username: user.username,
      email: user.email,
      password: user.password,
      profile: ""});
    setExistingImage(user.profile);
    
  }, []);

  useEffect(() => {
    if (userprofile.profile) {
      setPreview(URL.createObjectURL(userprofile.profile));
    } else {
      setPreview("");
    }
  }, [userprofile.profile]);

const handeprofileUpdate= async()=>{
  const {username,email,password,profile}= userprofile
  if(!username){
    toast.info("please upload the your photo")
  }else{
    const reqBody= new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    preview? reqBody.append("profileImage", profile):reqBody.append("profileImage", existingImage);
    const  token = sessionStorage.getItem("token")
    if(preview){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      }
      // api call
      const res = await edituserAPI(reqBody, reqHeader);
      if(res.status===200){
        setOpen(!open)
        sessionStorage.setItem("existingUser",JSON.stringify(res.data))
      }else{
        setOpen(!open)
        console.log(res);
        console.log(res.response.data);
      }
    }else{
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
      // api
      const res = await edituserAPI(reqBody, reqHeader);
      if(res.status===200){
        setOpen(!open)
        sessionStorage.setItem("existingUser",JSON.stringify(res.data))
      }else{
        setOpen(!open)
        console.log(res);
        console.log(res.response.data);
      }
    }
  
  }
}























// update end 
  useEffect(() => {
    getUserBooks();
    // use context state
  }, [bookdateResponse, editBookResponse]);
  console.log(userBooks);










  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <h2 className="fw-bolder textshow"> User Books </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          className="mt-4"
          style={{
            width: "100%", // Adjust the width for larger screens
            maxWidth: "340px", // Set a maximum width for smaller screens
            backgroundColor: "white",
            color: "black",
            padding: "20px", // Add padding for better spacing
            boxSizing: "border-box", // Include padding and border in the total width
          }}
        >
          <p
            style={{ textTransform: "uppercase", height: "60px" }}
            className="text-center p-3 fw-bolder shadow-lg "
          >
            {username}{" "}
          </p>

          <div className="text-center mt-4 animate__animated  animate__bounceInUp">
            <p>
              {" "}
              ❤️Our profiles tell a tale of two kindred spirits,💞📝" where
              Malayalam nuances meet English expressions, creating a love story
              written in the universal language of the heart. 💑📚"
            </p>
          </div>

          <div className="d-flex justify-content-around mt-4 align-items-center ">
            <h4>Update MyProfile</h4>
            <Button
              className="btn btn-outline-dark"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <i class="fa-solid fa-arrow-down-long"></i>
            </Button>
          </div>
          <Collapse className="bg-black p-3 rounded-3  mt-2" in={open}>
            <div id="example-collapse-text">
              <div className="row justify-content-center mt-3">
              <label className="text-center">
              <input
                style={{ display: "none" }}
                onChange={(e) =>
                  setUserProfile({ ...userprofile, profile: e.target.files[0] })
                }
                type="file"
              />

              {existingImage !== "" ? (
                <img
                  height={"200px"}
                  width={"200px"}
                  className="rounded-circle border"
                  alt="Uploading picture"
                  src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`}
                />
              ) : (
                <img
                  height={"200px"}
                  width={"200px"}
                  className="rounded-circle border"
                  alt="Uploading picture"
                  src={
                    preview
                      ? preview
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuG-1sL9aUGxNGXIL0xLZQ39gV3gCnw7iUg&usqp=CAU"
                  }
                />
              )}
            </label>
                <div className="mt-5 mb-3 text-center ">
                  <input  className="form-control " type="text" placeholder="enter the new password"value={userprofile.username}
                  onChange={e=>setUserProfile({...userprofile,username:e.target.value})} />

                </div>
                <div className="mt-3 btn">
                  <Button onClick={handeprofileUpdate} className="btn ">Update</Button>
                </div>
              </div>
            </div>
          </Collapse>
        </div>

        <div style={{ flex: "1", padding: "20px" }}>
          {/* XX to add massage  */}
          {bookdateResponse.bookTitle ? (
            <Alert className="bg-success" dismissible>
              <span className="fw-bolder  text-danger">
                {bookdateResponse.bookTitle}
              </span>
              Added successfuly!!!...
            </Alert>
          ) : null}
          <Container>
            <Row className="mt-2">
              {userBooks?.length > 0 ? (
                userBooks.map((book) => (
                  <Col className="mt-3" sm={12} md={6}>
                    <Card className="border-black border-3">
                      <Card.Img
                        onClick={() => handleCardClick(book)}
                        style={{ height: "350px" }}
                        className="img-fluid w-100 border-3"
                        variant="top"
                        src={
                          book
                            ? `${BASE_URL}/uploads/${book?.bookImage}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                        }
                      />
                      <p
                        style={{ fontSize: "20px" }}
                        className="text-center fw-bolder "
                      >
                        {book.bookTitle}
                      </p>
                    </Card>
                  </Col>
                ))
              ) : (
                <h1 className=" ms-5 fw-bolder text-danger animate__animated animate__bounceInUp">
                  No projects add.....
                </h1>
              )}
            </Row>
          </Container>
          <Offcanvas
            style={{ width: "600px" }}
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <span className="text-black">Welcome</span>{" "}
                <span
                  style={{ fontSize: "25px", textTransform: "uppercase" }}
                  className="text-success fw-bolder   "
                >
                  {username}
                </span>
              </Offcanvas.Title>
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
                    <EditBooks selectedBooks={selectedBooks} />
                    <button
                      onClick={() => handledelete(selectedBooks._id)}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </div>
                </Fade>
              </div>
            ) : null}

            {/* Edit Modal */}
            {/* <Modal
              show={editModalShow}
              onHide={handleEditModalClose}
              className="custom-modal"
            >
              <Modal.Header className="bg-black" closeButton>
                <Modal.Title className="text-white text-center">
                  Edit Book
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-black">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-white fw-bolder  ">
                      Book Title:{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book Title:"
                      autoFocus
                    />
                    <Form.Label className="text-white fw-bolder ">
                      Author Name:{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Author Name:"
                      autoFocus
                    />
                    <Form.Label className="text-white fw-bolder ">
                      Book Category:{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book Category:"
                      autoFocus
                    />
                    <Form.Label className="text-white fw-bolder ">
                      Book Description:{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Book Description:"
                      autoFocus
                    />

                    <Form.Label className="text-white fw-bolder ">
                      Link to Book:{" "}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="Link to Book:"
                      autoFocus
                    />
                  </Form.Group>
                  <div
                    className="border rounded-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30vh", // Adjust this based on your layout requirements
                    }}
                  >
                    <label className="bg-white ">
                      <input style={{ display: "none" }} type="file" />
                      <img src="" className="rounded-circle " alt="Upload" />
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
            </Modal> */}

            <Offcanvas.Body>
              <Card className="animate__animated  animate__bounceInRight">
                <Card.Img
                  onClick={handleShow}
                  style={{ height: "390px" }}
                  className="img-fluid w-100"
                  variant="top"
                  src={
                    selectedBooks
                      ? `${BASE_URL}/uploads/${selectedBooks?.bookImage}`
                      : "https://encrypted-tbn0.com/images?q=tbn:ANd9GcQw-b858lqevPWoaf10kfmN0mOaV1K0y-1gOEwaarhfbUOlIQueevGlKzQaQg&s"
                  }
                />
              </Card>
              <h4 className="mt-4 text-info">
                Book Title:{" "}
                <span className="text-success ">
                  {selectedBooks?.bookTitle}
                </span>
              </h4>
              <h4 className="text-info">
                Author Name:
                <span className="text-success">
                  {" "}
                  {selectedBooks?.autorName}
                </span>
              </h4>
              <h4 className="text-info">
                Book Category:
                <span className="text-success">
                  {" "}
                  {selectedBooks?.bookCategory}
                </span>
              </h4>
              <h4 className="text-info">
                Book Description:
                <span className="clamp-lines ">
                  <span className="text-success">
                    {selectedBooks?.bookDescription}
                  </span>
                </span>
              </h4>
              <h4 className="mt-1">
                <a
                  href={selectedBooks?.bookLink}
                  target="_blank"
                  className="me-3 btn border-0 "
                >
                  <p className="fw-bolder me-5 border-0 more">
                    more details click here
                  </p>
                </a>
              </h4>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
      </div>
    </>
  );
}

export default OnlyUserBook;
