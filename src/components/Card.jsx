import React, { useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import Modal from "react-modal";
import ArticuloUno from "../articles/ArticuloUno";

export default function Card({ img, title, description, article }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <article className='flex gap-2 my-4'>
        <img
          className='w-40 '
          src={img}
          alt=''
        />
        <div>
          <h1 className='uppercase font-bold text-slate-900 text-sm'>
            {title}
          </h1>
          <p className='text-slate-800 text-sm font-medium'>{description}</p>
        </div>
        <CiCircleMore
          className='text-9xl cursor-pointer'
          onClick={openModal}
        />
      </article>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Example Modal'>
        <button
          onClick={closeModal}
          className='text-2xl'>
          ❌
        </button>
        {article}
      </Modal>
    </>
  );
}
