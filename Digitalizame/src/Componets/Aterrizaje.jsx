import React from 'react';
import { motion } from 'framer-motion';
import logo3 from '../assets/logo3.png';
import engranaje from '../assets/engranaje.png';
import engranaje2 from '../assets/engranaje2.png'; // Asegúrate de tener la imagen en la ruta correcta

const Aterrizaje = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center mb-8">
          <img src={logo3} alt="Logo" className="h-32" />
        </div>
        <div className="flex flex-col space-y-2">
        <motion.h2
            className="text-custom font-bold text-blue-400 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DIGITALIZAME
          </motion.h2>
          <div className="flex items-center mb-4">
            <motion.h2
              className="text-9xl font-bold text-white ml-24 mt-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              SACALE
            </motion.h2>
            <div className="flex flex-col ml-8">
              <motion.p
                className="text-2xl font-medium text-gray-300 ml-60 -mb-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                MUESTRA LA ESENCIA DE TU MARCA
              </motion.p>
              <motion.p
                className="text-1xl font-medium ml-60 text-gray-300 mt-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Con la solución tecnológica digitalizame tendrás<br />
                un entorno para crear tu marca en el mundo digital <br />
                y mostrar al mundo lo que haces
              </motion.p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <motion.h2
              className="text-6xl font-bold text-white ml-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              EL PODER
            </motion.h2>
          </div>
          <motion.h2
            className="text-6xl font-bold mb-4 ml-48 text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A LAS REDES
          </motion.h2>
          <motion.h2
            className="text-6xl font-bold mb-4 ml-48 text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            SOCIALES
          </motion.h2>
        </div>
        <div className="absolute h-180 bottom-0 left-80 mb-0 ml-60">
          <img src={engranaje} alt="Engranaje" className="h-full" />
        </div>
        <div className="absolute h-32 top-0 right-0 mt-8 mr-8">
          <img src={engranaje2} alt="Engranaje 2" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Aterrizaje;
