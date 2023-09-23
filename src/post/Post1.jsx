import React from 'react'
import { Card } from 'react-bootstrap'

export const Post1 = () => {
  return (
    
    <Card>
            <Card.Img
                variant="top"
                src=
                "/src/assets/Frutas.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>COMER SANO Y SALUDABLE</Card.Title>
                <Card.Text>
                    Existen muchos beneficios para el organismo cuando tu alimentacion es sana y saludable.
                </Card.Text>
                <a href="#" className="btn btn-primary">Leer mas</a>
            </Card.Body>
        </Card>
  )
}
