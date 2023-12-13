import React, { useState } from "react";
import UploadBook from "./UploadBook";
import BookView from "./BookView";
import './SellingBook.css'
import OnlyUserBook from "./OnlyUserBook";

function SellingBox() {
  const [activeComponent, setActiveComponent] = useState("manageBook");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div  style={{ display: "flex" }}>
        {/* Sidebar - 30% */}
        <div 
        className=""
          style={{
            width: "340px",
            height: "auto",
            backgroundColor: "black",
            color: "white",
            padding: "20px",
          }}
        >
          {/* Sidebar content goes here */}
          <div className="d-flex justify-content-center align-content-center">
            <h4 className="m-1 text-center">Welcome the Book City</h4>
          </div>
          <div className="d-flex mt-5">
            <p className="fw-bolder ">
              <i className="fa-solid fa-gauge fa-xl"></i>
            </p>
            <h4
              style={{ cursor: "pointer" }}
              className="ms-3 sellingboxhover"
              
            >
              Dashbord
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-solid fa-user"></i>
            </p>
            <h4
              onClick={(e) => handleComponentChange("user")}
              style={{ cursor: "pointer" }}
              className="ms-4 sellingboxhover "
            >
              User
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-solid fa-upload"></i>
            </p>
            <h4
              onClick={(e) => handleComponentChange("upload")}
              style={{ cursor: "pointer" }}
              className="ms-4 sellingboxhover "
            >
              Upload book
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-solid fa-people-roof"></i>
            </p>
            <h4
              onClick={(e) => handleComponentChange("manageBook")}
              style={{ cursor: "pointer" }}
              className="ms-3 sellingboxhover "
            >
              Manage Book
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-solid fa-book"></i>
            </p>
            <h4 style={{ cursor: "pointer" }} className="ms-4 sellingboxhover ">
              Book
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-solid fa-file-import"></i>
            </p>
            <h4 style={{ cursor: "pointer" }} className="ms-4 sellingboxhover ">
              Documentions
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
              <i className="fa-brands fa-hire-a-helper"></i>
            </p>
            <h4 style={{ cursor: "pointer" }} className="ms-4 sellingboxhover">
              Help
            </h4>
          </div>
          <div className="d-flex mt-3">
            <p className="fw-bolder ">
            <i class="fa-regular fa-right-from-bracket"></i>
            </p>
            <h4 style={{ cursor: "pointer" }} className="ms-4 sellingboxhover">
              Log Out
            </h4>
          </div>
        </div>

        {/* Main Content - 70% */}
        <div style={{ flex: "1", padding: "60px" }}>
          {activeComponent === "upload" && <UploadBook />}
          {activeComponent === "user" && <OnlyUserBook  />}
          {activeComponent === "manageBook" && <BookView />}
        </div>
      </div>
    </>
  );
}

export default SellingBox;
