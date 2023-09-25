import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import {Container, Alert} from 'react-bootstrap';

export const Formulario = () => {

    const [show, setShow] = useState(false);
    if (show) {
        return (
            <div className="App">
                <Container className='p-4'>
                    <Alert variant="success" onClose={() => setShow(false)} dismissible >
                        <Alert.Heading>Sus datos han sido enviados con éxito</Alert.Heading>
                        <p>
                            Cierre esta ventana para volver al menu</p>
                    </Alert>
                </Container>
            </div>
        );
    }
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Tu correo electronico"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Tu nombre"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Cristian Ibanez" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Tu Telefono"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="+56990200879" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
                <Form.Control
                    as="textarea"
                    placeholder="Deja tu comentario aqui"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button onClick={() => setShow(true)} variant="primary" >Enviar</Button>
        </>
    )
}
