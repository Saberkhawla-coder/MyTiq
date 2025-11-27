import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventsSearch from "./components/Events/EventsSearch";
import EventDetails from "./components/Events/EventDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventsSearch />} />
         <Route path="/EventDetails" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
