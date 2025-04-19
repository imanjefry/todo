import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './TodoReminds.css';
import Navbar from '../navbar/Navbar';

function TodoReminds() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt('عنوان رویداد را وارد کنید:');
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <div className="reminds-container">
      <Navbar tasks={[]} onAddTask={() => {}} onSearch={() => {}} />
      <h1>یادآوری وظایف</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        locale="fa" // Set the calendar to Persian locale
      />
    </div>
  );
}

export default TodoReminds;