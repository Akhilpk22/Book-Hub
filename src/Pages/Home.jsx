import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import BookView from "../components/BookView";
import FreeBooks from "../components/FreeBooks";



function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh", // Changed to minHeight for better responsiveness
        }}
        className="container-fluid"
      >
        <Container>
          <Row>
            <Col xs={12} md={6}>
              {/* Left Side */}
              <div className="p-3">
                <div
                  style={{ border: "1px solid #ccc", padding: "20px" }}
                  className="text-center"
                >
                  <h2 style={{ fontSize: "2.5rem" }}>Buy and sell your Book</h2>
                  <h2 style={{ fontSize: "2rem", color: "blue" }}>
                    for the best price
                  </h2>

                  <p>
                    Immerse yourself in our vast collection of books spanning
                    various genres and categories. From classic literature to
                    contemporary bestsellers, we have something for everyone.
                    Our curated recommendations and personalized reading lists
                    will guide you towards your next literary adventure...
                  </p>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Books"
                      aria-label="Search Books"
                      aria-describedby="basic-addon2"
                    />
                    <i
                      className="fa fa-search"
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        fontSize: "20px",
                        color: "#666",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} l={3}>
              {/* Right Side */}
              <div  className="text-center mt-5">
                <img
                className="mt-5 img-fluid"
                  style={{ width:"800px", height: "300px" }}
                  src="https://cdn.dribbble.com/users/1936570/screenshots/15671618/media/8b5f68528a7089ad95e2cb9a98f3977f.gif"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <BookView/>
      <FreeBooks/>
      
    </>
  );
}

export default Home;
