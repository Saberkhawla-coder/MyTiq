import React from "react";
import Logo from "./Logo";

function MytickEvent() {
  return (
    <div className="mytiq-ticket-banner">
        <Logo/>

     <div class="ticket-section content-section">
        <h2 class="content-title">YOUR TICKET IS WAITING FOR YOU!</h2>
        <p class="content-quote">
            “Discover the events shaping your city <br />
            and reserve your place in the story.”
        </p>

        <div class="Cercle cercle1"></div>
        <div class="Cercle cercle2"></div>
        <div class="Cercle cercle3"></div>
        <div class="Cercle cercle4"></div>
        <div class="Cercle cercle5"></div>
        <div class="Cercle cercle6"></div>
        </div>


      
      <div className="ticket-section stars-section">
        <div className="star text-white" >★</div>
        <div className="star  text-white">★</div>
        <div className="star  text-white">★</div>
        <div className="star  text-white">★</div>
        <div className="star  text-white">★</div>
      </div>
    </div>
  );
}



export default MytickEvent;
