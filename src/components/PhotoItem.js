import React from "react";
import { Card } from "react-bootstrap";

const PhotoItem = ({ photo }) => {
  return (
    <Card>
      <Card.Img variant="top" src={photo.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PhotoItem;
