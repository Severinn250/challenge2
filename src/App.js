import React from "react";
import { Container } from "react-bootstrap";
import Photos from "./components/Photos";
import Search from "./components/Search";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Container style={{ marginTop: "60px" }}>
        <Search />
        <Photos />
        <Footer />
      </Container>
    </>
  );
};

export default App;
