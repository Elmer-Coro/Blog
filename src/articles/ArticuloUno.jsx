import React from "react";
import CodeEditor from "../components/CodeEditor";

export default function ArticuloUno() {
  return (
    <article className='max-w-[1200px] m-auto mt-20'>
      <div className='w-3/4 m-auto'>
        <h2 className='text-slate-900 font-bold text-4xl text-center mb-8'>
          Explorando las Bases del Desarrollo Web: Una Inmersión Profunda en
          HTML
        </h2>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            Introducción:
          </h3>
          <p className='text-slate-600 text-base'>
            En el vasto universo del desarrollo web, HTML (Hypertext Markup
            Language) es el lenguaje fundamental que da vida a la estructura y
            el contenido de las páginas web. Conocer HTML es esencial para
            cualquier desarrollador web, ya que proporciona los cimientos sobre
            los cuales se construyen sitios web dinámicos e interactivos. En
            este artículo, vamos a sumergirnos en las entrañas de HTML,
            explorando sus conceptos clave y descubriendo cómo se utiliza para
            dar forma a la web que conocemos y amamos.
          </p>
        </section>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            ¿Qué es HTML y por qué es tan crucial?
          </h3>
          <p className='text-slate-600 text-base'>
            HTML es un lenguaje de marcado que utiliza etiquetas para
            estructurar el contenido de una página web. Cada etiqueta tiene un
            propósito específico, ya sea para definir un encabezado, un párrafo,
            una lista o cualquier otro elemento de la página. Es el lenguaje
            básico que conecta todos los elementos de una página web,
            proporcionando un marco coherente para la presentación de
            información.
          </p>
        </section>
        <section className='mb-8'>
          <h3 className='text-slate-800 text-xl font-bold mb-2'>
            Estructura Básica de un Documento HTML:
          </h3>
          <p className='text-slate-600 text-base mb-8'>
            Antes de sumergirnos en las complejidades, es crucial entender la
            estructura elemental de un documento HTML. Todo comienza con la
            declaración &lt;!DOCTYPE html&gt;, seguida por las etiquetas
            &lt;html&gt;, &lt;head&gt;, y &lt;body&gt;. Estas proporcionan el
            contexto necesario para el contenido y los recursos asociados.
          </p>
          <CodeEditor
            lenguage={"html"}
            code={
              "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Título de la Página</title>\n  </head>\n  <body>\n    <!-- Contenido visible de la página -->\n  </body>\n</html>"
            }
          />
        </section>
        <section className='mb-8'>
          <h3 className='text-gray-800 text-xl font-bold mb-2'>
            Etiquetas y Elementos:
          </h3>
          <p className='text-gray-700 text-base mb-8'>
            Las etiquetas HTML son las instrucciones que le dicen al navegador
            cómo mostrar el contenido. Por ejemplo, &lt;p&gt; representa un
            párrafo, &lt;h1&gt; a &lt;h6&gt; definen encabezados, y &lt;a&gt;
            crea enlaces. Combinando estas etiquetas, se construyen elementos
            que dan forma y significado a la información presentada.
          </p>
          <CodeEditor
            lenguage={"html"}
            code={
              '<p>¡HTML hace posible la creación de páginas web emocionantes!</p>\n<h2>Sección Importante</h2>\n<p>Este es un <a href="https://www.ejemplo.com">enlace</a> a otra página.</p> '
            }
          />
        </section>
        <section className='mb-8'>
          <h3 className='text-gray-800 text-xl font-bold mb-2'>Atributos:</h3>
          <p className='text-gray-700 text-base mb-8'>
            Los atributos proporcionan información adicional sobre una etiqueta
            y son clave para personalizar la apariencia y comportamiento de los
            elementos HTML. Por ejemplo, el atributo src en la etiqueta
            &lt;img&gt; indica la ubicación de una imagen.
          </p>
          <CodeEditor
            lenguage={"html"}
            code={'<img src="imagen.jpg" alt="Descripci\xF3n de la imagen" />'}
          />
        </section>
        <section className='mb-8'>
          <h3 className='text-gray-800 text-xl font-bold mb-2'>
            Nuevas Características en HTML5:
          </h3>
          <p className='text-gray-700 text-base mb-8'>
            HTML5, la versión más reciente de HTML, introduce características
            avanzadas como elementos semánticos (&lt;article&gt;,
            &lt;section&gt;) que mejoran la estructura y accesibilidad. También
            incluye nuevas etiquetas para manejar audio (&lt;audio&gt;) y video
            (&lt;video&gt;), simplificando la incorporación de contenido
            multimedia.
          </p>
        </section>
        <section className='mb-20'>
          <h3 className='text-gray-800 text-xl font-bold mb-2'>Conclusión:</h3>
          <p className='text-gray-700 text-base'>
            En resumen, HTML es el cimiento esencial del desarrollo web,
            permitiendo la creación de páginas estructuradas e interactivas. Con
            una comprensión sólida de sus fundamentos, los desarrolladores
            tienen el poder de construir experiencias en línea cautivadoras. En
            futuros artículos, exploraremos cómo HTML se combina con otros
            lenguajes y tecnologías para dar vida a la web moderna. ¡Prepárate
            para un emocionante viaje en el fascinante mundo del desarrollo web!
          </p>
        </section>
      </div>
    </article>
  );
}
