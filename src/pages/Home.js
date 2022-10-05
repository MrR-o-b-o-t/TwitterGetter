import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

export default function Home() {
  return (
    <MDBContainer fluid className="g-0 mb-5">
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "500px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Twitter Getter</h1>
            </div>
          </div>
        </div>
      </div>

      <MDBContainer fluid>
        <MDBRow className="mt-5">
          <MDBCol md="12" className="text-center">
            <h2>Welcome to Twitter Getter</h2>
            <h5 className="mt-3">
              This application was built with HTML, CSS, Javascript, NodeJS,
              React, and ExpressJs.
            </h5>
            <MDBRow className="mt-5 mb-4 text-center">
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="react-icon" fab icon="react" size="4x" />
              </MDBCol>
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="html-icon" fab icon="html5" size="4x" />
              </MDBCol>
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="css-icon" fab icon="css3" size="4x" />
              </MDBCol>
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="js-icon" fab icon="js-square" size="4x" />
              </MDBCol>
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="node-icon" fab icon="node-js" size="4x" />
              </MDBCol>
              <MDBCol md="2" sm="6" className="mt-3">
                <MDBIcon id="mdb-icon" fab icon="mdb" size="4x" />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4 d-flex justify-content-center text-center">
          <MDBCol lg="6">
            <h5 className="">
              This is a simple application that consumes JSON data from the
              Twitter API based on user provided search parameters. After a user
              provides search parameters and the data has been returned it will
              be displayed in tweet format. The 'Search' page provides the 10
              most recent Tweets while the 'Random' page will return 10 random
              Tweets from the past 2 years.
            </h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
