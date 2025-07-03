import { useState, useEffect } from "react";
import './create.css';
import { FaRegStar, FaStar } from "react-icons/fa"; // ⭐ Icons


const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "", date: "", description: "", location: "", type: "Online", category: "Workshop"
  });

  const [events, setEvents] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);


  useEffect(() => {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      setEvents(storedEvents);

      const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarkedIds(storedBookmarks.map(event => event.id));
    }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = { id: Date.now(), ...formData };
    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents); // ✅ updates local state
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // ✅ persists data

    alert("Event created!");

    // ✅ reset form
    setFormData({
      title: "",
      date: "",
      description: "",
      location: "",
      type: "Online",
      category: "Workshop",
    });
  };

  const handleDelete = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleBookmark = (event) => {

    

    

    const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    // Avoid duplicate bookmarks
    const isAlreadyBookmarked = existingBookmarks.some(e => e.id === event.id);
    if (isAlreadyBookmarked) {
      alert("Already bookmarked!");
      return;
    }

    const updatedBookmarks = [...existingBookmarks, event];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    alert("Event bookmarked!");
  };




  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Create New Event</h2>
        {["title", "date", "description", "location"].map(field => (
          <input key={field} required className="w-full p-2 border rounded" placeholder={field}
            value={formData[field]} onChange={e => setFormData({ ...formData, [field]: e.target.value })}
          />
        ))}
        <select onChange={e => setFormData({ ...formData, type: e.target.value })} className="w-full p-2 border rounded">
          <option>Online</option>
          <option>Offline</option>
        </select>
        <select onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full p-2 border rounded">
          <option>Workshop</option>
          <option>Webinar</option>
          <option>Meetup</option>
          <option>Cultural Event</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
      <div className="event-list">
        <h3 >Your Events</h3>
        {events.length === 0 ? (
          <p>No events created yet.</p>
        ) : (
          <ul className="space-y-3">
            {events.map((event) => (
              <li key={event.id} className="event-card">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">{event.title}</h4>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button onClick={() => handleBookmark(event)} className="icon-btn" title="Bookmark">
                    {bookmarkedIds.includes(event.id) ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-gray-500 hover:text-yellow-400" />
                    )}
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


    </div>



  );
};

export default CreateEvent;
