import Accordion from 'react-bootstrap/Accordion';
import { ListaCarta } from '../components/ListaCarta';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

export const Carta = () => {

    return (
        <Accordion defaultActiveKey="0">
            {ListaCarta.map(content =>
                <Accordion.Item eventKey={content.id}>
                    <Accordion.Header>{content.categoria}</Accordion.Header>
                    <Accordion.Body>
                        
                            <Container>
                                
                            {content.items.map(item => <Row><Col sm={8}>{item.nombre}</Col><Col sm={4}>{item.precio}</Col></Row>)}
                                
                            </Container>
                        
                        <Link to={content.categoria} >
                            <Button variant="primary">Ver detalle de Categoria</Button>
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>)}
        </Accordion>
    );
}
