import { useState } from "react";

import Statistic from "../components/dashboard/Statistic"; 
import DashboardEvent from "../components/dashboard/DashboardEvent";
import DashboardTickets from "../components/dashboard/DashboardTickets";


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("statistic");

  return (
    <div className="p-6 space-y-8">

      {/* --- NAVIGATION BUTTONS --- */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("statistic")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "statistic"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Tableau de bord
        </button>

        <button
          onClick={() => setActiveTab("events")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "events"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Événements
        </button>

        <button
          onClick={() => setActiveTab("tickets")}
          className={`px-4 py-2 rounded-xl ${
            activeTab === "tickets"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Billets
        </button>
      </div>

      {/* --- CONTENT AREA --- */}
      {activeTab === "statistic" && <Statistic />}
      {activeTab === "events" && <DashboardEvent />}
      {activeTab === "tickets" && <DashboardTickets />}

    </div>
  );
}
