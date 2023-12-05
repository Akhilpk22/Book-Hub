import React from "react";
import "./Auth.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auth() {
    
  return (
    <>
      <div className="bg-image-in-Auth">
        <div className="container d-flex justify-content-around align-items-center">
          <div>{/* Your other content goes here */}</div>
          <div className="card-inAuth text-light">
            <div className="w-100  d-flex justify-content-center           align-items-center">
              <Form className="w-75">
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter UserName"
                    className=" mt-5" // Add text-center class
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    className=" " // Add text-center class
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Control
                    type="password" // Change the type to "password" for password 
                    placeholder="Enter Password"
                    className="overflow-y-hidden " // Uncomment and add 
                  />
                </Form.Group>
              </Form>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <div className="data-container">
                <Link style={{color:"white",textDecoration:"none"}} to={'/Home'}><span className="buttons ">Register</span></Link>
              </div>

            </div>
            <p style={{marginTop:"12px"}} className="text-center ">sign in to your Account<h1 style={{color:"whitesmoke"}} className="btn border-0 "> Login</h1></p>


          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
