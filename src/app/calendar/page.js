"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Import the React wrapper
import dayGridPlugin from "@fullcalendar/daygrid"; // Day view
import timeGridPlugin from "@fullcalendar/timegrid"; // Time grid view
import momentPlugin from "@fullcalendar/moment"; // Import Moment.js plugin
import moment from "moment-timezone"; // Import Moment.js with timezone support
import api from "../utils/api";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const { data } = await api.get("/appointments");
        const eventsData = data.map((appt) => ({
          title: appt.title,
          start: moment.tz(appt.date, "Asia/Bangkok").format(), // Format date with timezone for correct display
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    }
    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">ຕາຕະລາງການນັດພົບ</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]} // Include Moment.js plugin
        initialView="dayGridMonth" // Show monthly view
        events={events} // Use events from API
        slotMinTime="08:00:00" // Customize starting time
        slotMaxTime="18:00:00" // Customize ending time
      />
    </div>
  );
};

export default CalendarPage;
