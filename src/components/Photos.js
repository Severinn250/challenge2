import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import PhotoItem from "./PhotoItem";
import Spinner from "react-spinkit";
import AppContext from "../context/app/appContext";

const PhotosContainer = () => {
  let appContext = useContext(AppContext);

  const { loading, photos } = appContext;

  if (loading) {
    return (
      <center>
        <Spinner name="wordpress" fadeIn="none" />
      </center>
    );
  } else {
    return (
      <Row xs={1} md={4} className="g-2">
        {photos.map((photo) => (
          <Col key={photo.id}>
            <PhotoItem photo={photo} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default PhotosContainer;
