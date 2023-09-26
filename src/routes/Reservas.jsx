import { Col, Container, Row } from "react-bootstrap";
import { FormularioReserva } from "../components/FormularioReserva";
import { ListaReservas } from "../components/ListaReservas";


export const Reservas = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <FormularioReserva />
          </Col>
          <Col md={6} className="mb-4">
            <ListaReservas />
          </Col>
        </Row>
      </Container>
    </>
  )
}
