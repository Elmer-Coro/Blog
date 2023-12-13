import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SobreMi() {
  return (
    <div className='max-w-[1200px] m-auto'>
      <div className=' w-3/4 m-auto mt-16 text-center flex flex-col items-center gap-8 justify-center'>
        <div>
          <h2 className='text-slate-900  text-6xl font-bold'>
            Soy <span className='text-violet-600'>Elmer</span> un apasionado del
            desarrollo web y de la programación.
          </h2>
          <p className='mt-8 text-xl text-slate-700'>
            Me especializo en el dearrollo frontend, y estoy constantemente
            buscando oportunidades para aprender y crecer en este dinámico
            campo. Ya sea diseñando una interfaz intuitiva, resolviendo desafíos
            algorítmicos o colaborando en proyectos innovadores, estoy
            comprometido con la excelencia técnica y la mejora continua.
          </p>
        </div>
        <div className=' flex  items-center gap-7 text-5xl m-auto'>
          <FaYoutube className='text-red-600' />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}
