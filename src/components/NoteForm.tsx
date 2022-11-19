import React from "react";
import { Col, Form, FormGroup, Row, Stack } from "react-bootstrap";

export default function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          {/* Title */}
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required></Form.Control>
            </Form.Group>
          </Col>

          {/* Tags */}
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control required></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
}
