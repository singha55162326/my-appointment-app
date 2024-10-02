"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../utils/api";
import moment from "moment-timezone"; // Import Moment.js for date formatting

const AppointmentPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DDTHH:mm")); // Default to current date and time in ISO format
  const [description, setDescription] = useState("");
  const [status] = useState("Pending"); // Set status to "Pending" by default
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post("/appointments", { title, date, description, status });
      alert("Appointment created successfully! Status: " + status); // Alert for successful creation
      router.push("/calendar"); // Redirect to appointment list page
    } catch (error) {
      alert("Failed to create appointment");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Appointment</h1>
      <form onSubmit={handleCreate} className="bg-white p-6 rounded shadow-lg">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="datetime-local" // Change to datetime-local to allow selecting both date and time
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AppointmentPage;
