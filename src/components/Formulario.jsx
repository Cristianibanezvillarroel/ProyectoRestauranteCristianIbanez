import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

export const Formulario = () => {
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
            <Button variant="primary" type="submit">Enviar</Button>
        </>
    )
}
