import React from 'react'
import img6 from '../../assets/images/img6.jpg'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { TbTicket } from "react-icons/tb";
import { GrLinkPrevious } from "react-icons/gr";

function EventDetails() {
  return (
    <>
      <div className="min-h-screen bg-[#001233] text-white px-6 py-10">

    
       

        <div className="flex justify-center items-start flex-col md:flex-row gap-10 md:h-[380px]">
           <Link
          to="/events"
          className="inline-block border border-white/60 px-4 py-2 rounded-lg mb-8 
                     transition hover:bg-white/20 hover:border-white"
        >
          <GrLinkPrevious />
        </Link>
 
  <div className="w-full md:w-[380px] h-full">
    <img
      src={img6}
      alt="event"
      className="w-full h-full object-cover rounded-2xl shadow-lg shadow-white/10 
                 hover:scale-[1.02] transition"
    />
  </div>


  <div className="max-w-lg h-full flex flex-col justify-between space-y-4">
    <h1 className="text-4xl font-extrabold tracking-wide">
      The Serenity Soirée
    </h1>

    <p className="italic opacity-80 leading-relaxed">
      “A refined gathering designed to bring elegance and calm.
      Enjoy a sophisticated atmosphere crafted for unforgettable moments.”
    </p>

    <div className="space-y-4 text-[16px]">
      <div>
        <span className="font-semibold text-white/90">Date et heure</span><br />
        <span className="text-white/80">15 juillet 2025 à 20:00</span>
      </div>
      <div>
        <span className="font-semibold text-white/90">Lieu</span><br />
        <span className="text-white/80">Théâtre Municipal, Paris</span>
      </div>
      <div>
        <span className="font-semibold text-white/90">Places disponibles</span><br />
        <span className="text-white/80">176 places disponibles</span>
      </div>
      <div>
        <span className="font-semibold text-white/90">Prix par billet</span><br />
        <span className="text-white/80">45€</span>
      </div>
    </div>

  </div>
</div>


        {/* RESERVATION CARD */}
        <div className="bg-white text-black rounded-2xl p-8 mt-14 shadow-2xl max-w-4xl mx-auto">

          <h2 className="flex items-center text-xl font-semibold mb-6 gap-2">
            <TbTicket className="text-3xl" /> Réserver vos billets
          </h2>

          <label className="font-medium">Nombre de billets</label>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 mt-2 mb-6
                       focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex justify-between items-center text-lg bg-gray-100 p-3 rounded-lg mb-6">
            <span>Total</span>
            <span className="font-bold">45€</span>
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-xl text-[17px] font-medium
                       transition hover:bg-white hover:text-black border border-black"
          >
            Acheter maintenant
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Vous devez être connecté pour acheter des billets
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default EventDetails
