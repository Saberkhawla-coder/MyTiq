import React from "react";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-[#001233] text-white flex items-center justify-center p-6">
        
        <section className="bg-[#001233] max-w-4xl w-full rounded-2xl p-10 border border-white/10 shadow-xl">

          {/* HEADER */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-xl bg-[#A40000] flex items-center justify-center font-bold text-xl shadow-lg">
              MT
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-wide">À propos — MyTiq</h1>
              <p className="text-sm opacity-80">Gestion simple d’événements, tickets & participants.</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mb-4 leading-relaxed text-[15px]">
            <strong>MyTiq</strong> est une plateforme moderne conçue pour créer,
            gérer et organiser facilement des événements. Elle permet également de
            suivre les participants et de vendre des billets en toute simplicité.
          </p>

          <p className="mb-8 leading-relaxed text-[15px] opacity-90">
            L’interface applique une identité visuelle basée sur les couleurs{" "}
            <code className="text-[#A40000] font-semibold">#A40000</code> et{" "}
            <code className="text-blue-300 font-semibold">#001233</code>, offrant
            une expérience claire, moderne et professionnelle.
          </p>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                title: "Création d'événements",
                text: "Ajout du lieu, description, date, prix et billets.",
              },
              {
                title: "Participants",
                text: "Liste détaillée, filtrage, export CSV.",
              },
              {
                title: "Billetterie",
                text: "Génération QR Code, validation & paiements.",
              },
              {
                title: "Statistiques",
                text: "Suivi des ventes en temps réel.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition shadow-md"
              >
                <strong className="text-lg">{item.title}</strong>
                <p className="text-sm opacity-90 mt-1">{item.text}</p>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-[#A40000] px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
              onClick={() => (window.location.href = "/create-event")}
            >
              Créer un événement
            </button>

            <button
              className="border border-white/25 px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition shadow-lg"
              onClick={() => (window.location.href = "/events")}
            >
              Voir les événements
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
