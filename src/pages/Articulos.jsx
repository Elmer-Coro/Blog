import React from "react";
import Card from "../components/Card";

export default function Articulos() {
  return (
    <div className='mt-20 max-w-[1200px] m-auto grid grid-cols-3 gap-4'>
      <Card
        title='Explorando las Bases del Desarrollo Web: Una Inmersión Profunda en
        HTML'
        description='En el vasto universo del desarrollo web, HTML (Hypertext Markup Language) es el lenguaje fundamental que da vida a la estructura y el contenido de las páginas web. Conocer HTML es esencial para cualquier desarrollador web, ya que proporciona...'
        route='/articulo-uno'
      />
      <Card
        title='Iniciando con Estilo: Un Vistazo a los Primeros Pasos de CSS y
        Etiquetas Básicas'
        description='En el vasto panorama del desarrollo web, el inicio con CSS (Cascading Style Sheets) marca el primer paso hacia la creación de páginas web visualmente atractivas. En este artículo, nos
        sumergiremos en los fundamentos iniciales de CSS, explorando algunas etiquetas básicas...'
        route='/articulo-dos'
      />
      <Card
        title='El Viaje de JavaScript: Desde sus Humildes Inicios hasta la Espina Dorsal del Desarrollo Web'
        description='En el vasto universo del desarrollo web, pocas tecnologías han dejado una huella tan profunda como JavaScript. En este artículo, exploraremos el viaje fascinante de JavaScript, desde sus modestos comienzos hasta convertirse en un pilar...'
        route='/articulo-tres'
      />
    </div>
  );
}
