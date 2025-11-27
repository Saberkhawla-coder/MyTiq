import React from "react";
import img6 from "../../assets/images/img6.jpg";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { ImCoinEuro } from "react-icons/im";
import { Link } from "react-router-dom";
import Footer from "../Footer";
const events = [
  {
    id: 1,
    title: "The Serenity Soirée",
    description:
      "A refined gathering designed to bring elegance and calm. Enjoy a sophisticated atmosphere crafted for unforgettable moments.",
    date: "15 juillet 2025 à 20:00",
    location: "Théâtre Municipal, Paris",
    people: 176,
    price: "45€",
    image: img6,
  },
  {
    id: 2,
    title: "The Serenity Soirée",
    description:
      "A refined gathering designed to bring elegance and calm. Enjoy a sophisticated atmosphere crafted for unforgettable moments.",
    date: "15 juillet 2025 à 20:00",
    location: "Théâtre Municipal, Paris",
    people: 176,
    price: "45€",
    image: img6,
  },
  {
    id: 3,
    title: "The Serenity Soirée",
    description:
      "A refined gathering designed to bring elegance and calm. Enjoy a sophisticated atmosphere crafted for unforgettable moments.",
    date: "15 juillet 2025 à 20:00",
    location: "Théâtre Municipal, Paris",
    people: 176,
    price: "45€",
    image: img6,
  },
];

function EventsCard() {
  return (
    <>
     <div className="flex flex-wrap justify-center">
      {events.map((event) => (
        <div
          key={event.id}
          className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden m-4 hover:shadow-2xl transition-shadow duration-300"
        >
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h1 className="text-xl font-bold text-gray-800">{event.title}</h1>
            <p className="text-gray-600 text-sm">{event.description}</p>
            <div className="flex flex-col gap-2 mt-2 text-gray-700 text-sm">
              <span className="flex items-center gap-2">
                <CiCalendar className="text-gray-500" /> {event.date}
              </span>
              <span className="flex items-center gap-2">
                <CiLocationOn className="text-gray-500" /> {event.location}
              </span>
              <span className="flex items-center gap-2">
                <IoIosPeople className="text-gray-500" /> {event.people} places disponibles
              </span>
              <span className="flex items-center gap-2 text-blue-500">
                <ImCoinEuro className="text-blue-500" /> {event.price}
              </span>
            </div>
            <Link
              to="/EventDetails"
              className="mt-3 inline-block text-center bg-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-red-700 transition-colors duration-300"
            >
              Voir détails
            </Link>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
   
  );
}

export default EventsCard;
