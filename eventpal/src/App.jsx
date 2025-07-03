import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import Discover from "./components/Discover";
import CreateEvent from "./pages/CreateEvent";
import Bookmarks from "./pages/Bookmarks";
import EventCard from "./components/EventCard.jsx";

const router = createBrowserRouter(
[
{path:"/",
  element:
     <div>
      <Navbar/>
       <Home/> 
      <Footer/>       
     </div>
 
},
{path:"/create",
  element: 
   <div>
      <Navbar/>
      <EventCard/>
     </div>
},
{path:"/discover",
  element:
   <div>
      <Navbar/>
      <Discover />
     </div>
},
{path:"/bookmarks",
  element:
   <div>
      <Navbar/>
      <Bookmarks />
     </div>
}

]

);


function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />

    //    {/* <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/discover" element={<Discover />} />
    //     <Route path="/create" element={<CreateEvent />} />
    //     <Route path="/bookmarks" element={<Bookmarks />} />
    //     {/* <Route path="/calendar" element={<CalendarView />} /> */}
    //   </Routes>
    //   <Footer />  */}
    // </BrowserRouter>
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
