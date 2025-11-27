import React from 'react'
import EventsCard from './EventsCard'
import MytickEvent from '../MyTicketEvent'

function EventsSearch() {
   return (
    <div>
      <MytickEvent/>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  }}
>
  <input
    type="text"
    placeholder="Rechercher un événement..."
    style={{
      padding: "10px 15px",
      width: "500px",
      borderRadius: "25px",
      border: "1px solid #ccc",
      outline: "none",
      backgroundColor:"#FEFAFA",
      fontSize: "14px",
      transition: "all 0.3s",
    }}
   
  />

 
  <select
      style={{
        padding: "10px 15px",
        borderRadius: "25px",
        border: "1px solid #ccc",
        fontSize: "14px",
        outline: "none",
        color:"#001233",
        fontWeight:"bold",
        backgroundColor:"#FEFAFA",
        cursor: "pointer",
      }}
  >
    <option value="">Toutes catégories</option>
    <option value="1">Catégorie 1</option>
    <option value="2">Catégorie 2</option>
  </select>
</div>
<EventsCard/>
    </div>
  )
}

export default EventsSearch