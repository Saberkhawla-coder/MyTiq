import React from "react";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
    <main className="min-h-screen bg-[#001233;] text-white flex items-center justify-center p-8">
      <section className="bg-[#001233] max-w-4xl w-full rounded-xl p-8 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-lg bg-[#A40000] flex items-center justify-center font-bold text-lg">
            MT
          </div>
          <div>
            <h1 className="text-3xl font-semibold">MyTiq — À propos</h1>
            <p className="text-sm opacity-90">
              Plateforme simple pour gérer événements, tickets et participants.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-base leading-relaxed">
          <strong>MyTiq</strong> est une plateforme moderne permettant de créer
          des événements, gérer les participants et vendre des billets facilement.
        </p>

        <p className="mb-6 text-base leading-relaxed">
          L'interface utilise une charte visuelle basée sur{" "}
          <code>#A40000</code> et <code>#001233</code>.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <strong>Création d'événements</strong>
            <p className="text-sm mt-1">Ajout du lieu, date, prix et billets.</p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <strong>Participants</strong>
            <p className="text-sm mt-1">Liste, filtres et export CSV.</p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <strong>Billetterie</strong>
            <p className="text-sm mt-1">QR code, validation et paiement.</p>
          </div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <strong>Statistiques</strong>
            <p className="text-sm mt-1">Ventes en temps réel.</p>
          </div>
        </div>

     
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-[#A40000] px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            onClick={() => (window.location.href = "/create-event")}
          >
            Créer un événement
          </button>
          <button
            className="border border-white/25 px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition"
            onClick={() => (window.location.href = "/events")}
          >
            Voir les événements
          </button>
        </div>

       
      </section> 
      
    </main>
    <Footer/>
    </>
    
  );
}
