import React from "react";
import javascript from "../../public/javascript.jpg";
import html from "../../public/html.jpg";
import css from "../../public/css.jpg";
import js from "../../public/javascript.png";
import codigo from "../../public/codigo.jpg";
import hacker from "../../public/hacker.png";
import cuantica from "../../public/cuantica.jpg";
import Card from "../components/Card";
import ArticuloUno from "../articles/ArticuloUno";
import ArticuloDos from "../articles/ArticuloDos";
import ArticuloTres from "../articles/ArticuloTres";

export default function Main() {
  return (
    <main>
      <section className='bg-white my-2 p-2  grid grid-cols-1 sm:grid-cols-2 gap-1'>
        <div>
          <h2 className='font-bold uppercase text-slate-900'>
            JavaScript: Un Viaje desde las Raíces Web hasta las Cumbres del
            Desarrollo Moderno
          </h2>
          <p className='text-slate-800 text-sm font-medium pb-2'>
            JavaScript, creado por Brendan Eich en 1995 mientras trabajaba en
            Netscape, surgió como un lenguaje de programación del lado del
            cliente para mejorar la interactividad en las páginas web.
          </p>
          <p className='text-slate-800 text-sm font-medium'>
            Aunque inicialmente fue subestimado, JavaScript se convirtió en un
            pilar fundamental en el desarrollo web. Su estandarización a través
            de ECMAScript y su evolución constante, impulsada por la comunidad y
            los navegadores modernos, ha llevado a su prominencia en el
            desarrollo tanto del lado del cliente como del servidor, gracias a
            tecnologías como Node.js.
          </p>
        </div>
        <img
          className='h-full w-full'
          src={javascript}
          alt=''
        />
      </section>
      <div className='m-auto h-[1px] bg-black my-4'></div>
      <section>
        <h4 className='text-slate-800 font-medium'>ARTICULOS</h4>
        <h2 className='text-3xl py-4 uppercase text-slate-900 font-bold'>
          Explora artículos fascinantes sobre el desarrollo web.
        </h2>
        <div className='bg-white p-2'>
          <Card
            img={html}
            title='Explorando las Bases del Desarrollo Web: Una Inmersión Profunda
                en HTML'
            description='   En el vasto universo del desarrollo web, HTML (Hypertext Markup
                Language) es el lenguaje fundamental que da vida a la estructura
                y el contenido de las páginas web.'
            article={<ArticuloUno />}
          />
          <Card
            img={css}
            title=' Iniciando con Estilo: Un Vistazo a los Primeros Pasos de CSS y
                Etiquetas Básicas'
            description=' En el vasto panorama del desarrollo web, el inicio con CSS
            (Cascading Style Sheets) marca el primer paso hacia la creación
            de páginas web visualmente atractivas.'
            article={<ArticuloDos />}
          />
          <Card
            img={js}
            title='El Viaje de JavaScript: Desde sus Humildes Inicios hasta la
                Espina Dorsal del Desarrollo Web'
            description='En el vasto universo del desarrollo web, pocas tecnologías han
            dejado una huella tan profunda como JavaScript. En este
            artículo, exploraremos el viaje fascinante de JavaScript,'
            article={<ArticuloTres />}
          />
        </div>
      </section>
      <div className='m-auto h-[1px] bg-black my-4'></div>
      <section>
        <h4 className='text-slate-800 font-medium'>HISTORIAS</h4>
        <div className='my-4 grid grid-cols-2 md:grid-cols-3 gap-4'>
          <article>
            <img
              className='border-4 border-solid border-gray-50'
              src={codigo}
              alt=''
            />
            <h2 className='font-bold text-sm py-2 text-slate-900'>
              El Código Ancestral
            </h2>
            <p className='py-2 text-red-700  font-semibold text-sm text-right'>
              (Adriana Martínez)
            </p>
            <p className='text-sm font-medium py-2 text-slate-800'>
              Descubre cómo Adriana, una ingeniera de software, desentraña un
              antiguo código misterioso que la lleva a través de las épocas.
              Desde las antiguas máquinas de Turing hasta los modernos
              algoritmos de inteligencia artificial, sigue su viaje para
              desvelar los secretos enterrados en el código ancestral que podría
              cambiar el curso de la tecnología para siempre.
            </p>
            <button className='text-red-700  font-semibold text-sm'>
              Leer mas
            </button>
          </article>
          <article>
            <img
              className='border-4 border-solid border-gray-50 h-[159px] w-full'
              src={hacker}
              alt=''
            />
            <h2 className='font-bold text-sm py-2 text-slate-900'>
              El Último Hacker
            </h2>
            <p className='py-2 text-red-700  font-semibold text-sm text-right'>
              (Javier Soto)
            </p>
            <p className='text-sm font-medium py-2 text-slate-800'>
              En un futuro donde la ciberseguridad es vital, Javier Soto, el
              último hacker en un mundo dominado por la IA, se embarca en una
              misión imposible. Acompaña a Javier mientras se adentra en la red
              oscura para enfrentarse a un enemigo inesperado. ¿Podrá superar
              las barreras tecnológicas y salvar el mundo digital?
            </p>
            <button className='text-red-700  font-semibold text-sm'>
              Leer mas
            </button>
          </article>
          <article>
            <img
              className='border-4 border-solid border-gray-50'
              src={cuantica}
              alt=''
            />
            <h2 className='font-bold text-sm py-2 text-slate-900'>
              Sueños Cuánticos
            </h2>
            <p className='py-2 text-red-700  font-semibold text-sm text-right'>
              (Carlos Rodríguez)
            </p>
            <p className='text-sm font-medium py-2 text-slate-800'>
              Carlos, un entusiasta de la informática cuántica, experimenta un
              extraño fenómeno: sus sueños comienzan a mezclarse con la realidad
              cuántica. A medida que explora esta conexión única, descubre
              posibilidades asombrosas y se enfrenta a dilemas éticos. ¿Son los
              sueños una puerta a dimensiones cuánticas, o es solo la mente de
              un programador que se desborda?
            </p>
            <button className='text-red-700  font-semibold text-sm'>
              Leer mas
            </button>
          </article>
          <article>
            <img
              className='border-4 border-solid border-gray-50'
              src={javascript}
              alt=''
            />
            <h2 className='font-bold text-sm py-2 text-slate-900'>
              El Último Protocolo
            </h2>
            <p className='py-2 text-red-700  font-semibold text-sm text-right'>
              (Marta López)
            </p>
            <p className='text-sm font-medium text-slate-800'>
              Marta, una ingeniera de sistemas, se encuentra con un antiguo
              protocolo de programación que podría cambiar el juego. A medida
              que lo implementa, se da cuenta de las consecuencias no previstas
              que amenazan con desencadenar el caos en el mundo digital. Únete a
              Marta en su carrera contra el tiempo para salvar la integridad de
              la red global.
            </p>
            <button>read more</button>
          </article>
          <article>
            <img
              className='border-4 border-solid border-gray-50'
              src={javascript}
              alt=''
            />
            <h2 className='font-bold text-sm py-2'>
              EL INICIO DE LA INTERACTIVAD PARA LA WEB
            </h2>
            <span className='py-2'>(dasarrollado por breand eich)</span>
            <p className='text-sm font-semibold py-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi numquam ducimus enim rerum qui illum est debitis
              deleniti atque itaque
            </p>
            <button>read more</button>
          </article>
          <article>
            <img
              className='border-4 border-solid border-gray-50'
              src={javascript}
              alt=''
            />
            <h2 className='font-bold text-sm py-2'>
              EL INICIO DE LA INTERACTIVAD PARA LA WEB
            </h2>
            <span className='py-2'>(dasarrollado por breand eich)</span>
            <p className='text-sm font-semibold py-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi numquam ducimus enim rerum qui illum est debitis
              deleniti atque itaque
            </p>
            <button>read more</button>
          </article>
        </div>
      </section>
    </main>
  );
}
