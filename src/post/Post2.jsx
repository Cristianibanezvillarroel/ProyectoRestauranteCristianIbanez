import React from 'react'
import { Card } from 'react-bootstrap'

export const Post2 = () => {
    return (
        
        <Card>
            <Card.Img
                variant="top"
                src=
                "/src/assets/Deporte.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>HACER DEPORTE SEMANALMENTE</Card.Title>
                <Card.Text>
                    Sabías que al hacer ejercicio de manera recurrente, al menos 3 veces por semana, eleva de manera sustantiva tu salud.
                </Card.Text>
                <a href="#" className="btn btn-primary">Leer mas</a>
            </Card.Body>
        </Card>
    )
}
