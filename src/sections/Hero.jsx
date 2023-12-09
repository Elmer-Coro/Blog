import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className='max-w-[1200px] m-auto mt-20'>
      <div className='w-3/4 m-auto flex flex-col items-center'>
        <h1 className='text-slate-900 font-bold text-6xl text-center'>
          Explora artículos fascinantes sobre el desarrollo web.
        </h1>
        <p className='mt-8 text-slate-700 text-center font-normal text-xl'>
          Ya sea que estés comenzando tu viaje en el desarrollo web o seas un
          veterano en busca de nuevas perspectivas, aquí encontrarás recursos
          valiosos, ideas estimulantes y análisis profundos que te ayudarán a
          avanzar en tu trayectoria profesional.
        </p>
        <Link to='/articulos'>
          <button className='w-52 mt-16 border border-slate-800 flex items-center gap-4 justify-center text-blue-700 py-4 rounded-md font-semibold text-xl'>
            Ver articulos
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
