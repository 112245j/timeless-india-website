
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
            >
              <Card className="shadow-lg">
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover rounded-t-xl" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-gray-600">{dest.location}</p>
                  <p className="mt-2 text-gray-700">{dest.description}</p>
                  <Button className="mt-4 w-full bg-blue-500 text-white">Explore</Button>
                </CardContent>
              </Card>
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
