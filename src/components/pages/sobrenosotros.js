import React from "react";
import ceodiario from "../img/ceo diario.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import editores from "../img/editores.jpg";
import sobrenosotros from "../img/sobre nosotros.jpg";

const Sobrenosotros = () => {
  return (
    <main class="bg-dark">
      <section class="mb-5">
        <h1 class="display-4 text-center font-bold text-white">
          ¿Quienes somos?
        </h1>
        <p class="lead text-white mx-5">
          <strong>ROLLINGNEWS, rigor tradicional e innovación constante</strong>
          , es un medio online que ofrece información actualizada en tiempo real
          y de manera permanente las 24 horas del día, todos los días del año.
          Los contenidos digitales de pueden ser consultados a través de
          internet desde cualquier ordenador o mediante dispositivos móviles
          como smartphones o tabletas. El equipo de profesionales integrado por
          periodistas, diseñadores, técnicos y comerciales, tiene a su cargo la
          elaboración de noticias de última hora, entrevistas, reportajes,
          narraciones minuto a minuto de eventos en directo, columnas de opinión
          y decenas de blogs especializados.
        </p>
        <div class="mx-5 mb-3">
          <img
            src={ceodiario}
            alt="ceo del diario Rolling News"
            class="w-100"
          />
        </div>
        <p class="lead text-white mx-5">
          El sitio cuenta con numerosas áreas de participación de los usuarios,
          además de la posibilidad de comentar las noticias publicadas en la
          web, y dispone de una amplia oferta informativa multimedia que abarca
          desde la cobertura de noticias y videorreportajes, hasta la producción
          propia de programas de divulgación y entretenimiento. Un potente
          buscador permite localizar fácilmente cualquier contenido publicado.
          En RollingNews los usuarios pueden consultar contenidos informativos
          en cualquier formato: texto, imágenes, vídeos, gráficos o
          interactivos. Adicionalmente, RollingNews ofrece una amplia gama de
          servicios prácticos como la información del tiempo, la grilla de
          televisión, el tráfico, la bolsa, la cartelera de cine, un canal de
          loterías o el horóscopo.
        </p>
      </section>
      <section class="mb-5">
        <h1 class="display-4 text-center font-bold title text-white">
          Principios y valores
        </h1>
        <p class="lead text-white mx-5">
          <strong>ROLLINGNEWS</strong> asume cotidianamente el compromiso de
          brindar una comunicación honesta e independiente, ejercida con
          responsabilidad profesional, ofreciendo a su público una visión
          completa y actualizada de la realidad. Las personas que integran
          RollingNews se proponen fortalecer las instituciones que sustentan el
          sistema democrático, facilitando la discusión de los grandes temas y
          promoviendo el debate y la comunicación entre los distintos sectores
          de la sociedad.
        </p>
        <div class="mx-5 mb-3">
          <img src={editores} alt="editores trabajando" class="w-100" />
        </div>
        <p class="lead text-white mx-5">
          Nuestros objetivos procuran utilizar la más avanzada tecnología para
          ampliar la gama de opciones informativas, culturales y de
          entretenimiento, así como promover y difundir el talento argentino en
          el contexto de un mundo globalizado. El respeto por su público, el
          servicio a la comunidad y el compromiso con la creatividad productiva
          son valores básicos que impulsan la estrategia de
          <strong>ROLLINGNEWS</strong>.
        </p>
      </section>
      <section>
        <h1 class="display-4 text-center font-bold text-white">
          Trabajamos para el lector
        </h1>
        <p class="lead text-white mx-5">
          Comunicar la noticia de manera clara, rápida, atractiva y eficaz es la
          tarea fundamental del periodismo, en general, y de la edición
          periodística, en particular.
        </p>
        <div class="mx-5">
          <img
            src={sobrenosotros}
            alt="ceo del diario Rolling News"
            className="w-100"
          />
        </div>
        <p class="lead text-white mx-5 mb-0">
          Desarrollar la máxima información en el menor espacio posible y con el
          mayor impacto comunicativo. Y si es con ese plus mágico de la belleza,
          mucho mejor. Nuestra misión es poner todo nuestro talento,
          profesionalidad y experiencia a su servicio. Cuanto más cerca estemos
          del lector, más lejos estaremos de equivocarnos.
        </p>
      </section>
    </main>
  );
};

export default Sobrenosotros;
