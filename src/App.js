import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Search, Random } from "./pages";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
// import RootLayout from "./components/RootLayout";

export default function App() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <BrowserRouter>
      {/* <RootLayout> */}
      <MDBNavbar id="main-tg-nav" expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand href="#">Twitter Getter</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link to="Search">
                  <MDBNavbarLink>Search</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="Random">
                  <MDBNavbarLink>Random</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/random" element={<Random />}></Route>
      </Routes>
      {/* </RootLayout> */}
    </BrowserRouter>
  );
}
