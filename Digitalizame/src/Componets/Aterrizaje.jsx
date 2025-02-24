import "react";
import { motion } from "framer-motion";
import logo3 from "../assets/logo3.png";
import engranaje from "../assets/engranaje.png";
import engranaje2 from "../assets/engranaje2.png";
import engranaje3 from "../assets/engranaje3.png";
import ReactPlayer from "react-player";
import LogoZasca from "../assets/LogoZasca.png";

const Aterrizaje = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
      <div className="container mx-auto py-2">
        <div className="flex justify-between items-center mb-8">
          <img src={logo3} alt="Logo" className="h-32" />
        </div>
        <div className="flex flex-col space-y-2 px-4 md:px-0">
          <motion.h2
            className="text-4xl md:text-custom font-bold text-blue-400 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DIGITALIZAME
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <motion.h2
              className="text-5xl md:text-9xl font-bold text-white md:ml-24 mt-10 text-center md:text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              SACALE
            </motion.h2>
            <div className="flex flex-col mt-4 md:mt-20 md:ml-8">
              <motion.p
                className="text-xl md:text-2xl font-medium text-gray-300 text-center md:text-left md:ml-80 -mb-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                MUESTRA LA ESENCIA DE TU MARCA
              </motion.p>
              <motion.p
                className="text-lg md:text-xl font-medium text-center md:text-left md:ml-80 text-gray-300 mt-2 md:mt-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Con la solución tecnológica digitalizame tendrás{" "}
                <br className="hidden md:block" />
                un entorno para crear tu marca en el mundo digital{" "}
                <br className="hidden md:block" />y mostrar al mundo lo que
                haces
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white md:ml-12 text-center md:text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              EL PODER
            </motion.h2>
          </div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 text-white text-center md:ml-48"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            A LAS REDES
          </motion.h2>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 text-white text-center md:ml-48"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            SOCIALES
          </motion.h2>
        </div>

        {/* Responsive gear images */}
        <div className="hidden md:block absolute h-80 top-0 right-20 xl:right-60 mt-80 mr-80 xl:mr-96">
          <img
            src={engranaje}
            alt="Engranaje 2"
            className="h-80 md:h-96 xl:h-140 mr-80 xl:mr-40 mt-36"
          />
        </div>

        {/* Mobile gear images */}
        <div className="md:hidden absolute h-40 top-0 right-4 mt-40">
          <img src={engranaje} alt="Engranaje 2" className="h-20" />
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#next-section"
            className="text-blue-400 text-2xl text-center animate-bounce"
          >
            ↓
          </a>
        </div>
        {/* Responsive gear images for second section */}
        {/* <div className="hidden md:block absolute h-180 bottom-0 left-80 mb-0 ml-60">
          <img src={engranaje} alt="Engranaje" className="h-full" />
        </div> */}
        {/* <div className="hidden md:block absolute h-32 top-0 right-0 mt-24 mr-8">
          <img src={engranaje2} alt="Engranaje 2" className="h-80" />
        </div> */}
        {/* Mobile gear images */}

        {/* Responsive content section */}
        <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
          <div className="container mx-auto py-2 px-4 md:px-0 xl:pt-40">
            {" "}
            {/* Added xl:pt-40 */}
            <div className="flex flex-col space-y-2">
              <motion.h2
                className="text-4xl md:text-custom2 font-bold text-pink-700 text-center xl:mb-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                FIDELIZAME
              </motion.h2>
              {/* Responsive layout for video and text */}
              <div
                id="next-section"
                className="flex flex-col md:flex-row mt-8 items-center"
              >
                <div className="w-[250px] h-[445px] md:w-[315px] md:h-[560px] relative overflow-hidden mx-auto rounded-3xl shadow-lg mb-8 md:mb-0">
                  <ReactPlayer
                    url="https://www.youtube.com/shorts/UrK3x_5JycY"
                    controls
                    width="100%"
                    height="100%"
                    config={{
                      youtube: {
                        playerVars: {
                          showinfo: 1,
                          orientation: "portrait",
                        },
                      },
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <motion.p
                    className="text-xl md:text-2xl font-medium text-center md:text-left md:ml-60 text-gray-300"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Es un software que te permite entregar bonos{" "}
                    <br className="hidden md:block" />
                    de manera digital a tus clientes y otorgarle un{" "}
                    <br className="hidden md:block" />
                    descuento, obsequio o beneficio por las recompras que haga
                    en tu negocio.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#next-section"
                className="text-blue-400 text-2xl text-center"
              >
                ↓
              </a>
            </motion.div>
          </div>
        </div>
        <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
          {/* Nueva sección */}
          <div className="container mx-auto py-2 px-4 md:px-0 xl:pt-40">
            {" "}
            {/* Added xl:pt-40 */}
            <div className="flex flex-col space-y-2">
              <motion.h2
                className="text-4xl md:text-custom3 font-bold text-pink-700 text-center xl:mb-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                OPTIMIZACIÓN DE REDES SOCIALES
              </motion.h2>
              <div className="flex flex-col md:flex-row mt-8 items-center">
                {/* Texto */}
                <div className="w-full md:w-1/3 flex items-center justify-center md:ml-10 order-2 md:order-1">
                  <motion.p
                    className="text-xl md:text-2xl font-medium text-gray-300 text-center md:text-left px-4 md:px-0 mt-8 md:mt-0"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Mejora tus perfiles para que luzcan profesionales,
                    <br className="hidden md:block" />
                    conecten con tu público ideal y conviertan visitantes en
                    clientes. <br className="hidden md:block" />
                    Ajustamos tu biografía, diseño y enlaces estratégicos{" "}
                    <br className="hidden md:block" />
                    para que tus redes trabajen por tu negocio.
                    <br className="hidden md:block" />
                    ¡Impulsa tu presencia digital al máximo!
                  </motion.p>
                </div>
                {/* Video a la derecha */}
                <div className="w-[315px] h-[560px] relative overflow-hidden mx-auto rounded-3xl shadow-lg">
                  <ReactPlayer
                    url="https://www.youtube.com/shorts/1En7LRMqV-0"
                    controls
                    width="100%"
                    height="100%"
                    config={{
                      youtube: {
                        playerVars: {
                          showinfo: 1,
                          orientation: "portrait",
                        },
                      },
                    }}
                  />
                </div>
                <div className="absolute h-80 top-0 right-10 mt-80 mr-80">
                  <img
                    src={engranaje3}
                    alt="Engranaje 2"
                    className="h-140 mr-20 mt-30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-black via-blue-300 via-50% via-purple-700 via-65% to-pink-600 relative">
        <div className="container mx-auto py-2 px-4 md:px-0 xl:pt-40">
          <div className="flex flex-col space-y-2">
            <motion.h2
              className="text-4xl md:text-custom3 font-bold text-violet-700 text-center xl:mb-20"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              TARJETA DIGITAL DE PRESENTACIÓN
            </motion.h2>
            <div className="flex flex-col md:flex-row mt-8 items-center">
              {/* Video */}
              <div className="w-[250px] h-[445px] md:w-[315px] md:h-[560px] relative overflow-hidden mx-auto rounded-3xl shadow-lg mb-8 md:mb-0 order-1">
                <ReactPlayer
                  url="https://www.youtube.com/shorts/0uw0EvMmjpk"
                  controls
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 1,
                        orientation: "portrait",
                      },
                    },
                  }}
                />
              </div>
              {/* Texto */}
              <div className="w-full md:w-1/2 flex items-center justify-center order-2">
                <motion.p
                  className="text-xl md:text-2xl font-medium text-gray-300 text-center md:text-left px-4 md:px-0"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Es un dispositivo tecnológico que permite{" "}
                  <br className="hidden md:block" />
                  la conexión, entre los dueños de negocios y{" "}
                  <br className="hidden md:block" />
                  sus clientes para que estos se queden con toda{" "}
                  <br className="hidden md:block" />
                  la información sin contacto y de forma facil,{" "}
                  <br className="hidden md:block" />
                  ganar seguidores en redes sociales que a futuro{" "}
                  <br className="hidden md:block" />
                  se converitan en clientes.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3">
              <a
                href="http://wa.me/573502142082"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo3}
                  alt="Logo"
                  className="h-24 md:h-16 xl:h-24 mx-auto md:mx-0"
                />
              </a>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-sm md:text-base my-auto">
                  Proyecto en alianza con Tuxstone
                </p>
                <a
                  href="https://www.tuxstone.com/digitalizame/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex items-center"
                >
                  <img
                    src={LogoZasca}
                    alt="Logo Zasca"
                    className="h-20 md:h-10 xl:h-20"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Aterrizaje;
