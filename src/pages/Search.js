import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Search() {
  return (
    <MDBContainer fluid className="pt-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol sm="6">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>User ID returned from Twitter API</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build out the text retrieved from the
                Twitter API.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
