import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import CreateEvent from "../pages/CreateEvent";
import CalendarView from "../pages/CalendarView";
import Bookmarks from "../pages/Bookmarks";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/discover" element={<Discover />} />
    <Route path="/create" element={<CreateEvent />} />
    <Route path="/calendar" element={<CalendarView />} />
    <Route path="/bookmarks" element={<Bookmarks />} />
  </Routes>
);

export default AppRoutes;
