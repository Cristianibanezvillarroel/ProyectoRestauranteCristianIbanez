import { useParams } from "react-router-dom"
import { ListaCarta } from "../components/ListaCarta"
import { Card, Container, Row } from "react-bootstrap";



export const CartaDetail = () => {

  const { categoria } = useParams();
  const categoriaFiltrada = ListaCarta.filter(Lista => {
    return Lista.categoria === categoria;
  });


  return (
    <>
      <Container>
        <Row className="justify-content-between">
          {categoriaFiltrada.map(content =>
            content.items.map(item =>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>
                    {item.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
        </Row>
      </Container>
    </>
  )
}
