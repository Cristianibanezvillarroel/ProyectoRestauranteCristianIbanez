import React from 'react'
import { Card } from 'react-bootstrap'

export const Post4 = () => {
    return (
        
        <Card>
            <Card.Img
                variant="top"
                src=
                "./Descanso.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>DESCANSAR Y DORMIR BIEN</Card.Title>
                <Card.Text>
                    La vida no es solo correr. Debes tomarte el descanso con la misma seriedad con la que te tomas el trabajo.
                </Card.Text>
                <a href="#" className="btn btn-primary">Leer mas</a>
            </Card.Body>
        </Card>
    )
}
