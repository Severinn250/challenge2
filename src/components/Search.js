import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import AppContext from "../context/app/appContext";

const Search = () => {
  let appContext = useContext(AppContext);
  const [id, setId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("please fill the field");
    } else {
      appContext.searchPhotos(id);
      setId("");
    }
  };

  const onChange = (e) => setId(e.target.value);

  return (
    <>
      <Form onSubmit={onSubmit.bind(this)}>
        <Row xs={1} md={1} className="g-2 align-items-center my-4">
          <Col>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Album ID"
              type="number"
              className="my-2"
              value={id}
              onChange={onChange}
            />
          </Col>
          <Col className="my-2">
            <Button style={{ width: "100%" }} type="submit">
              Get Album Photos By Id
            </Button>
          </Col>
          {appContext.photos.length > 0 && (
            <Col>
              <Button
                style={{ width: "100%" }}
                variant="secondary"
                onClick={appContext.clearPhotos}
              >
                Clear
              </Button>
            </Col>
          )}
        </Row>
      </Form>
    </>
  );
};

export default Search;
