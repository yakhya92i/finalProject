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
            <section className="bg-blue-800 py-10">
                <h2 className="text-center text-2xl font-bold">Certifications</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Certification ISO 9001</h3>
                        <p className="mt-2">Assurance qualité dans nos processus de gestion.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Certification ISO 14001</h3>
                        <p className="mt-2">Engagement envers la gestion environnementale.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Certification ISO 45001</h3>
                        <p className="mt-2">Santé et sécurité au travail sont notre priorité.</p>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Chiffres Clés</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-800 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">500+</h3>
                        <p className="mt-2">Clients satisfaits à travers le monde.</p>
                    </div>
                    <div className="bg-blue-800 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">1M+</h3>
                        <p className="mt-2">Litres de carburant gérés chaque jour.</p>
                    </div>
                    <div className="bg-blue-800 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">99.9%</h3>
                        <p className="mt-2">Taux de précision dans nos rapports.</p>
                    </div>
                </div>
            </section>
            <section className="bg-blue-800 py-10">
                <h2 className="text-center text-2xl font-bold">Grands Projets</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Projet Alpha</h3>
                        <p className="mt-2">Optimisation des stocks pour une grande compagnie pétrolière.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Projet Beta</h3>
                        <p className="mt-2">Mise en place d'un système de suivi en temps réel pour une entreprise gazière.</p>
                    </div>
                    <div className="bg-blue-700 p-6 mx-4 rounded-lg">
                        <h3 className="text-xl font-bold">Projet Gamma</h3>
                        <p className="mt-2">Analyse de performance pour un réseau de stations-service.</p>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Nous contacter</h2>
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-800 p-6 mx-4 rounded-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="firstName">Non - Prénom</label>
                                <input className="w-full px-3 py-2 text-black rounded-lg" id="firstName" type="text" />
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
                <div className="flex justify-center mt-4">
                    <a href="#" className="mx-2">Accueil</a>
                    <a href="#" className="mx-2">Blog</a>
                    <a href="#" className="mx-2">Avis client</a>
                    <a href="#" className="mx-2">Qui sommes-nous?</a>
                    <a href="#" className="mx-2">Carrière</a>
                    <a href="#" className="mx-2">Vision et valeurs</a>
                </div>
            </footer>
        </div>
    );
};

export default Body;