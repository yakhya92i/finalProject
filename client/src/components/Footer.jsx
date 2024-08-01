import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-8" style={{ backgroundImage: 'url(path/to/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
                    <p className="mb-2">Téléphone : +221 77 123 45 67</p>
                    <p className="mb-2">Email : contact@fueltrack.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="h-8 w-8" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-8 w-8" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="h-8 w-8" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Adresse mail"
                            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded"
                        />
                        <textarea
                            placeholder="Message"
                            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                {/* Location and Copyright */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Localisation</h3>
                        <p>Point E rue 5,</p>
                        <p>Dakar, Sénégal</p>
                    </div>
                    <div className="mt-8 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} FuelTrack. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;