import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-gray-800 text-white w-full">
      <div className="container mx-auto flex justify-between items-center w-full ">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/public/logo.png" alt="Logo" className="h-10 ml-4 mr-4" /> */}
          <span className="text-xl font-bold">FuelTrack</span>
        </div>

        {/* Navbar */}
        <nav className="flex space-x-6">
          <a href="#accueil" className="hover:text-gray-300">
            Accueil
          </a>
          <a href="#certification" className="hover:text-gray-300">
            Projets
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Certifications
          </a>
          <a href="#projets" className="hover:text-gray-300">
            Chiffres clés
          </a>
          <a href="#chiffres-cles" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Connexion Icon */}
        <div className="flex items-center">

          <Link to="/login" >
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A8.007 8.007 0 0112 20c1.877 0 3.63-.65 5.121-1.804M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
