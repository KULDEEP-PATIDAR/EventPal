import { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState([]);
  const [attending, setAttending] = useState([]);

  useEffect(() => {
    const b = JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
    const a = JSON.parse(localStorage.getItem("attendingEvents")) || [];
    setBookmarked(b);
    setAttending(a);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarked));
    localStorage.setItem("attendingEvents", JSON.stringify(attending));
  }, [bookmarked, attending]);

  return (
    <EventContext.Provider value={{ bookmarked, attending, setBookmarked, setAttending }}>
      {children}
    </EventContext.Provider>
  );
};
