import React, { useState } from "react";
import "./Auth.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  // usenavigate
  const navigate = useNavigate();

  const isRegisterForm = register ? true : false;

  // create ther state in store the 3 values in register  sections
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // define the registertion method
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info("please fill thr form completely!!! ");
    } else {
      // to define API call
      const result = await registerAPI(userData);
      console.log(result);
      if (result.status === 200) {
        toast.success(`${result.data.username}has  registered successfully!!!`);
        setuserData({
          username: "",
          email: "",
          password: "",
        });
        // when the successfully register
        // to move login pages
        navigate("/");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };
  // end of the users register

  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.info("please fill the form completely !!!");
    } else {
      const result = await loginAPI(userData);
      if (result.status === 200) {
        // all user details up to store  in sessionStorage in existingUser and  token  alway open in that tab
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setuserData({
          email: "",
          password: "",
        });
        navigate("/home");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };
// ending the login sections
  return (
    <>
      <div className="bg-image-in-Auth">
        <div className="container d-flex justify-content-around align-items-center">
          <div>Book-hub</div>
          <div className="card-inAuth text-light">
            <div className="w-100  d-flex justify-content-center align-items-center">
              <Form className="w-75 mt-5">
                {isRegisterForm && (
                  <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Control
                      type="text"
                      placeholder="Enter UserName"
                      value={userData.username}
                      onChange={(e) =>
                        setuserData({ ...userData, username: e.target.value })
                      }
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    className=" "
                    value={userData.email}
                    onChange={(e) =>
                      setuserData({ ...userData, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className=" "
                    value={userData.password}
                    onChange={(e) =>
                      setuserData({ ...userData, password: e.target.value })
                    }
                  />
                </Form.Group>

                <div className=" d-flex justify-content-center align-items-center">
                  {isRegisterForm ? (
                    <>
                      <div className="data-container ">
                        <button
                          onClick={handleRegister}
                          className="buttons border-0  "
                        >
                          Register
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="data-container">
                      <button
                        onClick={handleLogin}
                        className="buttons border-0  "
                      >
                        login
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            </div>
            <h5 className="fw-bolder  text-center  text-light">
              {isRegisterForm ? (
                <p className="mb-3">
                  already have an Account <Link to={"/"}>Login</Link>
                </p>
              ) : (
                <p className="mb-3">
                  New User? clcik here to <Link to={"/register"}>Register</Link>
                </p>
              )}
            </h5>
            {/* <p style={{marginTop:"12px"}} className="text-center ">sign in to your Account<h1 style={{color:"whitesmoke"}} className="btn border-0 "> Login</h1></p> */}
          </div>
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

export default Auth;
