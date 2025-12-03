import React from "react";

function Ticket() {
  return (
    <div className="flex w-full justify-center items-center font-serif bg-[#001233]">

      {/* Ticket Content Section */}
      <div className="relative bg-[#A40000] w-[400px] h-[140px] flex flex-col justify-between text-center text-[#C9BCBC] px-5 py-3 border-r-2 border-dashed border-[#001233] overflow-hidden">

        {/* Circles */}
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -top-2 -right-2"></div>
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -top-2 -left-0.5"></div>
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -bottom-2 -right-2"></div>
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -top-2 -right-[120px]"></div>
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -bottom-2 -right-[120px]"></div>
        <div className="absolute w-5 h-5 bg-[#001233] rounded-full -bottom-2 -left-0.5"></div>

        {/* Title */}
        <h2 className="text-white font-bold uppercase text-[0.9em] font-[Poiret One]">
          YOUR TICKET IS WAITING FOR YOU!
        </h2>

        {/* Text */}
        <p className="text-[#C9BCBC] italic text-[0.9em] leading-snug overflow-hidden">
          “MyTiq vous permet de trouver et réserver vos billets pour les événements 
          les plus excitants : concerts, festivals, conférences et bien plus encore !”
        </p>

        {/* Button aligned to right */}
        <div className="flex justify-end">
          <button
            className="mt-1 border border-[#003366] text-[#003366] px-3 py-1 rounded-md text-[0.8em] hover:bg-[#A40000] hover:text-white transition"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Stars Section */}
      <div className="bg-[#A40000] w-[17%] h-[140px] flex flex-col justify-center items-center">
        <div className="text-white text-[19px]">★</div>
        <div className="text-white text-[19px]">★</div>
        <div className="text-white text-[19px]">★</div>
        <div className="text-white text-[19px]">★</div>
        <div className="text-white text-[19px]">★</div>
      </div>
    </div>
  );
}

export default Ticket;