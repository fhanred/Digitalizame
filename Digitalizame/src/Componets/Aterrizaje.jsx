import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import logo3 from "../assets/logo3.png";
import engranaje from "../assets/engranaje.png";
import engranaje2 from "../assets/engranaje2.png";
import engranaje3 from "../assets/engranaje3.png";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

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
          <div className="flex flex-col md:flex-row items-center mb-4">
            <motion.h2
              className="text-6xl md:text-9xl font-bold text-white ml-0 md:ml-24 mt-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              SACALE
            </motion.h2>
            <div className="flex flex-col ml-0 md:ml-8">
              <motion.p
                className="text-xl md:text-2xl font-medium text-gray-300 ml-0 md:ml-60 -mb-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                MUESTRA LA ESENCIA DE TU MARCA
              </motion.p>
              <motion.p
                className="text-lg md:text-xl font-medium ml-0 md:ml-60 text-gray-300 mt-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Con la solución tecnológica digitalizame tendrás
                <br />
                un entorno para crear tu marca en el mundo digital <br />y
                mostrar al mundo lo que haces
              </motion.p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white ml-0 md:ml-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              EL PODER
            </motion.h2>
          </div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 ml-0 md:ml-48 text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A LAS REDES
          </motion.h2>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 ml-0 md:ml-48 text-white text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            SOCIALES
          </motion.h2>
        </div>
        <div className="absolute h-80 top-0 right-10 mt-80 mr-80">
          <img src={engranaje} alt="Engranaje 2" className="h-140 mr-80 mt-30" />
        </div>
        <div className="flex justify-center">
          <a
            href="#next-section"
            className="text-blue-400 text-2xl text-center"
          >
            ↓
          </a>
        </div>
        <div className="absolute h-180 bottom-0 left-80 mb-0 ml-60">
          <img src={engranaje} alt="Engranaje" className="h-full" />
        </div>
        <div className="absolute h-32 top-0 right-0 mt-8 mr-8">
          <img src={engranaje2} alt="Engranaje 2" className="h-80" />
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
        {/* Sección existente */}
        <div className="container mx-auto py-2">
          <div className="flex justify-between items-center mb-8">
            <img src={logo3} alt="Logo" className="h-32" />
          </div>
          <div className="flex flex-col space-y-2">
            <motion.h2
              className="text-custom font-bold text-pink-400 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              FIDELIZAME
            </motion.h2>
            {/* Nueva sección */}
            <div id="next-section" className="flex flex-col md:flex-row mt-8">
              <div className="w-full md:w-1/2 ml-0 md:ml-40">
                <ReactPlayer
                  url={video2}
                  controls
                  width="100%"
                  height="100%"
                  className="rounded-3xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <motion.p
                  className="text-xl md:text-2xl font-medium ml-0 md:ml-60 text-gray-300 mt-0"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Es un software que te permite entregar bonos
                  <br />
                  de manera digital a tus clientes y otorgarle un <br />
                  descuento, obsequio o beneficio por las recompras que haga en
                  tu negocio.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* Resto del contenido existente */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#third-section"
              className="text-blue-400 text-2xl text-center"
            >
              ↓
            </a>
          </motion.div>
        </div>
        {/* Tercera sección */}
        <div id="third-section" className="flex flex-col md:flex-row mt-8">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-medium text-gray-300">
              Aquí va el texto que quieres mostrar a la izquierda del tercer video. Puedes agregar más contenido según sea necesario.
            </p>
          </div>
          <div className="w-full md:w-1/2 ml-0 md:ml-40">
            <ReactPlayer
              url={video1}
              controls
              width="100%"
              height="100%"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
        <div className="absolute h-32 top-0 right-10 mt-80 mr-80">
          <img src={engranaje3} alt="Engranaje 2" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Aterrizaje;
