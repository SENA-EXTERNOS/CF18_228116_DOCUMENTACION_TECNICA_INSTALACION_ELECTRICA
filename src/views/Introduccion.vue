<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Estimado aprendiz, bienvenido al desarrollo de este componente, el cual está diseñado para que aprenda fortalezca sus conocimientos sobre esta área. También para entender cómo se ensamblan los cables eléctricos, tipos existentes, sus características y usos. A su vez, se asociará la reglamentación acerca del marco normativo y legal que regula el trabajo sobre los aparatos eléctricos.
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.svg")
      .col-lg-9(data-aos="flip-up")
        .cajon.color-primario.p-4
          p.mb-0 La electricidad en el hogar, en la tienda, en la oficina o en cualquier industria, se ha convertido en algo indispensable, esta genera circuitos y equipos que pueden ser utilizados de forma continua, por ejemplo; en los servicios de iluminación, calefacción, ascensores, montacargas, electrodomésticos, ventilación, megafonía, teléfonos, televisores, entre otros. La electricidad también ha permitido añadir trabajo mecánico como una fuerza de transformación según las necesidades del caso específico. En este contexto, se entiende por instalación cualquier conjunto de equipos y circuitos asociados con los fines de producción, transformación, transmisión, distribución o aprovechamiento de energía eléctrica.
    
    p.mb-5 Lo invitamos a ver el siguiente video introductorio, en el cual se explicará de manera general todos los temas que se desarrollarán en este componente.

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
