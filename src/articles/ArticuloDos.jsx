import React from "react";
import CodeEditor from "../components/CodeEditor";

export default function ArticuloDos() {
  return (
    <article className='max-w-[1200px] m-auto mt-20'>
      <div className='w-3/4 m-auto'>
        <h2 className='text-slate-900 font-bold text-4xl text-center mb-8'>
          Iniciando con Estilo: Un Vistazo a los Primeros Pasos de CSS y
          Etiquetas Básicas
        </h2>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            Introducción:
          </h3>
          <p className='text-slate-700 text-base'>
            En el vasto panorama del desarrollo web, el inicio con CSS
            (Cascading Style Sheets) marca el primer paso hacia la creación de
            páginas web visualmente atractivas. En este artículo, nos
            sumergiremos en los fundamentos iniciales de CSS, explorando algunas
            etiquetas básicas que son esenciales para dar estilo a tus elementos
            HTML.
          </p>
        </section>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            La Evolución de CSS:
          </h3>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            CSS en Breve:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p>
                CSS nació para abordar la necesidad de separar la estructura de
                un documento HTML de su presentación visual. Desde su
                introducción, CSS ha evolucionado para convertirse en una
                herramienta potente y versátil para diseñadores y
                desarrolladores web.
              </p>
            </div>
          </div>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Enlazando CSS a HTML:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Antes de sumergirnos en las etiquetas, es crucial comprender
                cómo vincular tu archivo CSS a tu documento HTML. Utiliza la
                etiqueta &lt;link&gt; en la sección &lt;head&gt; de tu HTML para
                establecer esta conexión.
              </p>
              <CodeEditor
                lenguage={"html"}
                code={
                  '<head>\n <link rel="stylesheet" type="text/css" href="estilos.css" />\n</head>'
                }
              />
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            Etiquetas Básicas de CSS:
          </h3>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Selector Universal:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                El selector universal (*) se aplica a todos los elementos en tu
                documento HTML. Útil para establecer estilos base.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={
                  "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}"
                }
              />
            </div>
          </div>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Selector de Elemento:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Aplica estilos a un tipo específico de elemento, como todos los
                párrafos &lt;p&gt;.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={"p {\n  font-size: 16px;\n  color: #333;\n}"}
              />
            </div>
          </div>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Selector de Clase:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Permite estilos específicos para elementos con una clase
                determinada.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={".mi-clase {\n  font-weight: bold;\n  color: #ff6600;\n}"}
              />
            </div>
          </div>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Selector de ID:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Establece estilos para un elemento con un ID específico.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={"#mi-id {\n  background-color: #f0f0f0;\n}"}
              />
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            Propiedades Básicas:
          </h3>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Color y Fondo:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Personaliza el color de texto y el fondo de un elemento.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={"body {\n  color: #333;\n  background-color: #f8f8f8;\n}"}
              />
            </div>
          </div>
          <h4 className='text-slate-800 text-lg font-bold mb-2'>
            Tamaño del Texto:
          </h4>
          <div className='text-gray-700 text-base'>
            <div className='mb-4'>
              <p className='mb-4'>
                Controla el tamaño del texto de tus elementos.
              </p>
              <CodeEditor
                lenguage={"css"}
                code={"h1 {\n  font-size: 24px;\n}"}
              />
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h3 className='text-gray-800 text-xl font-bold mb-2'>Conclusión:</h3>
          <p className='text-gray-700 text-base'>
            Estas etiquetas y propiedades básicas proporcionan un sólido punto
            de partida para incursionar en el mundo del estilo web con CSS. A
            medida que te familiarices con estos conceptos, podrás crear una
            base visual sólida para tus proyectos. Continúa explorando y
            experimentando para descubrir la versatilidad que CSS tiene para
            ofrecer en el diseño web. ¡El viaje apenas comienza!
          </p>
        </section>
      </div>
    </article>
  );
}
