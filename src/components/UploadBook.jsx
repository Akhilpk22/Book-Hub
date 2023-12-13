import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./UploadBook.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBooksAPI } from "../Services/allAPI";
import { bookDateResponseContext } from "../Context/ContextShare";

function UploadBook() {
  // context 
  const {bookdateResponse,setBookdateResponse}=useContext(bookDateResponseContext)


  // this state hold to token
  const [token, setToken] = useState("");
  // to store to image in type url to create state hold
  const [preview, setPreview] = useState("");

  // book upload state craete
  const [booksdetails, setBooksdetails] = useState({
    bookTitle: "",
    autorName: "",
    bookCategory: "",
    bookDescription: "",
    bookLink: "",
    bookImage: "",
  });

  // closed and open models
  const [show, setShow] = useState(false);
  // this step is refresh that model all data  empty
  const handleClose = () => {
    setShow(false);
    setBooksdetails({
      bookTitle: "",
      autorName: "",
      bookCategory: "",
      bookDescription: "",
      bookLink: "",
      bookImage: "",
    });
    setPreview("");
  };
  const handleShow = () => setShow(true);

  // this useeffect is  use initialy to get token
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  // this useEffect to pass the image url type
  useEffect(() => {
    if (booksdetails.bookImage) {
      // convert url
      setPreview(URL.createObjectURL(booksdetails.bookImage));
    }
  }, [booksdetails.bookImage]);

  // handle to add  button in front end
  const handleAdd = async (e) => {
    e.preventDefault();
    const {
      bookTitle,
      autorName,
      bookCategory,
      bookDescription,
      bookLink,
      bookImage,
    } = booksdetails;
    if (
      !bookTitle ||
      !autorName ||
      !bookCategory ||
      !bookDescription ||
      !bookLink ||
      !bookImage
    ) {
      toast.info("please fill the form completely !!!");
    } else {
      // api call
      // to create form data using append methord
      const reqBody = new FormData();
      reqBody.append("bookTitle", bookTitle);
      reqBody.append("autorName", autorName);
      reqBody.append("bookCategory", bookCategory);
      reqBody.append("bookDescription", bookDescription);
      reqBody.append("bookLink", bookLink);
      reqBody.append("bookImage", bookImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        const result = await addBooksAPI(reqBody, reqHeader);
        if (result.status === 200) {
          console.log(result.data);
          handleClose();
          toast.success("book added");
          setBookdateResponse(result.data)
        } else {
          console.log(result);
          toast.warning(result.response.data);
        }
      }
    }
  };
  // console.log(token);
  // to verify the data get or not to console.log`
  // console.log(booksdetails);

  return (
    <>
      <div
        style={{ height: "60vh", width: "100%" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="data-container">
          <h2
            style={{ fontSize: "40px", fontWeight: "bolder" }}
            onClick={handleShow}
            className="buttons"
          >
            Sell Your Book
          </h2>
        </div>
      </div>
      

      <Modal show={show} onHide={handleClose} className="custom-modal">
        {" "}
        {/* Add custom class */}
        <Modal.Header className="bg-black " closeButton>
          <Modal.Title className="text-white text-center">
            Add new Books
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white fw-bolder  ">
                Book Title:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookTitle}
                onChange={(e) =>
                  setBooksdetails({
                    ...booksdetails,
                    bookTitle: e.target.value,
                  })
                }
                type="text"
                placeholder="Book Title:"
              />
              <Form.Label className="text-white fw-bolder ">
                Author Name:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={booksdetails.autorName}
                onChange={(e) =>
                  setBooksdetails({
                    ...booksdetails,
                    autorName: e.target.value,
                  })
                }
                placeholder="Author Name:"
              />
              <Form.Label className="text-white fw-bolder ">
                Book Category:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookCategory}
                onChange={(e) =>
                  setBooksdetails({
                    ...booksdetails,
                    bookCategory: e.target.value,
                  })
                }
                type="text"
                placeholder="Book Category:"
                autoFocus
              />
              <Form.Label className="text-white fw-bolder ">
                Book Description:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookDescription}
                onChange={(e) =>
                  setBooksdetails({
                    ...booksdetails,
                    bookDescription: e.target.value,
                  })
                }
                type="text"
                placeholder="Book Description:"
                autoFocus
              />

              <Form.Label className="text-white fw-bolder ">
                Link to Book:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookLink}
                onChange={(e) =>
                  setBooksdetails({ ...booksdetails, bookLink: e.target.value })
                }
                type="url"
                placeholder="Link to Book:"
                autoFocus
              />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center ">
              {/* Uploading image when input type file */}
              <label className="bg-white">
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={(e) =>
                    setBooksdetails({
                      ...booksdetails,
                      bookImage: e.target.files[0],
                    })
                  }
                />
                <img
                  src={
                    preview
                      ? preview
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEydzh4I_O814V1tp1qxGVrclMdnQkpBPh-w&usqp=CAU"
                  }
                  style={{ width: "400px" }}
                  alt="Upload"
                />
              </label>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  );
}

export default UploadBook;
