import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventsSearch from "./components/Events/EventsSearch";
import EventDetails from "./components/Events/EventDetails";
import UsersList from "./UsersList";
import About from "./About";
import FormulaireAjouter from "./components/FormulaireAjouter";
function App() {


  return (
    <div>
      <Navbar />
      {/* <UsersList/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsSearch />} />
         <Route path="/EventDetails" element={<EventDetails />} />
         <Route path="/about" element={<About/>}/>
         <Route path="/create-event" element={<FormulaireAjouter />} />
      </Routes>
    </div>
  );  
}

export default App;
