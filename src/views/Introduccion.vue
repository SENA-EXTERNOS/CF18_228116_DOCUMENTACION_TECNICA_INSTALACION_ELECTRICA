<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Estimado aprendiz, bienvenido al componente formativo Documentación técnica de la instalación eléctrica, el cual está diseñado para que aprenda sobre los aparatos eléctricos. También para entender cómo se ensamblan los cables eléctricos, qué tipos hay y cuáles son sus características y usos. A su vez, se asociará este con la introducción en parte del marco normativo y legal que regula el trabajo sobre los aparatos eléctricos. 
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.svg")
      .col-lg-9(data-aos="flip-up")
        .cajon.color-primario.p-4
          p.mb-0 La electricidad en el hogar, la tienda, la oficina, en cualquier industria, se ha convertido en algo indispensable de manera global, esta genera circuitos y equipos que pueden ser utilizados de forma continua en los servicios de iluminación, calefacción, agua caliente, ascensores, montacargas, electrodomésticos, ventilación, megafonía, teléfonos, televisores, lo cual permite usar cada uno de estos dispositivos, a su vez utilizarlos donde sea necesario.  Ha permitido entre muchas otras, añadir trabajo mecánico como una fuerza de transformación según las necesidades del caso específico. En este contexto, se entiende por instalación cualquier conjunto de equipos y circuitos asociados con los fines de producción, transformación, transmisión, distribución o aprovechamiento de energía eléctrica.
    
    .h5.mb-5 Se invita a que visualice el siguiente video introductorio en el cual se explicará de manera general todos los temas que se desarrollarán en este componente. 

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
