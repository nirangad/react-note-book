import { FormEvent, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Stack,
  Tab,
  TabContainer,
} from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import useLocalStorage, {
  StorageKey,
  StorageKeys,
} from "../hooks/useLocalStorage";
import { NoteFormProps, Tag } from "../types/Note.type";

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedtags] = useState<Tag[]>([]);

  const [globalTags, setGlobalTags] = useLocalStorage<Tag[]>(
    StorageKeys.TAGS as StorageKey,
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    e.currentTarget.reset();
    setSelectedtags([]);
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
            <Form.Group controlId="tagList">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                value={selectedTags.map((tag: Tag) => {
                  return {
                    label: tag.label,
                    value: tag.id,
                  };
                })}
                options={globalTags.map((tag: Tag) => {
                  return {
                    label: tag.label,
                    value: tag.id,
                  };
                })}
                onChange={(tags: any) => {
                  let newTags: Tag[] = [];
                  let selTags: Tag[] = [];

                  tags.forEach(
                    (tag: {
                      label: string;
                      value: string | undefined;
                      __isNew__: boolean;
                    }) => {
                      let newTag: Tag = { label: tag.label, id: tag.value };
                      if (tag.__isNew__) {
                        let duplicate =
                          globalTags.filter((t) => tag.label == t.label)
                            .length > 0;

                        if (!duplicate) {
                          newTag.id = uuidv4();
                          newTags.push(newTag);
                        }
                      }
                      selTags.push(newTag);
                    }
                  );

                  if (newTags.length > 0) {
                    setGlobalTags((prevTags) => {
                      return [...prevTags, ...newTags];
                    });
                  }

                  setSelectedtags(selTags);
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
