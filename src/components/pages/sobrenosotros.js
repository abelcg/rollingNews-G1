import React from "react";
import ceodiario from "../../img/ceo diario.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import editores from "../../img/editores.jpg";
import sobrenosotros from "../../img/sobre nosotros.jpg";

const Sobrenosotros = () => {
  return (
    <main>
      <h1 class="display-4 text-center">¿Quienes somos?</h1>

      <img
        src={ceodiario}
        alt="ceo del diario Rolling News"
        className="w-100"
      />
      <p class="lead text-muted mb-0">
        RollingNews, rigor tradicional e innovación constante RollingNews es un
        medio online que ofrece información actualizada en tiempo real y de
        manera permanente las 24 horas del día, todos los días del año. Los
        contenidos digitales de RollingNews pueden ser consultados a través de
        internet desde cualquier ordenador o mediante dispositivos móviles como
        smartphones o tabletas. Un equipo integrado por periodistas,
        diseñadores, técnicos y comerciales, entre otros profesionales, tiene a
        su cargo la elaboración de RollingNews Entre otros contenidos,
        RollingNews ofrece noticias de última hora, entrevistas, reportajes,
        narraciones minuto a minuto de eventos en directo, columnas de opinión y
        decenas de blogs especializados. La web cuenta con numerosas áreas de
        participación de los usuarios, además de la posibilidad de comentar
        cualquier noticia publicada en la web, y dispone de una potente oferta
        informativa multimedia que abarca desde la cobertura de noticias y
        videorreportajes, hasta la producción propia de programas de divulgación
        y entretenimiento. Un potente buscador permite localizar fácilmente
        cualquier contenido publicado en RollingNews En RollingNews los usuarios
        pueden consultar contenidos informativos en cualquier formato: texto,
        imágenes, vídeos, gráficos o interactivos. Adicionalmente, RollingNews
        ofrece una amplia gama de servicios prácticos como la información del
        tiempo, la parrilla de televisión, el tráfico, la bolsa, la cartelera de
        cine, un canal de loterías o el horóscopo.
      </p>
      <h1 class="display-4 text-center">Principios y Valores</h1>

      <img src={editores} alt="editores trabajando" className="w-100" />
      <p class="lead text-muted mb-0">
        RollingNews asume cotidianamente el compromiso de brindar una
        comunicación honesta e independiente, ejercida con responsabilidad
        profesional, ofreciendo a sus públicos una visión completa y actualizada
        de la realidad. Las personas que integran RollingNews se proponen
        fortalecer las instituciones que sustentan el sistema democrático,
        facilitando la discusión de los grandes temas y promoviendo el debate y
        la comunicación entre los distintos sectores de la sociedad. Son
        objetivos de RollingNews utilizar la más avanzada tecnología para
        ampliar la gama de opciones informativas, culturales y de
        entretenimiento, así como promover y difundir el talento argentino en el
        contexto de un mundo globalizado. El respeto por sus públicos, el
        servicio a la comunidad y el compromiso con la creatividad productiva
        son valores básicos que impulsan la estrategia de RollingNews.
      </p>
      <h1 class="display-4 text-center">Trabajamos para el lector</h1>
      <img
        src={sobrenosotros}
        alt="ceo del diario Rolling News"
        className="w-100"
      />
      <p class="lead text-muted mb-0">
        Comunicar la noticia de manera clara, rápida, atractiva y eficaz es la
        tarea fundamental del periodismo, en general, y de la edición
        periodística, en particular. Desarrollar la máxima información en el
        menor espacio posible y con el mayor impacto comunicativo. Y si es con
        ese plus mágico de la belleza, mucho mejor. Nuestra misión es
        poner todo nuestro talento, profesionalidad y experiencia a su servicio.
        Cuanto más cerca estemos del lector, más lejos estaremos de
        equivocarnos.
      </p>
    </main>
  );
};

export default Sobrenosotros;