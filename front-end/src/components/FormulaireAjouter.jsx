// FormulaireAjouterDark.js
import React from "react";

const FormulaireAjouterDark = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "#001233" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-6 sm:p-8 md:p-10 rounded-lg shadow-lg "
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
          Créer un nouvel événement
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mb-6">
          Remplissez les informations de l'événement
        </p>

        {/* Titre */}
        <label htmlFor="titre" className="block mb-1 font-semibold text-white">
          Titre <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="titre"
          placeholder="Titre"
          required
          className="w-full p-2 mb-4 border border-gray-400 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Description */}
        <label htmlFor="description" className="block mb-1 font-semibold text-white">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Description"
          className="w-full p-2 mb-4 border border-gray-400 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Date & Heure */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="date" className="block mb-1 font-semibold text-white">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              required
              className="w-full p-2 border border-gray-400 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="heure" className="block mb-1 font-semibold text-white">
              Heure
            </label>
            <input
              type="time"
              id="heure"
              className="w-full p-2 border border-gray-400 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

    
        <label htmlFor="lieu" className="block mb-1 font-semibold text-white">
          Lieu
        </label>
        <input
          type="text"
          id="lieu"
          placeholder="Lieu"
          className="w-full p-2 mb-4 border border-gray-400 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

      
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="capacite" className="block mb-1 font-semibold text-white">
              Capacité <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="capacite"
              required
              className="w-full p-2 border border-gray-400 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="prix" className="block mb-1 font-semibold text-white">
              Prix (£)
            </label>
            <input
              type="number"
              id="prix"
              className="w-full p-2 border border-gray-400 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Catégories */}
        <label htmlFor="categories" className="block mb-1 font-semibold text-white">
          Catégories <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="categories"
          placeholder="Catégories"
          required
          className="w-full p-2 mb-4 border border-gray-400 rounded bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Bouton Submit */}
        <button
          type="submit"
          className="w-full bg-white text-[#A40000] py-3 mt-4 rounded font-bold hover:bg-gray-200 transition text-lg"
        >
          Créer l'événement
        </button>
      </form>
    </div>
  );
};

export default FormulaireAjouterDark;
