import React, { useState } from 'react';
import { useEffect } from "react";
import { db } from '../components/firebase';
import { collection, getDocs } from "firebase/firestore";
import { Badge, ListGroup } from 'react-bootstrap';

export const ListaReservas = () => {

    const [reservas, setReservas] = useState([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, 'reservas'))
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            setReservas(reservas => [...reservas, doc.data()])
        });
    }

    useEffect(() => {
        fetchPost()
    }, []);

    return (
        <>
            <div>
                <h1>Las reservas de La mia Papo</h1>
                <ListGroup as="ol" numbered>
                    {reservas.map(reserva =>
                        <ListGroup.Item key={reserva.id} as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{reserva.nombre}</div>
                                {reserva.fecha}
                            </div>
                            <Badge bg="primary" pill>
                            {reserva.mesa}
                            </Badge>
                        </ListGroup.Item>
                    )
                    }
                </ListGroup>
            </div>
        </>
    )
}
