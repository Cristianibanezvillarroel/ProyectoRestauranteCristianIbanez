import { Col, Container, Row } from "react-bootstrap"
import { Resena } from "../components/Resena"
import { Llamado } from "../components/Llamado"
import { Contactanos } from "../components/Contactanos"
import { Formulario } from "../components/Formulario"

export const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col md={6} className="mb-4">
          <Resena />
        </Col>
        <Col md={6} className="mb-4">
          <Llamado />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Contactanos />
        </Col>
        <Col md={6} className="mb-4">
          <Formulario />
        </Col>
      </Row>
    </Container>
    </>
  )
}
