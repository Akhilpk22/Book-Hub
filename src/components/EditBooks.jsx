import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"; 
import { BASE_URL } from "../Services/baseurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editbookAPI } from "../Services/allAPI";
import { editBookResponseContext } from "../Context/ContextShare";

function EditBooks({ selectedBooks }) {
// context
const {editBookResponse,seteditBookResponse}= useContext(editBookResponseContext)

  // to store to image in type url to create state hold
  const [preview, setPreview] = useState("");

  // this state book detailes hold
  const [booksdetails, setBooksdetails] = useState({
    id: selectedBooks._id,
    bookTitle: selectedBooks.bookTitle,
    autorName: selectedBooks.autorName,
    bookCategory: selectedBooks.bookCategory,
    bookDescription: selectedBooks.bookDescription,
    bookLink: selectedBooks.bookLink,
    bookImage: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {

      setShow(false)
      setBooksdetails({id: selectedBooks._id,
        bookTitle: selectedBooks.bookTitle,
        autorName: selectedBooks.autorName,
        bookCategory: selectedBooks.bookCategory,
        bookDescription: selectedBooks.bookDescription,
        bookLink: selectedBooks.bookLink,
        bookImage: "",
      })
        setPreview("")
  };
  const handleShow = () => setShow(true);

  // update method 
  const handleUpdate= async()=>{
    const {id,bookTitle,autorName,bookCategory,bookDescription,bookLink,bookImage}= booksdetails
    if(!bookTitle && !autorName && !bookCategory && !bookDescription && bookLink){
      alert("please fill the form ")
    }else{
      // api call all Api 
      const reqBody = new FormData()
      reqBody.append("bookTitle", bookTitle);
      reqBody.append("autorName", autorName);
      reqBody.append("bookCategory", bookCategory);
      reqBody.append("bookDescription", bookDescription);
      reqBody.append("bookLink", bookLink);
      preview? reqBody.append("bookImage", bookImage):reqBody.append("bookImage", selectedBooks.bookImage);

      const  token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        }
        // api call
        const result = await editbookAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          toast.success("book detailes  is update ")

          // pass response to only user book  using context
          seteditBookResponse(result.data)
        }
        else{
          console.log(result);
          toast.error(result.response.data)
        }

      }else{
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
        // api call
        const result = await editbookAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to only user book  using context 
          seteditBookResponse(result.data)
        }
        else{
          console.log(result);
          toast.error(result.response.data)
        }    

      }
    }

  }



  

// console.log(selectedBooks);
// console.log(booksdetails);
  useEffect(() => {
    if (booksdetails.bookImage) {
      setPreview(URL.createObjectURL(booksdetails.bookImage));
    }
  }, [booksdetails.bookImage]);

  return (
    <div>
      <button onClick={handleShow} className="btn btn-danger me-4">
        Edit
      </button>
      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header className="bg-black" closeButton>
          <Modal.Title className="text-white text-center">
            Edit Book
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
                onChange={e=>setBooksdetails({...booksdetails,bookTitle:e.target.value})}
                type="text"
                placeholder="Book Title:"
              />
              <Form.Label className="text-white fw-bolder ">
                Author Name:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={booksdetails.autorName}
                onChange={e=>setBooksdetails({...booksdetails,autorName:e.target.value})}
                placeholder="Author Name:"
              />
              <Form.Label className="text-white fw-bolder ">
                Book Category:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookCategory}
                onChange={e=>setBooksdetails({...booksdetails,bookCategory:e.target.value})}
                type="text"
                placeholder="Book Category:"
                autoFocus
              />
              <Form.Label className="text-white fw-bolder ">
                Book Description:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookDescription}
                onChange={e=>setBooksdetails({...booksdetails,bookDescription:e.target.value})}
                type="text"
                placeholder="Book Description:"
                autoFocus
              />

              <Form.Label className="text-white fw-bolder ">
                Link to Book:{" "}
              </Form.Label>
              <Form.Control
                value={booksdetails.bookLink}
                onChange={e=>setBooksdetails({...booksdetails,bookLink:e.target.value})}
                type="url"
                placeholder="Link to Book:"
                autoFocus
              />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center ">
              {/* Uploading image when input type file */}
              <label className="bg-white">
                <input style={{ display: "none" }} type="file" onChange={e=>setBooksdetails({...booksdetails,bookImage:e.target.files[0]})} />
                <img
                  src={preview?preview:`${BASE_URL}/uploads/${selectedBooks.bookImage}`}
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
          <Button variant="primary"onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

    </div>
  );
}

export default EditBooks;
