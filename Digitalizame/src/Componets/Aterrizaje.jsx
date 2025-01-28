import React from "react";
import { motion } from "framer-motion";
import logo3 from "../assets/logo3.png";
import engranaje from "../assets/engranaje.png";
import engranaje2 from "../assets/engranaje2.png";
import engranaje3 from "../assets/engranaje3.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Aterrizaje = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative overflow-hidden">
      {/* Primera sección */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <img src={logo3} alt="Logo" className="h-20 sm:h-32" />
        </div>
        <div className="flex flex-col space-y-4">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DIGITALIZAME
          </motion.h2>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <motion.h2
              className="text-4xl sm:text-6xl lg:text-9xl font-bold text-white text-center sm:text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              SACALE
            </motion.h2>
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-8">
              <motion.p
                className="text-lg sm:text-2xl font-medium text-gray-300 text-center sm:text-left"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                MUESTRA LA ESENCIA DE TU MARCA
              </motion.p>
              <motion.p
                className="text-base sm:text-lg font-medium text-gray-300 mt-2 text-center sm:text-left"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Con la solución tecnológica digitalizame tendrás un entorno para
                crear tu marca en el mundo digital y mostrar al mundo lo que
                haces.
              </motion.p>
            </div>
          </div>
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            EL PODER
          </motion.h2>
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A LAS REDES
          </motion.h2>
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            SOCIALES
          </motion.h2>
        </div>
        <div className="hidden sm:block absolute h-80 top-0 right-10 mt-80 mr-80">
          <img src={engranaje} alt="Engranaje 2" className="h-140" />
        </div>
        <div className="flex justify-center mt-8">
          <a href="#next-section" className="text-blue-400 text-2xl">
            ↓
          </a>
        </div>
        <div className="hidden sm:block absolute h-180 bottom-0 left-80 mb-0 ml-60">
          <img src={engranaje} alt="Engranaje" className="h-full" />
        </div>
        <div className="hidden sm:block absolute h-32 top-0 right-0 mt-8 mr-8">
          <img src={engranaje2} alt="Engranaje 2" className="h-80" />
        </div>
      </div>

      {/* Segunda sección */}
      <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-4">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              FIDELIZAME
            </motion.h2>
            <div id="next-section" className="flex flex-col sm:flex-row mt-8">
              <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto">
                <video controls className="w-full rounded-3xl">
                  <source src={video2} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </div>
              <div className="w-full sm:w-1/2 flex items-center justify-center mt-4 sm:mt-0">
                <motion.p
                  className="text-lg sm:text-xl font-medium text-gray-300 text-center sm:text-left"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Es un software que te permite entregar bonos de manera digital
                  a tus clientes y otorgarles un descuento, obsequio o beneficio
                  por las recompras que hagan en tu negocio.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tercera sección */}
      <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-4">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              OPTIMIZACIÓN DE REDES SOCIALES
            </motion.h2>
            <div className="flex flex-col sm:flex-row mt-8">
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <motion.p
                  className="text-lg sm:text-xl font-medium text-gray-300 text-center sm:text-left"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Es un software que te permite entregar bonos de manera digital
                  a tus clientes y otorgarles un descuento, obsequio o beneficio
                  por las recompras que hagan en tu negocio.
                </motion.p>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <video controls className="w-full rounded-3xl">
                  <source src={video1} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aterrizaje;
