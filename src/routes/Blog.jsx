import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Post1 } from "../post/Post1";
import { Post2 } from "../post/Post2";
import { Post3 } from "../post/Post3";
import { Post4 } from "../post/Post4";

export const Blog = () => {
  return (
    <Container>
            <Row className="justify-content-between">
                <Col md={8} className="mb-4 mt-4">
                    <Post1 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post2 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post3 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post4 />
                </Col>
            </Row>
        </Container>
  )
}
