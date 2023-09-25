import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Button, Alert } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const Reservas = () => {
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [selectedDate, setSelectedDate] = useState();

  const [calendarText, setCalendarText] = useState(`No ha seleccionado ningun dia`);

  const [show, setShow] = useState(false);


  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`El dia seleccionado es ${value.toDateString()}`);
  };

  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Año Seleccionado`);
  };

  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Mes seleccionado`);
  };

   const [horario, setHorario] = useState('');
  const handleHorario = (e) => {
    setHorario(e)
  };

  const [mesa, setMesa] = useState('');
  const handleMesa = (e) => {
    setMesa(e)
  };

  if (show) {
    return (
      <div className="App">
        <Container className='p-4'>
          <Alert variant="success" onClose={() => setShow(false)} dismissible >
            <Alert.Heading>Su reserva ha sido enviada con éxito</Alert.Heading>
            <p>
              Cierre esta ventana para volver al menu</p>
          </Alert>
        </Container>
      </div>
    );
  }

 
  return (
    <div className="calendar-css">
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title={mesa ? mesa : "seleccione su mesa"}
        className="mt-2"
        data-bs-theme="dark"
        onSelect={handleMesa}
      >
        <Dropdown.Item eventKey="Mesa1">Mesa 1</Dropdown.Item>
        <Dropdown.Item eventKey="Mesa2">Mesa 2</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title={horario ? horario : "seleccione su horario"}
        className="mt-2"
        data-bs-theme="dark"
        onSelect={handleHorario}
      >
        <Dropdown.Item eventKey="am">horario am</Dropdown.Item>
        <Dropdown.Item eventKey="pm">horario pm</Dropdown.Item>
      </DropdownButton>
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="d-grid gap-2">
        <Button onClick={() => setShow(true)} variant="primary" size="lg">
          {selectedDate ? mesa ? horario ? 'Enviar Reserva':'Debe seleccionar un horario para enviar Reserva' :'Debe seleccionar una mesa para enviar Reserva' :'Debe seleccionar un dia para enviar Reserva'}
        </Button>
      </div>
    </div>
  )
}
