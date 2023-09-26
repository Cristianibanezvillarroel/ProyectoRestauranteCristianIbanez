import React, { useState } from 'react';
import { useEffect } from "react";
import { db } from '../components/firebase';
import { collection, getDocs } from "firebase/firestore";




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

        <div>
            <h1>Las reservas de La mia Papo</h1>
            <ol>

                {reservas.map(reserva => <li key={reserva.id}>{reserva.nombre} {reserva.email} {reserva.mesa} {reserva.telefono}</li>
                )
                }

            </ol>
        </div>

    )
}
