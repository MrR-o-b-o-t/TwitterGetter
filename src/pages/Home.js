import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";

export default function Home() {
  return (
    <MDBContainer fluid className="g-0">
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

      <MDBRow className="mt-2">
        <MDBCol md="6">
          <h3>Welcome to Twitter Getter</h3>
          <p>This application was built with HTML, CSS, Javascript, NodeJS, React, and ExpressJs.</p>
          <p>This is a simple application that consumes JSON data from the Twitter API based on user provided search parameters. After a user provides search parameters and the data has been returned it will 
            be displayed in tweet format. The 'Search' page provides the 10 most recent Tweets while the 'Random' page will return 10 random Tweets from the past 2 years.
          </p>
        </MDBCol>
        <MDBCol md="6"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
