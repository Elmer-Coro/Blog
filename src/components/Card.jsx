import React from "react";
import { Link } from "react-router-dom";
import { IoIosMore } from "react-icons/io";

export default function Card({ title, description, route }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg border bg-white'>
      <div className='px-6 py-4'>
        <div className='font-bold text-slate-900 text-center text-xl mb-2'>
          {title}
        </div>
        <p className='text-slate-600 text-base'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        <Link
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  items-end gap-2 justify-center'
          to={route}>
          Ver Más
          {/* <IoIosMore /> */}
        </Link>
      </div>
    </div>
  );
}
