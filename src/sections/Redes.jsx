import React from "react";
import { FaSearch, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Redes() {
  return (
    <section>
      <h3 className='text-slate-800 font-bold text-sm'>REDES...</h3>
      <div className='flex py-4 gap-4 items-center'>
        <FaYoutube className='text-2xl' />
        <span className='font-medium text-slate-800'>Youtube</span>
      </div>
      <div className='flex py-4 gap-4 items-center'>
        <FaGithub className='text-2xl' />
        <span className='font-medium text-slate-800'>Github</span>
      </div>
      <div className='flex py-4 gap-4 items-center'>
        <FaLinkedin className='text-2xl' />{" "}
        <span className='font-medium text-slate-800'>Linkedin</span>
      </div>
    </section>
  );
}
