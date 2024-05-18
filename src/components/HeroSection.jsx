import React from "react";
import ReactTypingEffect from "react-typing-effect";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="bg-gradient-to-r from-black opacity-80 w-full h-full absolute top-0 left-0"></div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide relative z-10">
        ¡La hora de la acción ha llegado!<br />

        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          <ReactTypingEffect
            text={["¡Únete a la batalla!"]}
            speed={100}
            eraseSpeed={50}
            typingDelay={100}
            eraseDelay={1000}
          />
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl relative z-10">
        Descubre el poder que llevas dentro de ti y conviértete en tu propio héroe. Enfrenta tus miedos, desafíos y obstáculos con valentía y determinación. Atrévete a superar tus límites y alcanzar tus metas más ambiciosas. El camino hacia la grandeza no es fácil, pero cada paso que des te acercará más a la victoria. ¡Empieza hoy mismo tu viaje hacia la transformación y sé tu propio héroe!
      </p>
      <div className="flex justify-center my-10 relative z-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:shadow-lg text-white font-semibold transition duration-300"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-neutral-500 hover:border-orange-500 hover:text-orange-500 font-semibold transition duration-300"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 justify-center items-center">
        <div className="relative w-full sm:w-1/2 p-4 z-10">
          <div className="group overflow-hidden rounded-lg border-4 border-orange-700 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 p-4 z-10">
          <div className="group overflow-hidden rounded-lg border-4 border-orange-700 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
