import { useState, useEffect } from "react";
import '../pages/create.css'; // reuse styles
import CreateEvent from "../pages/CreateEvent";

const Discover = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [month, setMonth] = useState("");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
    setFilteredEvents(storedEvents); // show all by default
  }, []);

  const handleSearch = () => {
    if (month === "") {
      setFilteredEvents(events);
      return;
    }

    const filtered = events.filter(event => {
      const eventMonth = new Date(event.date).getMonth() + 1; // JS months: 0–11
      return eventMonth === parseInt(month);
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="create-container">
      <h2 className="text-2xl font-bold mb-4">Discover Events</h2>

      <div className="flex gap-2 mb-4 items-center">
        <select value={month} onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded">
          <option value="">All Months</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>

      {filteredEvents.length === 0 ? (
        <p>No events found for selected month.</p>
      ) : (
        <ul className="space-y-3">
          {filteredEvents.map(event => (
            <li key={event.id} className="event-card">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{event.title}</h4>
              </div>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location} ({event.type})</p>
              <p><strong>Category:</strong> {event.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Discover;
