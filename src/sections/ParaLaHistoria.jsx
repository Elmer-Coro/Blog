import React from "react";

export default function ParaLaHistoria() {
  return (
    <section>
      <h3 className='text-slate-800 font-bold text-sm '>PARA LA HISTORIA</h3>
      <div className='bg-white p-2 text-sm my-2'>
        <h4 className='font-bold'>
          Invención de la primera computadora programable:
        </h4>
        <p>
          Antes: Antes de la década de 1830, las máquinas calculadoras eran
          dispositivos mecánicos fijos.
        </p>
        <p>
          Después: En 1837, Charles Babbage diseñó la Máquina Analítica,
          considerada la primera computadora programable. Aunque no se construyó
          completamente en su tiempo, sentó las bases para el desarrollo futuro
          de las computadoras.
        </p>
        <button className='bg-slate-950 w-full text-white py-1 text-left px-2 font-medium'>
          Leer mas
        </button>
      </div>
    </section>
  );
}
