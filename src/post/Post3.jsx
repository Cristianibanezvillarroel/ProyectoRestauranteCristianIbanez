import React from 'react'
import { Card } from 'react-bootstrap'

export const Post3 = () => {
    return (
        
        <Card>
            <Card.Img
                variant="top"
                src=
                "./Naturaleza.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>CONECTATE CON LA NATURALEZA</Card.Title>
                <Card.Text>
                    Esta cientificamente demostrado que al realizar paseos a la naturaleza aumenta un conjunto de indicadores saludables en el organismo.
                </Card.Text>
                <a href="#" className="btn btn-primary">Leer mas</a>
            </Card.Body>
        </Card>
    )
}
