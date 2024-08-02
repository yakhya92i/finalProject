// import React from 'react';

// // Fictitious URLs for certification logos
// const certificationLogos = [
//     { name: 'ISO 9001', url: 'https://example.com/logo1.png' },
//     { name: 'ISO 14001', url: 'https://example.com/logo2.png' },
//     { name: 'ISO 45001', url: 'https://example.com/logo3.png' },
// ];

// const certifications = certificationLogos.map(cert => (
//     <div key={cert.name} className="flex items-center space-x-2">
//         <img src={cert.url} alt={`${cert.name} logo`} className="w-12 h-12" />
//         <span>{cert.name}</span>
//     </div>
// ));

// const chiffresCles = [
//     { label: 'Volume de stockage', value: '300 km³', detail: 'sur 4 sites' },
//     { label: 'Capacités nationales', value: '70%' },
//     { label: 'Volume annuel', value: '3,000 km³' },
//     { label: 'Camions sortis par an', value: '80,000' },
//     { label: 'Part de marché nationale', value: '75%' },
//     { label: 'Part de marché export', value: '60%' },
// ];

// const grandsProjets = [
//     'Construction d’un nouveau pipeline à Mbao',
//     'Extension des capacités de stockage et de chargement à Mbao',
//     'Mise en place de nouvelles pompes booster pour des débits améliorés',
//     'Étude pour la remise en service du pipe Fioul entre DOT et le Port',
//     'Standardisation internationale des outils de stockage',
//     'Centralisation du contrôle des cargaisons pour le Safe to Load',
//     'Mise en place d’un système de prise de rendez-vous pour le soutage via une plateforme web',
//     'Étude pour un approvisionnement sécurisé en Jet à partir de Mbao',
//     'Étude de nouveaux dépôts à Fatick et Ziguinchor',
// ];

// const ChiffresCles = () => (
//     <div className="space-y-4">
//         {chiffresCles.map(chiffre => (
//             <div key={chiffre.label} className="flex flex-col items-center">
//                 <span className="text-3xl font-bold">{chiffre.value}</span>
//                 <span>{chiffre.label}</span>
//                 {chiffre.detail && <span className="text-sm text-gray-500">{chiffre.detail}</span>}
//             </div>
//         ))}
//     </div>
// );

// const GrandsProjets = () => (
//     <ul className="list-disc pl-5 space-y-2">
//         {grandsProjets.map(projet => (
//             <li key={projet}>{projet}</li>
//         ))}
//     </ul>
// );

// const FuelTrack = () => (
//     <div className="p-8 space-y-8">
//         <div>
//             <h2 className="text-2xl font-bold">Certifications</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//                 {certifications}
//             </div>
//         </div>
//         <div>
//             <h2 className="text-2xl font-bold">Quelques chiffres clés</h2>
//             <ChiffresCles />
//         </div>
//         <div>
//             <h2 className="text-2xl font-bold">Grands projets</h2>
//             <GrandsProjets />
//         </div>
//     </div>
// );

// const Body = () => (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <FuelTrack />
//     </div>
// );

// export default Body;

import React from 'react';

const Body = () => {
    return (
        <div className="bg-blue-900 text-white font-sans">
            <section className="text-center py-10">
                <h1 className="text-4xl font-bold">FuelTrack</h1>
                <h2 className="text-3xl font-bold">Gestion de Stock de Produits Pétroliers & Gaziers</h2>
                <p className="mt-4">Nous faisons décoller votre entreprise avec une offre en trois services.</p>
                <button className="mt-6 bg-yellow-500 text-blue-900 py-2 px-4 rounded-full">Je réserve un appel</button>
            </section>

            <section className="bg-blue-800 py-10">
                <h2 className="text-center text-2xl font-bold">L'offre FuelTrack:</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Gestion de Stock</h3>
                        <p className="mt-2">Optimisez la gestion de votre stock pour éviter les ruptures et les surplus.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Analyse de Performance</h3>
                        <p className="mt-2">Des rapports détaillés pour une meilleure prise de décision.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Suivi en Temps Réel</h3>
                        <p className="mt-2">Gardez un œil sur vos stocks en temps réel avec nos outils avancés.</p>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Nos derniers articles de Blog</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-800 p-4 mx-2 rounded-lg">
                        <img src="image1.jpg" alt="Article 1" className="rounded-lg" />
                        <p className="mt-2">17 concepts pour une gestion optimale</p>
                    </div>
                    <div className="bg-blue-800 p-4 mx-2 rounded-lg">
                        <img src="image2.jpg" alt="Article 2" className="rounded-lg" />
                        <p className="mt-2">Outil d'analyse de performance</p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-full">Les articles</button>
                </div>
            </section>

            <section className="bg-blue-800 py-10">
                <h2 className="text-center text-2xl font-bold">Le process FuelTrack:</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Premier contact</h3>
                        <p className="mt-2">Réservez un appel pour discuter de votre situation actuelle et de vos besoins.</p>
                        <button className="mt-4 bg-yellow-500 text-blue-900 py-2 px-4 rounded-full">Réserver un appel</button>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Connexion à vos comptes</h3>
                        <p className="mt-2">Nous nous connectons à vos comptes pour analyser vos données et proposer des solutions.</p>
                        <button className="mt-4 bg-yellow-500 text-blue-900 py-2 px-4 rounded-full">Contact</button>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Nous contacter</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-800 p-6 mx-4 rounded-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="firstName">Prénom</label>
                                <input className="w-full px-3 py-2 text-black rounded-lg" id="firstName" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="lastName">Nom</label>
                                <input className="w-full px-3 py-2 text-black rounded-lg" id="lastName" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input className="w-full px-3 py-2 text-black rounded-lg" id="email" type="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="company">Entreprise</label>
                                <input className="w-full px-3 py-2 text-black rounded-lg" id="company" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea className="w-full px-3 py-2 text-black rounded-lg" id="message" />
                            </div>
                            <button className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-full">Envoyer</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-900 py-6 text-center">
                {/* <p>© 2024 FuelTrack. Tous droits réservés.</p> */}
                <div className="flex justify-center mt-4">
                    <a href="#" className="mx-2">Accueil</a>
                    <a href="#" className="mx-2">Blog</a>
                    <a href="#" className="mx-2">Avis client</a>
                    <a href="#" className="mx-2">Qui sommes-nous?</a>
                    <a href="#" className="mx-2">Carrière</a>
                    <a href="#" className="mx-2">Vision et valeurs</a>
                </div>
                {/* <div className="flex justify-center mt-4">
                    <a href="#" className="mx-2"><img src="facebook.png" alt="Facebook" /></a>
                    <a href="#" className="mx-2"><img src="instagram.png" alt="Instagram" /></a>
                    <a href="#" className="mx-2"><img src="linkedin.png" alt="LinkedIn" /></a>
                    <a href="#" className="mx-2"><img src="tiktok.png" alt="TikTok" /></a>
                </div> */}
            </footer>
        </div>
    );
};

export default Body;