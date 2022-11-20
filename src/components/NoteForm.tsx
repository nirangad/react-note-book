import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteFormProps, Tag } from "../types/Note.type";

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedtags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          {/* Title */}
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef}></Form.Control>
            </Form.Group>
          </Col>

          {/* Tags */}
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                options={selectedTags.map((tag: Tag) => {
                  return {
                    label: tag.label,
                    value: tag.id,
                  };
                })}
                onChange={(tags) => {
                  let sTags = tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  });
                  console.log("On change: ", sTags);
                  setSelectedtags(sTags);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={15}
                ref={markdownRef}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Link to="..">
                <Button type="button" variant="outline-secondary">
                  Cancel
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
}
