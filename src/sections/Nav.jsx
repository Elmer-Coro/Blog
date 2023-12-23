import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {
  let disable = false;
  function listNavbar() {
    let navbar = document.getElementById("navbar");
    if (!disable) {
      navbar.style.display = "block";
      disable = true;
    } else {
      navbar.style.display = "none";
      disable = false;
    }
  }

  return (
    <nav className='max-w-[1000px] m-auto'>
      <CiMenuFries
        className='text-2xl md:hidden'
        onClick={listNavbar}
      />
      <ul
        id='navbar'
        className='hidden md:flex gap-2 text-white uppercase text-sm text-center font-semibold'>
        <li className='bg-slate-950 w-[200px] py-1'>Inicio</li>
        <li className='bg-slate-950 w-[200px] py-1'>Articulos</li>
        <li className='bg-slate-950 w-[200px] py-1'>Historias</li>
        <li className='bg-slate-950 w-[200px] py-1'>Portafolio</li>
        <li className='bg-slate-950 w-[200px] py-1'>Contacto</li>
      </ul>
    </nav>
  );
}
