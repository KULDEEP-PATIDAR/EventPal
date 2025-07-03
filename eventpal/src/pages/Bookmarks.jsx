import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useState, useEffect } from "react";
import './create.css';
import CreateEvent from "./CreateEvent";



const Bookmarks = () => {
  // const { bookmarked } = useContext(EventContext);
  // const events = JSON.parse(localStorage.getItem("events")) || eventsData;
  // const filtered = events.filter(e => bookmarked.includes(e.id));
   const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleRemove = (id) => {
    const updated = bookmarks.filter(event => event.id !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    // <div>
    //   <h2 className="text-2xl font-bold mb-4">Bookmarked Events</h2>
    //   {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    //     {filtered.map(event => <EventCard key={event.id} event={event} />)}
    //   </div> */}
      
    // </div>
    <div className="create-container">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Events</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <ul className="space-y-3">
          {bookmarks.map(event => (
            <li key={event.id} className="event-card">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{event.title}</h4>
                <button
                  onClick={() => handleRemove(event.id)}
                  className="delete-btn"
                >
                  Remove
                </button>
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

export default Bookmarks;
