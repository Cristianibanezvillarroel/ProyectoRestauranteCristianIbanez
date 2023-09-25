import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {Container, Button , Alert} from 'react-bootstrap';

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
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="d-grid gap-2">
        <Button onClick={() => setShow(true)} variant="primary" size="lg">
          {selectedDate ? 'Enviar Reserva' : 'Debe seleccionar un dia para enviar Reserva'}
        </Button>
      </div>
    </div>
  )
}
