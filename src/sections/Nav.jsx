import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className='max-w-[1200px] m-auto pt-6 flex justify-between items-center text-slate-700 font-sans'>
      <div className='max-w-[100px]'>
        <h2 className='font-bold text-2xl text-slate-900'>
          &lt;&gt;Master<span className='text-violet-800'>Dev</span>&lt;/&gt;
        </h2>
      </div>
      <ul className='flex items-center gap-x-8'>
        <li>
          <Link
            className='text-sm font-semibold hover:text-violet-700'
            to='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className='text-sm font-semibold hover:text-violet-700'
            to='/articulos'>
            Articulos
          </Link>
        </li>
        <li>
          <Link
            className='text-sm font-semibold hover:text-violet-700'
            to='/sobre-mi'>
            Sobre mi
          </Link>
        </li>
      </ul>
    </nav>
  );
}
