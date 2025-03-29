/timeless-india-website  
 ├── /public  
 │     ├── index.html  
 │     ├── taj-mahal.jpg  
 │     ├── hampi.jpg  
 │     ├── varanasi.jpg  
 │     ├── ajanta-caves.jpg  
 │     ├── favicon.ico  
 │     ├── logo192.png  
 │     ├── logo512.png  
 │     └── manifest.json  
 │  
 ├── /src  
 │     ├── /components  
 │     │        ├── DestinationCard.js  
 │     │        ├── Header.js  
 │     │        └── Footer.js  
 │     │  
 │     ├── App.js  
 │     ├── index.js  
 │     ├── App.css  
 │     ├── index.css  
 │     └── reportWebVitals.js  
 │  
 ├── package.json  
 ├── package-lock.json  
 ├── README.md  
 ├── .gitignore  
 ├── vercel.json  
 └── yarn.lock 


import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; 

const destinations = [
  { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: '/taj-mahal.jpg', description: 'A symbol of love and one of the Seven Wonders of the World.' },
  { name: 'Hampi', location: 'Karnataka', image: '/hampi.jpg', description: 'The ruins of Vijayanagara Empire, a UNESCO World Heritage Site.' },
  { name: 'Varanasi', location: 'Uttar Pradesh', image: '/varanasi.jpg', description: 'The spiritual capital of India with ancient temples and ghats.' },
  { name: 'Ajanta Caves', location: 'Maharashtra', image: '/ajanta-caves.jpg', description: 'Ancient Buddhist rock-cut caves with beautiful paintings and sculptures.' }
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-yellow-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Timeless India</h1>
        <p className="text-xl mt-2">Explore the Historical and Cultural Roots of India’s Destinations</p>
      </header>

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{dest.name}</h3>
                <p className="text-gray-600">{dest.location}</p>
                <p className="mt-2 text-gray-700">{dest.description}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Explore</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Timeless India. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timeless India</title>
  <link rel="stylesheet" href="./index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>

{
  "name": "timeless-india-website",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0"
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

{
  "version": 2,
  "builds": [
    { "src": "src/index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
