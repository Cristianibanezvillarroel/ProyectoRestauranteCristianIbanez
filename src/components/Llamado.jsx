import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export const Llamado = () => {
    return (
        <>
            <div className='div-llamado'>
                <h2>Nuestro amor por lo saludable</h2>
            </div>
            <div>
                <p>Nos preocupamos de escoger los más nobles alimentos para la cocina de modo de colaborar con la salud y la sustentabilidad.</p>
            </div>
            <div>
                <p>Nos hemos ubicado cerca de la zona centrica con objeto de que puedas disponer de nuestra atencion semanalmente.</p>
            </div>
            <div>
                <ListGroup variant='flush'>
                    <ListGroupItem>+ 30 años de experiencia nos avalan</ListGroupItem>
                    <ListGroupItem>+ 5000 personas atendidas</ListGroupItem>
                    <ListGroupItem>+ 5 premios obtenidos esta ultima decada</ListGroupItem>
                </ListGroup>
            </div>
        </>
    )
}
