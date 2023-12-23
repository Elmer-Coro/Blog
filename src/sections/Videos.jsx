import React from "react";

export default function Videos() {
  return (
    <section>
      <h3 className='text-slate-800 font-bold text-sm'>VIDEOS...</h3>
      <iframe
        width='260'
        height='230'
        src='https://www.youtube.com/embed/qVvng7tq_Qk?si=sk-Kx4nVVhnhRNY7'
        title='YouTube video player'
        className='py-4'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
      <iframe
        width='260'
        height='230'
        src='https://www.youtube.com/embed/dUjiLZ7UlX4?si=4Ro0CP7IrNwjw8xa'
        title='YouTube video player'
        className='py-4'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </section>
  );
}
